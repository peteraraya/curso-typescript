"use strict";
var Validaciones;
(function (Validaciones) {
    // Funciones
    function validarTexto(texto) {
        if (texto.length > 3) {
            return true;
        }
        else {
            return false;
        }
    }
    Validaciones.validarTexto = validarTexto;
})(Validaciones || (Validaciones = {}));
