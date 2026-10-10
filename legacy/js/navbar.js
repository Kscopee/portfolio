// ===== PAGE NAVIGATION LOGIC =====
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");
  const verticalNav = document.querySelector(".vertical-nav");

  // Set active nav link based on current page
  const currentPage = window.location.pathname.split("/").pop() || "home.html";
  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // Check if navbar was in hovered state before navigation
  const wasHovered = sessionStorage.getItem("navbarHovered") === "true";
  if (wasHovered) {
    verticalNav.classList.add("hovered-state");
  }

  // Handle hover state
  verticalNav.addEventListener("mouseenter", function () {
    verticalNav.classList.add("hovered-state");
    sessionStorage.setItem("navbarHovered", "true");
  });

  verticalNav.addEventListener("mouseleave", function () {
    verticalNav.classList.remove("hovered-state");
    sessionStorage.setItem("navbarHovered", "false");
  });

  // Handle link clicks
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      // Keep the hovered state when navigating
      sessionStorage.setItem("navbarHovered", "true");
    });
  });
});
