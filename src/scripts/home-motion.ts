import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

let cleanupHomeMotion = () => {};

const setupHomeMotion = () => {
  cleanupHomeMotion();

  const home = document.querySelector<HTMLElement>('.home-page');
  if (!home) return;

  const cleanups: Array<() => void> = [];
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  if (!reducedMotion.matches) {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray<HTMLElement>('[data-home-reveal]').forEach((element) => {
      const direction = element.dataset.homeReveal === 'right' ? 1 : -1;
      const tween = gsap.fromTo(
        element,
        { autoAlpha: 0, x: direction * 86, y: 18 },
        {
          autoAlpha: 1,
          x: 0,
          y: 0,
          duration: 0.56,
          ease: 'power3.out',
          scrollTrigger: { trigger: element, start: 'top 86%', once: true },
        },
      );
      cleanups.push(() => tween.kill());
    });

    gsap.utils.toArray<HTMLElement>('[data-home-title]').forEach((wrapper) => {
      const title = wrapper.querySelector<HTMLElement>('[data-section-title]');
      if (!title) return;
      const tween = gsap.fromTo(
        title,
        { autoAlpha: 0, x: -120, rotate: -1.5 },
        {
          autoAlpha: 1,
          x: 0,
          rotate: 0,
          duration: 0.44,
          ease: 'back.out(1.25)',
          scrollTrigger: { trigger: wrapper, start: 'top 90%', once: true },
        },
      );
      cleanups.push(() => tween.kill());
    });
  }

  const projectPreview = document.querySelector<HTMLElement>('[data-home-projects]');
  if (projectPreview) {
    const tabList = projectPreview.querySelector<HTMLElement>('[data-home-project-tabs]');
    const tabs = [...projectPreview.querySelectorAll<HTMLButtonElement>('[data-home-project-tab]')];
    const panels = [...projectPreview.querySelectorAll<HTMLElement>('[data-home-project-panel]')];
    let panelAnimation: Animation | null = null;

    const activateProject = (nextIndex: number, moveFocus = false) => {
      if (!tabs.length || tabs.length !== panels.length) return;
      const index = (nextIndex + tabs.length) % tabs.length;

      tabs.forEach((tab, tabIndex) => {
        const isActive = tabIndex === index;
        tab.setAttribute('aria-selected', String(isActive));
        tab.tabIndex = isActive ? 0 : -1;
        panels[tabIndex].hidden = !isActive;
      });

      const activeTab = tabs[index];
      const activePanel = panels[index];
      if (moveFocus) activeTab.focus();

      if (tabList && tabList.scrollWidth > tabList.clientWidth) {
        tabList.scrollTo({
          left: Math.max(0, activeTab.offsetLeft - tabList.clientWidth / 2 + activeTab.offsetWidth / 2),
          behavior: reducedMotion.matches ? 'auto' : 'smooth',
        });
      }

      panelAnimation?.cancel();
      if (!reducedMotion.matches) {
        panelAnimation = activePanel.animate(
          [
            { opacity: 0, transform: 'translateY(0.75rem)' },
            { opacity: 1, transform: 'translateY(0)' },
          ],
          { duration: 260, easing: 'cubic-bezier(0.2, 0.8, 0.2, 1)' },
        );
      }
    };

    const tabCleanups = tabs.map((tab, index) => {
      const clickHandler = () => activateProject(index);
      const keyHandler = (event: KeyboardEvent) => {
        let nextIndex: number | undefined;
        if (event.key === 'ArrowRight') nextIndex = index + 1;
        if (event.key === 'ArrowLeft') nextIndex = index - 1;
        if (event.key === 'Home') nextIndex = 0;
        if (event.key === 'End') nextIndex = tabs.length - 1;
        if (nextIndex === undefined) return;
        event.preventDefault();
        activateProject(nextIndex, true);
      };
      tab.addEventListener('click', clickHandler);
      tab.addEventListener('keydown', keyHandler);
      return () => {
        tab.removeEventListener('click', clickHandler);
        tab.removeEventListener('keydown', keyHandler);
      };
    });

    cleanups.push(() => {
      panelAnimation?.cancel();
      tabCleanups.forEach((cleanup) => cleanup());
    });
  }

  const hero = document.getElementById('home');
  const video = document.querySelector<HTMLVideoElement>('[data-background-video]');
  if (hero && video) {
    let videoFrame = 0;
    const syncVideo = () => {
      videoFrame = 0;
      const bounds = hero.getBoundingClientRect();
      const visible = bounds.bottom > 0 && bounds.top < window.innerHeight;
      if (!visible || reducedMotion.matches || document.hidden) video.pause();
      else video.play().catch(() => {});
    };
    const requestVideoSync = () => {
      if (videoFrame) return;
      videoFrame = requestAnimationFrame(syncVideo);
    };
    window.addEventListener('scroll', requestVideoSync, { passive: true });
    window.addEventListener('resize', requestVideoSync);
    document.addEventListener('visibilitychange', requestVideoSync);
    reducedMotion.addEventListener('change', requestVideoSync);
    syncVideo();
    cleanups.push(() => {
      if (videoFrame) cancelAnimationFrame(videoFrame);
      window.removeEventListener('scroll', requestVideoSync);
      window.removeEventListener('resize', requestVideoSync);
      document.removeEventListener('visibilitychange', requestVideoSync);
      reducedMotion.removeEventListener('change', requestVideoSync);
      if (!reducedMotion.matches && !document.hidden) video.play().catch(() => {});
    });
  }

  cleanupHomeMotion = () => {
    cleanups.forEach((cleanup) => cleanup());
    ScrollTrigger.getAll().forEach((trigger) => {
      const triggerElement = trigger.trigger;
      if (triggerElement instanceof Element && triggerElement.closest('.home-page')) trigger.kill();
    });
  };
};

document.addEventListener('astro:page-load', setupHomeMotion);
document.addEventListener('astro:before-swap', cleanupHomeMotion);
setupHomeMotion();
