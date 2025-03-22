//  copy email to clipboard when "connect with me" button is clicked
document.addEventListener("DOMContentLoaded", function () {
  const connectButton = document.querySelector(".connect-button");
  connectButton.addEventListener("click", function () {
    const email = "projectkfiles@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      alert("Email copied to clipboard: " + email);
    });
  });
});

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

// ===== TECH STACK LOGIC =====
document.addEventListener("DOMContentLoaded", function () {
  // element getter
  const skillLists = document.querySelectorAll(".skill-list");
  const skillItems = document.querySelectorAll(".skill-list ul li");
  const skillToggleButtons = document.querySelectorAll(".skill-toggle");
  const skillSlides = document.querySelectorAll(".skill-slide");
  const prevButton = document.querySelector(".arrow.prev");
  const nextButton = document.querySelector(".arrow.next");
  const indicators = document.querySelectorAll(".indicator");

  // current skill type and index
  let currentType = "technical";
  let currentIndex = 0;

  // get skill slides of a specific type
  function getTypeSlides(type) {
    return Array.from(skillSlides).filter((slide) =>
      slide.classList.contains(type)
    );
  }

  // setting the active slide
  function setActiveSlide(type, index) {
    // hide other slides
    skillSlides.forEach((slide) => slide.setAttribute("data-active", "false"));

    // get slides of current type
    const typeSlides = getTypeSlides(type);

    // setting the active slide
    if (typeSlides[index]) {
      typeSlides[index].setAttribute("data-active", "true");

      // updating the skill item highlight
      const skillId = typeSlides[index].getAttribute("data-skill");

      // remove active class from all skill items
      skillItems.forEach((item) => item.classList.remove("active"));

      // add active class to the current skill item
      document
        .querySelector(`.skill-list.${type} ul li[data-skill="${skillId}"]`)
        .classList.add("active");

      // Update indicators
      indicators.forEach((indicator, i) => {
        indicator.classList.toggle("active", i === index);
      });
    }
  }

  // skill type logic (technical/soft)
  function switchSkillType(type) {
    currentType = type;
    currentIndex = 0;

    // update toggle buttons
    skillToggleButtons.forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-type") === type);
    });

    // update skill lists visibility
    skillLists.forEach((list) => {
      list.setAttribute("data-active", list.classList.contains(type));
    });

    // set first slide of the new type as active
    setActiveSlide(type, currentIndex);
  }

  // navigate to previous slide
  function prevSlide() {
    const typeSlides = getTypeSlides(currentType);
    currentIndex = (currentIndex - 1 + typeSlides.length) % typeSlides.length;
    setActiveSlide(currentType, currentIndex);
  }

  // navigate to next slide
  function nextSlide() {
    const typeSlides = getTypeSlides(currentType);
    currentIndex = (currentIndex + 1) % typeSlides.length;
    setActiveSlide(currentType, currentIndex);
  }

  // event listeners for toggle buttons
  skillToggleButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const type = this.getAttribute("data-type");
      switchSkillType(type);
    });
  });

  // event listeners for navigation arrows
  prevButton.addEventListener("click", prevSlide);
  nextButton.addEventListener("click", nextSlide);

  // event listeners for indicators
  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", function () {
      currentIndex = index;
      setActiveSlide(currentType, currentIndex);
    });
  });

  // event listeners for skill items
  skillItems.forEach((item) => {
    item.addEventListener("click", function () {
      const skillId = this.getAttribute("data-skill");
      const type = this.closest(".skill-list").classList.contains("technical")
        ? "technical"
        : "soft";

      // switch type if needed
      if (type !== currentType) {
        switchSkillType(type);
      }

      // find the index of the clicked skill
      const typeSlides = getTypeSlides(type);
      const slideIndex = Array.from(typeSlides).findIndex(
        (slide) => slide.getAttribute("data-skill") === skillId
      );

      if (slideIndex !== -1) {
        currentIndex = slideIndex;
        setActiveSlide(type, currentIndex);
      }
    });
  });

  // initialize the first skill
  switchSkillType("technical");
});

// function for handling the skill toggling
document.querySelectorAll(".skill-toggle").forEach((button) => {
  button.addEventListener("click", () => {
    const type = button.dataset.type;

    // update active toggle button
    document.querySelectorAll(".skill-toggle").forEach((btn) => {
      btn.classList.toggle("active", btn === button);
    });

    // show the correct skill list
    document.querySelectorAll(".skill-list").forEach((list) => {
      list.dataset.active = list.classList.contains(type);
    });

    // show the first slide of the selected type
    const firstSlide = document.querySelector(`.skill-slide.${type}`);
    if (firstSlide) {
      document.querySelectorAll(".skill-slide").forEach((slide) => {
        slide.dataset.active = "false";
      });
      firstSlide.dataset.active = "true";
    }
  });
});

// function to handle carousel navigation
document.querySelectorAll(".arrow").forEach((arrow) => {
  arrow.addEventListener("click", () => {
    const activeSlide = document.querySelector(
      '.skill-slide[data-active="true"]'
    );
    const slides = Array.from(document.querySelectorAll(".skill-slide"));
    const currentIndex = slides.indexOf(activeSlide);
    const isNext = arrow.classList.contains("next");
    const type = activeSlide.classList.contains("technical")
      ? "technical"
      : "soft";

    // find the next or previous slide of the same type
    let newIndex = isNext ? currentIndex + 1 : currentIndex - 1;
    if (newIndex < 0) newIndex = slides.length - 1;
    if (newIndex >= slides.length) newIndex = 0;

    while (!slides[newIndex].classList.contains(type)) {
      newIndex = isNext ? newIndex + 1 : newIndex - 1;
      if (newIndex < 0) newIndex = slides.length - 1;
      if (newIndex >= slides.length) newIndex = 0;
    }

    // update active slide
    activeSlide.dataset.active = "false";
    slides[newIndex].dataset.active = "true";
  });
});
