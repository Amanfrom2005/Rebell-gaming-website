document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const desktopNav = document.querySelector('nav');
  
  // Clone desktop navigation for mobile
  if (desktopNav) {
      const navClone = desktopNav.cloneNode(true);
      mobileMenu.appendChild(navClone);
      
      // Add dropdown functionality for mobile
      const mobileMenuItems = mobileMenu.querySelectorAll('li > a');
      mobileMenuItems.forEach(item => {
          if (item.nextElementSibling && item.nextElementSibling.tagName === 'UL') {
              const submenu = item.nextElementSibling;
              submenu.classList.add('mobile-submenu');
              
              const arrow = document.createElement('i');
              arrow.className = 'bx bx-down-arrow';
              item.appendChild(arrow);
              
              item.addEventListener('click', function(e) {
                  e.preventDefault();
                  arrow.classList.toggle('rotate');
                  submenu.classList.toggle('active');
              });
          }
      });
  }
  
  // Toggle mobile menu
  hamburger.addEventListener('click', function() {
      this.classList.toggle('open');
      mobileMenu.classList.toggle('active');
  });
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', function(e) {
      if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
          hamburger.classList.remove('open');
          mobileMenu.classList.remove('active');
          
          // Also close all submenus
          const submenus = mobileMenu.querySelectorAll('.mobile-submenu');
          submenus.forEach(submenu => {
              submenu.classList.remove('active');
              const arrow = submenu.previousElementSibling.querySelector('i');
              if (arrow) arrow.classList.remove('rotate');
          });
      }
  });
});