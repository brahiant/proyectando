document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navbarMenu = document.querySelector('.navbar-menu');

    mobileMenu.addEventListener('click', () => {
        navbarMenu.classList.toggle('active');
    });

    getListNavbarMenu();
});

async function getListNavbarMenu() {
    const listMenu = [
        { name: 'Inicio', icon: 'bi bi-house', href: 'index.php' },
        { name: 'Quiénes somos', icon: 'bi bi-people', href: 'quienes_somos.php' },
        { name: 'Servicios', icon: 'bi bi-briefcase', href: 'servicios.php' },
        { name: 'Contacto', icon: 'bi bi-envelope', href: 'contacto.php' }
    ];

    const ul = document.querySelector('#listNavbar');
    if (!ul) {
        console.error('Elemento de lista del navbar no encontrado');
        return;
    }

    ul.innerHTML = '';
    listMenu.forEach(element => {
        let newLi = document.createElement('li');
        newLi.classList.add('nav-item');
        newLi.innerHTML = `<a class="nav-link" href="${element.href}"><i class="${element.icon}"></i> ${element.name}</a>`;
        ul.appendChild(newLi);
    });
}
getListNavbarMenu();
