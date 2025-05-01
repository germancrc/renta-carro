document.addEventListener('DOMContentLoaded', function() {
    // Navbar logic
    const navbar = document.querySelector('.navbar');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    navbarCollapse.addEventListener('show.bs.collapse', function() {
      navbar.classList.add('menu-open', 'scrolled');
    });
    
    navbarCollapse.addEventListener('hidden.bs.collapse', function() {
      navbar.classList.remove('menu-open');
      if (window.scrollY < 50) navbar.classList.remove('scrolled');
    });

    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else if (!navbarCollapse.classList.contains('show')) {
        navbar.classList.remove('scrolled');
      }
    });

    // Carrusel logic
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(document.querySelectorAll('.carousel-slide'));
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    
    let currentIndex = 0;
    let touchStartX = 0;
    let touchEndX = 0;
    let slideWidth;

    function getVisibleSlides() {
      if (window.innerWidth >= 1400) return 3;
      if (window.innerWidth >= 1200) return 3;
      if (window.innerWidth >= 992) return 2;
      if (window.innerWidth >= 768) return 1;
      return 1;
    }

    function updateCarousel() {
      const visibleSlides = getVisibleSlides();
      const maxIndex = Math.max(slides.length - visibleSlides, 0);
      currentIndex = Math.min(currentIndex, maxIndex);
      
      slideWidth = (track.offsetWidth / visibleSlides) - 20;
      track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
      
      prevBtn.disabled = currentIndex === 0;
      nextBtn.disabled = currentIndex >= maxIndex;
    }

    // Eventos táctiles
    track.addEventListener('touchstart', e => {
      touchStartX = e.touches[0].clientX;
    });

    track.addEventListener('touchmove', e => {
      touchEndX = e.touches[0].clientX;
    });

    track.addEventListener('touchend', () => {
      const threshold = 30;
      const deltaX = touchStartX - touchEndX;
      const visibleSlides = getVisibleSlides();
      const maxIndex = Math.max(slides.length - visibleSlides, 0);

      if (deltaX > threshold) {
        currentIndex = Math.min(currentIndex + 1, maxIndex);
      } else if (deltaX < -threshold) {
        currentIndex = Math.max(currentIndex - 1, 0);
      }
      updateCarousel();
    });

    // Controles de flechas
    prevBtn.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
      }
    });

    nextBtn.addEventListener('click', () => {
      const visibleSlides = getVisibleSlides();
      const maxIndex = Math.max(slides.length - visibleSlides, 0);
      if (currentIndex < maxIndex) {
        currentIndex++;
        updateCarousel();
      }
    });

    // Resize handler
    window.addEventListener('resize', () => {
      const visibleSlides = getVisibleSlides();
      const maxIndex = Math.max(slides.length - visibleSlides, 0);
      currentIndex = Math.min(currentIndex, maxIndex);
      updateCarousel();
    });

    // Inicialización
    updateCarousel();
});

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar el carrusel con configuración personalizada
    const testimonialCarousel = new bootstrap.Carousel('#customerTestimonials', {
      interval: 3000, // 3 segundos entre transiciones
      wrap: true, // Ciclo continuo
      pause: 'hover' // Pausar al hacer hover (opcional)
    });
  });