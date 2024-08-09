import Auto from './auto.js';
import Camion from './camion.js';
import Motocicleta from './motocicleta.js';

let auto = new Auto('hfue-56', 'Rojo',  'Volkswagen', 'Golf GTI');
let camion = new Camion('hfuf-56', 'Rojo',  'Volkswagen', 'No conozco');
let moto = new Motocicleta('hfu-56', 'Verde',  'Yamaha', 'r3');

const arregloVehiculos = [];

auto.acelerar();

auto.color = 'nuevo color';
console.log(auto.color);

arregloVehiculos.push(auto);
arregloVehiculos.push(camion);
arregloVehiculos.push(moto);


