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