import { Leon, Lobo, Aguila, Oso, Serpiente } from './clases/Tipos.js';
import data from './data.js';

let Animales = [];
let imagenSrc;
let sonidoOrg;

const cardCreate = () => {
    try {
        const template = document.getElementById('Animales');
        template.innerHTML = ``;
        Animales.forEach((key, i) => {
            template.innerHTML += `
            <div class= "px-3 pb-2">
                <div class= "bg-dark text-white">
                    <img
                        height= "200"
                        src= "./assets/imgs/${key.img}"
                        data-bs-toggle= "modal"
                        data-bs-target= "#exampleModal"
                        onclick="modalDetails('${i}')"
                    />
                    <div>
                        <button onclick="playSound('${key.sonido}')" class="btn btn-secondary w-100">
                        <img height= "30" src= "./assets/imgs/audio.svg" /> </button>
                    </div>
                </div>
            </div>
            `
        })
    } catch (error){
        console.log(error);
    }
}

window.playSound = (sonido) => {
    try {
        const animal = Animales.find((item) => {
            console.log(item.sonido)
            return item.sonido === sonido;
        }) 
        console.log(sonido)
        sonido == 'Aullido.mp3' ? animal.cantoLobo()
        : sonido == 'Chillido.mp3' ? animal.cantoAguila()
        : sonido == 'Grunhido.mp3' ? animal.cantoOso()
        : sonido == 'Rugido.mp3' ? animal.cantoLeon()
        : sonido == 'Siseo.mp3' ? animal.cantoSerpiente()
        : undefined;
    } catch (error) {
        console.log(error)
    }
}

window.modalDetails = (animales) => {
    try {
        const modalBody = document.getElementsByClassName('modal-body')[0];
        const animal = Animales[animales];
        console.log(modalBody)
        console.log(animal)
        modalBody.innerHTML = `
                <div class="px-3 pb-2">
                    <div class="card w-50 m-auto bg-dark text-white border-0">
                        <img
                            src="./assets/imgs/${animal.img}"
                            class="d-block m-auto w-100"
                        />
                        <div class="card-body text-center">
                            <h6 class="card-text">${animal.edad}</h6>
                            <h6 class="card-text m-0">Comentarios</h6>
                            <hr/>
                            <p>${animal.comentario}</p>
                        </div>
                    </div>
                </div>
                `
    } catch (error) {
        console.log(error)
    }
};

document.getElementById('animal').addEventListener('change', async (e) => {
    try {
        const animalesSelected = e.target.value;
        const animales = await data.getData()
        const animalesObject = await animales.find((animal) => {
            return animal.name === animalesSelected;
        })
        imagenSrc = `${animalesObject.imagen}`;
        sonidoOrg = `${animalesObject.sonido}`;
        const preview = document.getElementById('preview');
        preview.parentElement.classList.remove('p-5');
        preview.style.backgroundImage = `url(./assets/imgs/${imagenSrc})`;
    } catch (error) {
        console.log (error);
    }
});
let formulario = document.getElementById('form-animal');
console.log(formulario)
formulario.addEventListener('submit', (e) => {
    try {
        e.preventDefault();
        console.log(e)
        const nombre = document.getElementById('animal').value;
        const edad = document.getElementById('edad').value;
        const comentarios = document.getElementById('comentarios').value;
        if (nombre && edad && comentarios) {
            let animal = nombre == 'Lobo' ? new Lobo (nombre, edad, comentarios, imagenSrc, sonidoOrg)
            : nombre == 'Aguila' ? new Aguila (nombre, edad, comentarios, imagenSrc, sonidoOrg)
            : nombre == 'Oso' ? new Oso (nombre, edad, comentarios, imagenSrc, sonidoOrg)
            : nombre == 'Serpiente' ? new Serpiente (nombre, edad, comentarios, imagenSrc, sonidoOrg)
            : nombre == 'Leon' ? new Leon (nombre, edad, comentarios, imagenSrc, sonidoOrg)
            : undefined;
            Animales.push(animal);
            cardCreate();
            e.target.reset();
        } else {
            alert('Faltan datos')
        }
    } catch (error) {
        console.log(error)
    }
});