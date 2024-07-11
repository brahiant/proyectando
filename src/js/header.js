document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navbarMenu = document.querySelector('.navbar-menu');

    mobileMenu.addEventListener('click', () => {
        navbarMenu.classList.toggle('active');
    });
});

async function getListNavbarMenu() {
    const listMenu = [
        { name: 'Inicio', icon: 'bi bi-house' },
        { name: 'Quiénes somos', icon: 'bi bi-people' },
        { name: 'Servicios', icon: 'bi bi-briefcase' },
        { name: 'Contacto', icon: 'bi bi-envelope' }
    ];

    const ul = document.querySelector('#listNavbar');
    if (!ul) {
        console.error('Elemento de lista del navbar no encontrado');
        return;
    }

    ul.innerHTML = '';
    listMenu.forEach(element => {
        let newLi = document.createElement('li');
        newLi.innerHTML = `<button type="button" class="btn btn-outline-primary"><i class="${element.icon}"></i>${element.name}</button>`;
        ul.appendChild(newLi);
    });
}

getListNavbarMenu();