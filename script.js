// Agregar evento de scroll para cambiar el color del encabezado
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = '#444';
    } else {
        header.style.background = '#333';
    }
});

// Agregar funcionalidad al formulario de contacto
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Mensaje enviado con éxito!');
});
