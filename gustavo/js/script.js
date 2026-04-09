document.addEventListener('DOMContentLoaded', () => {
    // --- Lógica del Menú Hamburguesa ---
    const burger = document.getElementById('burger');
    const nav = document.getElementById('navLinks');

    if (burger) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
            burger.classList.toggle('toggle');
        });
    }

    // Cerrar el menú al hacer clic en un link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('nav-active');
            burger.classList.remove('toggle');
        });
    });

    // --- Slider Hero ---
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');

    if (slides.length > 0) {
        function showSlide(n) {
            slides.forEach(slide => slide.classList.remove('active'));
            currentSlide = (n + slides.length) % slides.length;
            slides[currentSlide].classList.add('active');
        }

        window.changeSlide = (n) => {
            showSlide(currentSlide + n);
        };

        setInterval(() => changeSlide(1), 5000);
    }

    // --- Animación al hacer Scroll (Reveal) ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    // Suavizar scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});