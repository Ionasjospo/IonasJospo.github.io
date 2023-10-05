document.addEventListener("DOMContentLoaded", function () {
    // Obtén todas las diapositivas
    var slides = document.querySelectorAll('.carousel-slide');

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

    // Mostrar la primera diapositiva al cargar la página
    showSlide(currentSlide);

    // Configurar avance automático (cambia de diapositiva cada 3 segundos)
    setInterval(nextSlide, 3000);
});
