"use strict";
// Interface básica
function enviarMision(xmen) {
    console.log("Enviando misión a : " + xmen.nombre);
    xmen.regenerar("Logan");
}
function enviarCuartel(xmen) {
    console.log("Enviando al cuartel : " + xmen.nombre);
    xmen.regenerar("Logan nuevamente");
}
var wolverine = {
    nombre: "Wolverine",
    // poder: "Regeneración"
    regenerar: function (x) {
        console.log("Se ha regenerado " + x);
    }
};
enviarMision(wolverine);
enviarCuartel(wolverine);
// Implementamos la interfaz Xmen
var Mutante = /** @class */ (function () {
    function Mutante() {
    }
    Mutante.prototype.regenerar = function (nombre) {
        console.log("Hola " + nombre);
    };
    return Mutante;
}());
var wolverine2 = new Mutante();
