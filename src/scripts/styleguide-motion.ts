import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reducedMotion) {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((element) => {
    const direction = element.dataset.reveal === 'right' ? 1 : -1;

    gsap.fromTo(
      element,
      { autoAlpha: 0, x: direction * 72, y: 18 },
      {
        autoAlpha: 1,
        x: 0,
        y: 0,
        duration: 0.55,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 84%',
          once: true,
        },
      },
    );
  });

  gsap.utils.toArray<HTMLElement>('[data-section-title]').forEach((title) => {
    gsap.fromTo(
      title,
      { autoAlpha: 0, x: -110, rotate: -1.5 },
      {
        autoAlpha: 1,
        x: 0,
        rotate: 0,
        duration: 0.42,
        ease: 'back.out(1.25)',
        scrollTrigger: {
          trigger: title,
          start: 'top 88%',
          once: true,
        },
      },
    );
  });
}
