/* ===================================
   MAIN JAVASCRIPT - I7 DIGITAL
   Funcionalidades principais do site
   =================================== */

// ===== IMPORTS =====
import { initNavigation } from './modules/navigation.js';
import { initThemeToggle } from './modules/theme.js';
import { initTestimonials } from './modules/testimonials.js';
import { initContactForm } from './modules/contact-form.js';
import { initScrollAnimations } from './modules/scroll-animations.js';
import { initLazyLoading } from './modules/lazy-loading.js';

// ===== DOM CONTENT LOADED =====
document.addEventListener('DOMContentLoaded', () => {
  // Initialize all modules
  initNavigation();
  initThemeToggle();
  initTestimonials();
  initContactForm();
  initScrollAnimations();
  initLazyLoading();
  
  // Initialize scroll header
  initScrollHeader();
  
  // Initialize smooth scroll
  initSmoothScroll();
  
  // Initialize newsletter form
  initNewsletterForm();
});

// ===== SCROLL HEADER =====
function initScrollHeader() {
  const header = document.getElementById('header');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY >= 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// ===== SMOOTH SCROLL =====
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      
      // Ignore empty hash or just #
      if (href === '#' || href === '') return;
      
      const target = document.querySelector(href);
      
      if (target) {
        e.preventDefault();
        
        const headerHeight = document.getElementById('header').offsetHeight;
        const targetPosition = target.offsetTop - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        
        // Close mobile menu if open
        const navMenu = document.getElementById('nav-menu');
        if (navMenu.classList.contains('show')) {
          navMenu.classList.remove('show');
        }
        
        // Update active link
        updateActiveLink(href);
      }
    });
  });
}

// ===== UPDATE ACTIVE LINK =====
function updateActiveLink(href) {
  const navLinks = document.querySelectorAll('.nav__link');
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === href) {
      link.classList.add('active');
    }
  });
}

// ===== NEWSLETTER FORM =====
function initNewsletterForm() {
  const form = document.getElementById('newsletter-form');
  
  if (!form) return;
  
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const input = form.querySelector('input[type="email"]');
    const email = input.value.trim();
    
    if (!email) return;
    
    // Simulate API call
    try {
      // In production, replace with actual API endpoint
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show success message
      showNotification('Obrigado por se inscrever!', 'success');
      
      // Reset form
      form.reset();
    } catch (error) {
      showNotification('Erro ao se inscrever. Tente novamente.', 'error');
    }
  });
}

// ===== SHOW NOTIFICATION =====
function showNotification(message, type = 'info') {
  // Remove existing notifications
  const existingNotification = document.querySelector('.notification');
  if (existingNotification) {
    existingNotification.remove();
  }
  
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification notification--${type}`;
  notification.innerHTML = `
    <div class="notification__content">
      <span class="notification__message">${message}</span>
      <button class="notification__close" aria-label="Close notification">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
  `;
  
  // Add to body
  document.body.appendChild(notification);
  
  // Trigger animation
  setTimeout(() => {
    notification.classList.add('show');
  }, 10);
  
  // Close button
  const closeBtn = notification.querySelector('.notification__close');
  closeBtn.addEventListener('click', () => {
    closeNotification(notification);
  });
  
  // Auto close after 5 seconds
  setTimeout(() => {
    closeNotification(notification);
  }, 5000);
}

// ===== CLOSE NOTIFICATION =====
function closeNotification(notification) {
  notification.classList.remove('show');
  setTimeout(() => {
    notification.remove();
  }, 300);
}

// ===== UTILITY: DEBOUNCE =====
export function debounce(func, wait = 300) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// ===== UTILITY: THROTTLE =====
export function throttle(func, limit = 300) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// ===== ADD NOTIFICATION STYLES =====
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
  .notification {
    position: fixed;
    top: 100px;
    right: 20px;
    background-color: var(--color-bg-primary);
    border: 1px solid var(--color-border-light);
    border-radius: var(--radius-lg);
    padding: var(--spacing-md) var(--spacing-lg);
    box-shadow: var(--shadow-xl);
    z-index: 9999;
    transform: translateX(400px);
    transition: transform 0.3s ease-in-out;
    max-width: 400px;
  }
  
  .notification.show {
    transform: translateX(0);
  }
  
  .notification__content {
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
  }
  
  .notification__message {
    flex: 1;
    font-size: var(--font-size-sm);
    color: var(--color-text-primary);
  }
  
  .notification__close {
    flex-shrink: 0;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-full);
    cursor: pointer;
    transition: background-color var(--transition-fast);
  }
  
  .notification__close:hover {
    background-color: var(--color-bg-secondary);
  }
  
  .notification--success {
    border-left: 4px solid var(--color-success);
  }
  
  .notification--error {
    border-left: 4px solid var(--color-error);
  }
  
  .notification--warning {
    border-left: 4px solid var(--color-warning);
  }
  
  .notification--info {
    border-left: 4px solid var(--color-info);
  }
  
  @media screen and (max-width: 640px) {
    .notification {
      right: 10px;
      left: 10px;
      max-width: none;
    }
  }
`;
document.head.appendChild(notificationStyles);

// Made with Bob
