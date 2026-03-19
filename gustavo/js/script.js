function toggleMenu() {
    const nav = document.getElementById('navLinks');
    if (nav.style.display === 'flex') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'flex';
        nav.style.flexDirection = 'column';
        nav.style.position = 'absolute';
        nav.style.top = '70px';
        nav.style.left = '0';
        nav.style.width = '100%';
        nav.style.backgroundColor = '#000039';
        nav.style.textAlign = 'center';
    }
}

// Suavizar el scroll al hacer clic en los enlaces
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Función para animar elementos al hacer scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // Si el elemento es visible en el viewport
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            // Opcional: quita el comentario si quieres que la animación 
            // se repita cada vez que subes y bajas.
            // entry.target.classList.remove('active');
        }
    });
}, {
    threshold: 0.15 // El elemento debe estar al menos un 15% visible
});

// Seleccionamos todos los elementos con la clase 'reveal' y los observamos
const revealElements = document.querySelectorAll('.reveal');
revealElements.forEach((el) => observer.observe(el));

// --- Lógica del Menú Hamburguesa ---
const burger = document.getElementById('burger');
const nav = document.getElementById('navLinks');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    
    // Animación simple del icono hamburguesa
    burger.classList.toggle('toggle');
});

// Cerrar el menú al hacer clic en un link (para móviles)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('nav-active');
    });
});

// --- Lógica del Slider Hero ---
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

function changeSlide(n) {
    showSlide(currentSlide + n);
}

// Auto-play cada 5 segundos
setInterval(() => {
    changeSlide(1);
}, 5000);

// Mantener la lógica de Intersection Observer anterior para los efectos de scroll
// (El código de la respuesta anterior para .reveal)