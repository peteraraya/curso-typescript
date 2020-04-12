"use strict";
// Template Listerales
var nombre1 = "Pedro";
var nombre2 = 'Ricardo';
function getNombres() {
    return nombre1 + " " + nombre2;
}
var mensaje = "1. Esta es una linia normal\n                      2. el primer nombre es " + nombre1 + " \n                      3. y el segundo nombre es " + nombre2 + "\n                      4. Los nombres son: " + getNombres() + "\n                      5. " + (5 + 7) + " \n                                   ";
console.log(mensaje);
