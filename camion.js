import Vehiculo from "./vehiculo.js";

export default class Camion extends Vehiculo{

    constructor(patente, color, marca, modelo, carga){
        super(patente, color, marca, modelo);
        this._carga = carga;
    }

    get carga(){
        return this._carga;
    }

    set carga(carga){
        this._carga = carga;
    }

}