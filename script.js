// script.js


// Obtén todas las diapositivas y botones
var slides = document.querySelectorAll('.carousel-slide');
var prevBtn = document.getElementById('prevBtn');
var nextBtn = document.getElementById('nextBtn');

// Configura un índice de diapositiva actual
var currentSlide = 0;

// Función para mostrar la diapositiva actual
function showSlide(n) {
    // Oculta todas las diapositivas
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    // Muestra la diapositiva deseada
    slides[n].style.display = 'block';
}

// Función para avanzar a la siguiente diapositiva
function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0; // Vuelve al principio si alcanza el final
    }
    showSlide(currentSlide);
}

// Función para retroceder a la diapositiva anterior
function prevSlide() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1; // Ir al final si está en el principio
    }
    showSlide(currentSlide);
}

// Mostrar la primera diapositiva al cargar la página
showSlide(currentSlide);

// Configurar avance automático (cambia de diapositiva cada 3 segundos)
setInterval(nextSlide, 3000);

// Agregar eventos de clic a los botones de anterior y siguiente
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);
