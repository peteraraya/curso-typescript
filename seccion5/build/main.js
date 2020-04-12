"use strict";
let heroe = " Pedro ARAYA Gálvez";
let edad = 33;
let mensaje = imprimir(heroe, edad);
console.log(mensaje);
function imprimir(heroe, edad) {
    heroe = heroe.toLowerCase();
    edad = edad + 10;
    return heroe + " " + edad;
}
console.log(mensaje);
console.log("Hola mundo");
console.log(mensaje.toUpperCase());
let heroes = ["Batman", "Superman", "Flash"];
for (const heroe of heroes) {
    console.log(heroe);
}
heroes.push("Ironman");
console.log(heroes);
