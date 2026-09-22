// ==========================================
// MENÚ RESPONSIVE
// ==========================================

const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');


// Abrir / cerrar menú al presionar el botón
menuBtn.addEventListener('click', () => {

    navLinks.classList.toggle('active');

    const menuOpen = navLinks.classList.contains('active');

    // Accesibilidad
    menuBtn.setAttribute('aria-expanded', menuOpen);

    // Cambiar icono hamburguesa / X
    menuBtn.innerHTML = menuOpen
        ? '<i data-lucide="x"></i>'
        : '<i data-lucide="menu"></i>';

    lucide.createIcons();
});


// ==========================================
// CERRAR MENÚ AL SELECCIONAR UNA OPCIÓN
// ==========================================

const links = navLinks.querySelectorAll('a');

links.forEach(link => {

    link.addEventListener('click', () => {

        navLinks.classList.remove('active');

        menuBtn.setAttribute('aria-expanded', 'false');

        menuBtn.innerHTML = '<i data-lucide="menu"></i>';

        lucide.createIcons();
    });

});


// ==========================================
// CERRAR MENÚ AL CAMBIAR A PANTALLA GRANDE
// ==========================================

window.addEventListener('resize', () => {

    if (window.innerWidth > 768) {

        navLinks.classList.remove('active');

        menuBtn.setAttribute('aria-expanded', 'false');

        menuBtn.innerHTML = '<i data-lucide="menu"></i>';

        lucide.createIcons();
    }

});