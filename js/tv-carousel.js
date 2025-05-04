// ===== TECH STACK LOGIC =====
document.addEventListener("DOMContentLoaded", function () {
  const skillSections = document.querySelectorAll(".skill-section");
  const skillToggleButtons = document.querySelectorAll(".skill-toggle");

  // Function to switch between skill types
  function switchSkillType(type) {
    // Update toggle buttons
    skillToggleButtons.forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-type") === type);
    });

    // Update skill sections visibility
    skillSections.forEach((section) => {
      section.setAttribute("data-active", section.classList.contains(type));
    });
  }

  // Event listeners for toggle buttons
  skillToggleButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const type = this.getAttribute("data-type");
      switchSkillType(type);
    });
  });

  // Initialize with technical skills shown
  switchSkillType("technical");
});
