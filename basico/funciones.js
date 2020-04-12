"use strict";
var heroe2 = "Flash";
function imprime_heroe() {
    return heroe2;
}
var activar_batisenal = function () {
    return "Batiseñal activada";
};
console.log(imprime_heroe());
console.log(activar_batisenal());
// Funciones con parametros
function nombreCompleto(nombre, apellido) {
    return nombre + '' + apellido;
}
var nombre = nombreCompleto("Pedro ", " Araya");
console.log(nombre);
// Funciones con parametros opcionales
function hola(nombre, apellido) {
    if (apellido) {
        return nombre + " " + apellido;
    }
    else {
        return nombre;
    }
}
var nombre2 = hola("Barry");
console.log(nombre2);
// miFuncion
function sumar(a, b) {
    return a + b;
}
function saludar(nombre) {
    return "I'm " + nombre;
}
function salvarMundo() {
    console.log("El Mundo esta a salvo");
}
// Se definen funciones con las reglas de los tipos de datos que tendran los parametros
var miFuncion;
var miFuncion2;
var miFuncion3;
miFuncion = sumar;
console.log(miFuncion(5, 5));
miFuncion2 = saludar;
console.log(miFuncion2("Pedro"));
miFuncion3 = salvarMundo;
miFuncion3();
/* Evitar que mi función mute en algo que yo no espero */
