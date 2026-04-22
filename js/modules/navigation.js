/* ===================================
   NAVIGATION MODULE
   Menu mobile e navegação
   =================================== */

export function initNavigation() {
  const navToggle = document.getElementById('nav-toggle');
  const navClose = document.getElementById('nav-close');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav__link');
  
  // Open menu
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.add('show');
      document.body.style.overflow = 'hidden';
    });
  }
  
  // Close menu
  if (navClose) {
    navClose.addEventListener('click', () => {
      navMenu.classList.remove('show');
      document.body.style.overflow = '';
    });
  }
  
  // Close menu when clicking on a link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('show');
      document.body.style.overflow = '';
    });
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
      navMenu.classList.remove('show');
      document.body.style.overflow = '';
    }
  });
  
  // Update active link on scroll
  updateActiveLinkOnScroll();
}

// ===== UPDATE ACTIVE LINK ON SCROLL =====
function updateActiveLinkOnScroll() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__link');
  
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute('id');
      
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
}

// Made with Bob
