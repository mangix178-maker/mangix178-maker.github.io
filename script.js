document.addEventListener('DOMContentLoaded', (event) => {
    // 1. Obtener los elementos clave del HTML
    const boton = document.getElementById('botonSorpresa');
    const sorpresaOverlay = document.getElementById('sorpresaOverlay'); // El fondo sombreado (la ventana completa)
    const cerrarBoton = document.getElementById('cerrarSorpresa');    // El botón de la 'X'

    // Función para cerrar la ventana y restaurar el scroll
    const cerrarPopup = () => {
        sorpresaOverlay.classList.remove('mostrar-sorpresa');
        document.body.style.overflow = 'auto'; // Habilita el scroll de nuevo
    };

    // 2. Lógica para MOSTRAR la sorpresa (Al hacer clic en el botón)
    boton.addEventListener('click', () => {
        // Añade la clase 'mostrar-sorpresa' al overlay (que tiene display: flex en CSS)
        sorpresaOverlay.classList.add('mostrar-sorpresa'); 
        
        // Deshabilita el scroll del cuerpo mientras el popup está abierto
        document.body.style.overflow = 'hidden'; 
    });

    // 3. Lógica para CERRAR la sorpresa (Al presionar la 'X')
    cerrarBoton.addEventListener('click', cerrarPopup);

    // 4. Lógica para CERRAR la sorpresa (Al hacer clic en el fondo sombreado / fuera de la caja)
    sorpresaOverlay.addEventListener('click', (e) => {
        // Verifica si el clic se hizo exactamente sobre la capa de fondo (el overlay),
        // y no sobre el cuadro amarillo (sorpresa-popup) o el botón
        if (e.target.id === 'sorpresaOverlay') { 
            cerrarPopup();
        }
    });
});