  // Función para activar animaciones al cargar la página
  window.onload = function() {
    // Imagen de la primera sección
    const imageSection = document.getElementById('image-section');
    imageSection.classList.remove('hidden');
    imageSection.classList.add('slide-in');

    // Tarjetas de la segunda sección
    const card1 = document.getElementById('card-1');
    const card2 = document.getElementById('card-2');
    const card3 = document.getElementById('card-3');
    
    setTimeout(() => {
        card1.classList.remove('hidden');
        card1.classList.add('bounce-in');
    }, 300); // Delay para la primera tarjeta

    setTimeout(() => {
        card2.classList.remove('hidden');
        card2.classList.add('bounce-in');
    }, 600); // Delay para la segunda tarjeta

    setTimeout(() => {
        card3.classList.remove('hidden');
        card3.classList.add('bounce-in');
    }, 900); // Delay para la tercera tarjeta
};