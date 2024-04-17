import Animales from './Animales.js';

const audioPlayer = document.getElementById('player');

export class Leon extends Animales {
    constructor(nombre, edad, comentario, img, sonido){
        super(nombre, edad, comentario, img, sonido);
    }

    cantoLeon(){
        audioPlayer.src = `./assets/sounds/${this.sonido}`;
        audioPlayer.play();
        console.log(audioPlayer)
    }
}

export class Lobo extends Animales {
    constructor(nombre, edad, comentario, img, sonido){
        super(nombre, edad, comentario, img, sonido);
    }

    cantoLobo(){
        audioPlayer.src = `/assets/sounds/${this.sonido}`;
        audioPlayer.play();
    }
}

export class Aguila extends Animales {
    constructor(nombre, edad, comentario, img, sonido){
        super(nombre, edad, comentario, img, sonido);
    }

    cantoAguila (){
        audioPlayer.src = `/assets/sounds/${this.sonido}`;
        audioPlayer.play();
    }
}

export class Oso extends Animales {
    constructor(nombre, edad, comentario, img, sonido){
        super(nombre, edad, comentario, img, sonido);
    }

    cantoOso(){
        audioPlayer.src = `/assets/sounds/${this.sonido}`;
        audioPlayer.play();
    }
}

export class Serpiente extends Animales{
    constructor(nombre, edad, comentario, img, sonido){
        super(nombre, edad, comentario, img, sonido)
    }

    cantoSerpiente(){
        audioPlayer.src = `/assets/sounds/${this.sonido}`;
        audioPlayer.play();
    }
}