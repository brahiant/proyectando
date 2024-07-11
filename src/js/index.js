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

getListProyect();