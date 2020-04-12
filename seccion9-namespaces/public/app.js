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
/// <reference path="validaciones/textos.ts" />
/// <reference path="validaciones/fechas.ts" />
if (Validaciones.validarTexto("Pedro  Araya")) {
    console.log("El texto es valido");
}
else {
    console.log("El texto es invalido");
}
var hoy = new Date;
if (Validaciones.validarFecha(hoy)) {
    console.log("La fecha es valida");
}
else {
    console.log("La fecha no es valida !!! ");
}
