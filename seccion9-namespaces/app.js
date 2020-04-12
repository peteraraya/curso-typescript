"use strict";
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
    console.log("La fecha no es valida !!!");
}
