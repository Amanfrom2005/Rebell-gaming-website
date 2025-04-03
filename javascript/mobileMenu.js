document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".icon");
  const nav = document.querySelector(".mobile-nav");
  const menuItems = document.querySelectorAll(".mobile-nav ul li a");

  // Toggle sidebar visibility
  menuIcon.addEventListener("click", function (event) {
      event.stopPropagation(); // Prevent immediate closing when clicking the icon
      menuIcon.classList.toggle("active");
      nav.classList.toggle("active");
  });

  // Toggle submenu visibility
  menuItems.forEach((item) => {
      item.addEventListener("click", function (event) {
          let parentLi = this.parentElement;

          if (parentLi.querySelector("ul")) {
              event.preventDefault(); // Prevent navigating
              parentLi.classList.toggle("active");
          }
      });
  });

  // Close sidebar when clicking outside
  document.addEventListener("click", function (event) {
      if (!nav.contains(event.target) && !menuIcon.contains(event.target)) {
          nav.classList.remove("active");
          menuIcon.classList.remove("active");
      }
  });
});
