"use strict";
var heroe = " Pedro ARAYA Gálvez";
var edad = 33;
var mensaje = imprimir(heroe, edad);
console.log(mensaje);
function imprimir(heroe, edad) {
    heroe = heroe.toLowerCase();
    edad = edad + 10;
    return heroe + " " + edad;
}
//# sourceMappingURL=errores.js.map