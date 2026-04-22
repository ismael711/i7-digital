/* ===================================
   SCROLL ANIMATIONS MODULE
   Intersection Observer para animações
   =================================== */

export function initScrollAnimations() {
  // Check if Intersection Observer is supported
  if (!('IntersectionObserver' in window)) {
    console.warn('Intersection Observer not supported');
    return;
  }
  
  // Observer options
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  
  // Create observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        
        // Optional: unobserve after animation
        // observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Elements to observe
  const elementsToAnimate = document.querySelectorAll(`
    .hero__content,
    .hero__image,
    .section__header,
    .about__image,
    .about__info,
    .service-card,
    .testimonial-card,
    .contact__info,
    .contact__form
  `);
  
  // Observe elements
  elementsToAnimate.forEach(element => {
    element.classList.add('animate-element');
    observer.observe(element);
  });
  
  // Add animation styles
  addAnimationStyles();
}

// Add animation styles dynamically
function addAnimationStyles() {
  const styles = document.createElement('style');
  styles.textContent = `
    .animate-element {
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }
    
    .animate-element.animate-in {
      opacity: 1;
      transform: translateY(0);
    }
    
    /* Stagger animation for grid items */
    .service-card {
      transition-delay: calc(var(--animation-order, 0) * 0.1s);
    }
    
    .service-card:nth-child(1) { --animation-order: 1; }
    .service-card:nth-child(2) { --animation-order: 2; }
    .service-card:nth-child(3) { --animation-order: 3; }
    .service-card:nth-child(4) { --animation-order: 4; }
    .service-card:nth-child(5) { --animation-order: 5; }
    .service-card:nth-child(6) { --animation-order: 6; }
    
    /* Respect reduced motion preference */
    @media (prefers-reduced-motion: reduce) {
      .animate-element {
        opacity: 1;
        transform: none;
        transition: none;
      }
    }
  `;
  document.head.appendChild(styles);
}

// Parallax effect for hero section
export function initParallax() {
  const heroImage = document.querySelector('.hero__image-wrapper');
  
  if (!heroImage) return;
  
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * 0.3;
    
    heroImage.style.transform = `translateY(${rate}px)`;
  });
}

// Initialize parallax
initParallax();

// Made with Bob
