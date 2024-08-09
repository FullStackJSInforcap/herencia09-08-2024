export default class Vehiculo{

    constructor(patente, color, marca, modelo){
        this._patente = patente;
        this._color = color;
        this._marca = marca;
        this._modelo = modelo;
    }

    get patente(){
        return this._patente;
    }

    set patente(patente){
        this._patente = patente;
    }

    get color(){
        return this._color;
    }

    set color(color){
        this._color = color;
    }

    get marca(){
        return this._marca;
    }

    set marca(marca){
        this._marca = marca;
    }

    get modelo(){
        return this._modelo;
    }

    set modelo(modelo){
        this._modelo = modelo;
    }

    acelerar(){
        console.log('acelerando');
    }

}