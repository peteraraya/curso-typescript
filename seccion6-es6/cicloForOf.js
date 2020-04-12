"use strict";
// Ciclo forOf nos permite barrer
var thor = {
    nombre: "Thor",
    arma: "Mjolnir",
};
var ironman = {
    nombre: "Ironman",
    arma: "Armosuit"
};
var capitan = {
    nombre: "Capitan America",
    arma: "Escudo"
};
var avengersArreglo = [thor, ironman, capitan];
// Barrer todos los elementos de este arreglo
for (var _i = 0, avengersArreglo_1 = avengersArreglo; _i < avengersArreglo_1.length; _i++) {
    var avenger = avengersArreglo_1[_i];
    console.log(avenger.nombre, avenger.arma);
}
