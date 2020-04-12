"use strict";
var Validaciones;
(function (Validaciones) {
    // Funciones
    function validarFecha(fecha) {
        if (isNaN(fecha.valueOf())) {
            return true;
        }
        else {
            return false;
        }
    }
    Validaciones.validarFecha = validarFecha;
})(Validaciones || (Validaciones = {}));
