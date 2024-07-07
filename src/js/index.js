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

async function getListProyect() {
    const count = 4;
    const div = document.querySelector('#proyects');
    div.innerHTML = '';
    if (!div) {
        console.error('Elemento de lista del navbar no encontrado');
        return;
    }
    for (let i = 0; i < count; i++) {
        let newDiv = document.createElement('div');
        newDiv.className = 'col-6 col-md-4 col-lg-2';
        newDiv.innerHTML = 
        `<img src="src/img/edificio_${i+1}.png" alt="Reconocimiento 1" class="img-fluid award-logo">`;
        div.appendChild(newDiv);
    }
}

async function getListLogoCustomer() {
    const count = 6;
    const div = document.querySelector('#logoCustomer');
    div.innerHTML = '';
    if (!div) {
        console.error('Elemento de lista del navbar no encontrado');
        return;
    }
    for (let i = 0; i < count; i++) {
        let newDiv = document.createElement('div');
        newDiv.className = 'col-6 col-md-4 col-lg-2';
        newDiv.innerHTML = 
        `<img src="src/img/logo_empresa_${i+1}.jpg" alt="Reconocimiento 1" class="img-fluid client-logo">`;
        div.appendChild(newDiv);
    }
}

getListNavbarMenu();
getListProyect();
getListLogoCustomer();