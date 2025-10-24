document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const body = document.body;

    if (menuToggle && mobileMenu) {
        function closeMenu() {
            mobileMenu.classList.remove('active');
            menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
            body.style.overflow = 'auto';
        }
        
        function openMenu() {
            mobileMenu.classList.add('active');
            menuToggle.innerHTML = '<i class="fa-solid fa-xmark"></i>';
            body.style.overflow = 'hidden';
        }

        menuToggle.addEventListener('click', () => {
            if (mobileMenu.classList.contains('active')) {
                closeMenu();
            } else {
                openMenu();
            }
        });

        document.querySelectorAll('.mobile-link').forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }

    // Initialize Home Testimonial Slider (if it exists)
    const homeSlider = document.querySelector('.testimonial-slider-home');
    if (homeSlider) {
        const homeSwiper = new Swiper('.testimonial-slider-home', {
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.pagination-home',
                clickable: true,
            },
            slidesPerView: 1,
            spaceBetween: 20,
            breakpoints: {
                640: { slidesPerView: 2, spaceBetween: 30 },
                1024: { slidesPerView: 3, spaceBetween: 30 }
            }
        });
    }

    // Initialize Auto Testimonial Slider (if it exists)
    const autoSlider = document.querySelector('.testimonial-slider-auto');
    if (autoSlider) {
        const autoSwiper = new Swiper('.testimonial-slider-auto', {
            loop: true,
            autoplay: {
                delay: 4500,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.pagination-auto',
                clickable: true,
            },
            slidesPerView: 1,
            spaceBetween: 20,
            breakpoints: {
                640: { slidesPerView: 2, spaceBetween: 30 },
                1024: { slidesPerView: 3, spaceBetween: 30 }
            }
        });
    }
    
    // Update copyright year
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});