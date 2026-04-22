/* ===================================
   LAZY LOADING MODULE
   Carregamento lazy de imagens
   =================================== */

export function initLazyLoading() {
  // Check if Intersection Observer is supported
  if (!('IntersectionObserver' in window)) {
    // Fallback: load all images immediately
    loadAllImages();
    return;
  }
  
  // Observer options
  const observerOptions = {
    root: null,
    rootMargin: '50px',
    threshold: 0.01
  };
  
  // Create observer
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        loadImage(img);
        observer.unobserve(img);
      }
    });
  }, observerOptions);
  
  // Get all images with data-src attribute
  const lazyImages = document.querySelectorAll('img[data-src]');
  
  // Observe each image
  lazyImages.forEach(img => {
    imageObserver.observe(img);
  });
  
  // Also handle background images
  const lazyBackgrounds = document.querySelectorAll('[data-bg]');
  
  const bgObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target;
        loadBackground(element);
        observer.unobserve(element);
      }
    });
  }, observerOptions);
  
  lazyBackgrounds.forEach(element => {
    bgObserver.observe(element);
  });
}

// Load image
function loadImage(img) {
  const src = img.getAttribute('data-src');
  const srcset = img.getAttribute('data-srcset');
  
  if (!src) return;
  
  // Create a new image to preload
  const tempImg = new Image();
  
  tempImg.onload = () => {
    img.src = src;
    if (srcset) {
      img.srcset = srcset;
    }
    img.classList.add('loaded');
    img.removeAttribute('data-src');
    img.removeAttribute('data-srcset');
  };
  
  tempImg.onerror = () => {
    console.error(`Failed to load image: ${src}`);
    img.classList.add('error');
  };
  
  tempImg.src = src;
}

// Load background image
function loadBackground(element) {
  const bg = element.getAttribute('data-bg');
  
  if (!bg) return;
  
  const tempImg = new Image();
  
  tempImg.onload = () => {
    element.style.backgroundImage = `url(${bg})`;
    element.classList.add('loaded');
    element.removeAttribute('data-bg');
  };
  
  tempImg.onerror = () => {
    console.error(`Failed to load background: ${bg}`);
    element.classList.add('error');
  };
  
  tempImg.src = bg;
}

// Fallback: load all images immediately
function loadAllImages() {
  const lazyImages = document.querySelectorAll('img[data-src]');
  lazyImages.forEach(img => {
    loadImage(img);
  });
  
  const lazyBackgrounds = document.querySelectorAll('[data-bg]');
  lazyBackgrounds.forEach(element => {
    loadBackground(element);
  });
}

// Add lazy loading styles
const styles = document.createElement('style');
styles.textContent = `
  img[data-src] {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }
  
  img[data-src].loaded {
    opacity: 1;
  }
  
  [data-bg] {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }
  
  [data-bg].loaded {
    opacity: 1;
  }
  
  img[data-src].error,
  [data-bg].error {
    opacity: 0.5;
  }
`;
document.head.appendChild(styles);

// Made with Bob
