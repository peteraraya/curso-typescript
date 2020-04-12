"use strict";
// Deben tener la palabra reservada export para ser un modulo
Object.defineProperty(exports, "__esModule", { value: true });
var MENSAJES = [
    "El texto es muy corto",
    "El texto es muy largo"
];
function obtenerError(numError) {
    if (numError > MENSAJES.length) {
        return "El código de error no existe";
    }
    return MENSAJES[numError];
}
exports.obtenerError = obtenerError;
