
// mobile-navigation
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

// scroll to top button
let lastScrollY = window.scrollY;
const navbar = document.getElementById("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY) {
        // Scrolling Down - Hide Navbar
        navbar.classList.add("hidden");
        navbar.classList.remove("scrolled-up");
    } else {
        // Scrolling Up - Show Navbar with Color
        navbar.classList.remove("hidden");
        navbar.classList.add("scrolled-up");
    }

    // If fully scrolled to the top, remove the color
    if (window.scrollY === 0) {
        navbar.classList.add("remove-color");
        setTimeout(() => {
            navbar.classList.remove("scrolled-up", "remove-color");
        }, 300);
    }

    lastScrollY = window.scrollY;
});

// scroll up button
document.addEventListener("DOMContentLoaded", function () {
    const scrollUpBtn = document.getElementById("scroll_up");
  
    function handleScroll() {
      if (window.scrollY > window.innerHeight) {
        scrollUpBtn.classList.add("active");
      } else {
        scrollUpBtn.classList.remove("active");
      }
    }
  
    window.addEventListener("scroll", handleScroll);
  });

  