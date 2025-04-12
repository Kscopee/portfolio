// ===== SCROLL LOGIC =====
// highlight the current section in the navigation bar when scrolling
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");
    let isManuallyScrolling = false;
  
    // map of section IDs for nav links
    const sectionToLinkMap = {};
  
    // create map of sections and their links
    navLinks.forEach((link) => {
      const sectionId = link.getAttribute("href");
      const sectionElement = document.querySelector(
        sectionId.replace("-anchor", "")
      );
      const anchorElement = document.querySelector(sectionId);
  
      if (sectionElement && anchorElement) {
        // store both the section and anchor ID
        const cleanId = sectionId.substring(1);
        const sectionCleanId = sectionId.replace("-anchor", "").substring(1);
        sectionToLinkMap[cleanId] = link;
        sectionToLinkMap[sectionCleanId] = link;
      }
    });
  
    // observers for anchors and sections
    const observerOptions = {
      root: null,
      rootMargin: "-10% 0px -70% 0px",
      threshold: [0.1, 0.5],
    };
  
    const observer = new IntersectionObserver((entries) => {
      if (isManuallyScrolling) return;
  
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const link = sectionToLinkMap[entry.target.id];
          if (link) {
            // remove active class from all links
            navLinks.forEach((navLink) => navLink.classList.remove("active"));
            // add active class to this link
            link.classList.add("active");
          }
        }
      });
    }, observerOptions);
  
    // observe both anchors and sections
    document.querySelectorAll(".anchor").forEach((anchor) => {
      observer.observe(anchor);
    });
  
    document.querySelectorAll(".section").forEach((section) => {
      observer.observe(section);
    });
  
    // handle click navigation
    navLinks.forEach((link) => {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);
  
        navLinks.forEach((navLink) => navLink.classList.remove("active"));
        this.classList.add("active");
  
        isManuallyScrolling = true;
        // scroll to the target element smoothly
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
        // reset the flag after 1 second
        setTimeout(() => {
          isManuallyScrolling = false;
        }, 1000);
      });
    });
  
    // handling for top of page (home section)
    window.addEventListener("scroll", function () {
      // if user near the top of the page, highlight home
      if (window.scrollY < 100 && !isManuallyScrolling) {
        const homeLink = document.querySelector(".nav-link[href='#home-anchor']");
        if (homeLink && !homeLink.classList.contains("active")) {
          navLinks.forEach((link) => link.classList.remove("active"));
          homeLink.classList.add("active");
        }
      }
    });
  
    // highlight check
    if (window.scrollY < 100) {
      // if near top of page
      const homeLink = document.querySelector(".nav-link[href='#home-anchor']");
      if (homeLink) homeLink.classList.add("active");
    } else {
      // when page is scrolled down the page
      const visibleSections = document.querySelectorAll(".section");
      for (const section of visibleSections) {
        // get element position relative to viewport
        const rect = section.getBoundingClientRect();
        // if midde of the viewport intersects with this section
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          // get the link for this section
          const link = sectionToLinkMap[section.id];
          if (link) {
            // remove active class from all links
            navLinks.forEach((navLink) => navLink.classList.remove("active"));
            //   add active class to this link
            link.classList.add("active");
            break; // no need to check other sections so break
          }
        }
      }
    }
  });