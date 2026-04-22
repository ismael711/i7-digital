/* ===================================
   TESTIMONIALS MODULE
   Slider de depoimentos
   =================================== */

export function initTestimonials() {
  const track = document.getElementById('testimonials-track');
  const prevBtn = document.getElementById('testimonials-prev');
  const nextBtn = document.getElementById('testimonials-next');
  const dotsContainer = document.getElementById('testimonials-dots');
  
  if (!track) return;
  
  const cards = track.querySelectorAll('.testimonial-card');
  let currentIndex = 0;
  let autoplayInterval;
  
  // Create dots
  createDots();
  
  // Initialize
  updateSlider();
  startAutoplay();
  
  // Previous button
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      currentIndex = currentIndex === 0 ? cards.length - 1 : currentIndex - 1;
      updateSlider();
      resetAutoplay();
    });
  }
  
  // Next button
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentIndex = currentIndex === cards.length - 1 ? 0 : currentIndex + 1;
      updateSlider();
      resetAutoplay();
    });
  }
  
  // Touch/swipe support
  let touchStartX = 0;
  let touchEndX = 0;
  
  track.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });
  
  track.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });
  
  function handleSwipe() {
    if (touchEndX < touchStartX - 50) {
      // Swipe left
      currentIndex = currentIndex === cards.length - 1 ? 0 : currentIndex + 1;
      updateSlider();
      resetAutoplay();
    }
    if (touchEndX > touchStartX + 50) {
      // Swipe right
      currentIndex = currentIndex === 0 ? cards.length - 1 : currentIndex - 1;
      updateSlider();
      resetAutoplay();
    }
  }
  
  // Create dots
  function createDots() {
    if (!dotsContainer) return;
    
    cards.forEach((_, index) => {
      const dot = document.createElement('div');
      dot.classList.add('testimonials__dot');
      if (index === 0) dot.classList.add('active');
      
      dot.addEventListener('click', () => {
        currentIndex = index;
        updateSlider();
        resetAutoplay();
      });
      
      dotsContainer.appendChild(dot);
    });
  }
  
  // Update slider
  function updateSlider() {
    // Get card width including gap
    const cardWidth = cards[0].offsetWidth;
    const gap = parseInt(getComputedStyle(track).gap) || 0;
    const offset = -(currentIndex * (cardWidth + gap));
    
    track.style.transform = `translateX(${offset}px)`;
    
    // Update dots
    const dots = dotsContainer?.querySelectorAll('.testimonials__dot');
    dots?.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndex);
    });
  }
  
  // Autoplay
  function startAutoplay() {
    autoplayInterval = setInterval(() => {
      currentIndex = currentIndex === cards.length - 1 ? 0 : currentIndex + 1;
      updateSlider();
    }, 5000);
  }
  
  function resetAutoplay() {
    clearInterval(autoplayInterval);
    startAutoplay();
  }
  
  // Pause autoplay on hover
  track.addEventListener('mouseenter', () => {
    clearInterval(autoplayInterval);
  });
  
  track.addEventListener('mouseleave', () => {
    startAutoplay();
  });
  
  // Update on window resize
  window.addEventListener('resize', () => {
    updateSlider();
  });
}

// Made with Bob
