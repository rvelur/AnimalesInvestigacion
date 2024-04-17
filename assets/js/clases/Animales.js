export default class Animales {

    constructor (nombre, edad, comentario, img, sonido){
        this._nombre = nombre;
        this._edad = edad;
        this._comentario = comentario;
        this._img = img;
        this._sonido = sonido;
    }

    get nombre(){
        return this._nombre;
    }
    get edad(){
        return this._edad;
    }
    get comentario(){
        return this._comentario;
    }
    get img(){
        return this._img;
    }
    get sonido(){
        return this._sonido;
    }
}