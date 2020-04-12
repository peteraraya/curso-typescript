"use strict";
// Declarando variables con la palabra reservada let
//scope distinto
var nombre = "Tony";
if (true) {
    var nombre_1 = "Bruce";
    console.log(nombre_1);
    if (true) {
        var nombre_2 = "Ricardo";
    }
}
console.log(nombre);
// Variables const : permiten crear datos
var OPCIONES = "Activo";
if (true) {
    var OPCIONES_1 = "Descativado";
}
for (var _i = 0, _a = [1, 2, 3, 4, 5, 6]; _i < _a.length; _i++) {
    var i = _a[_i];
    console.log(i);
}
// problema const
var OPCIONES2 = {
    estado: true,
    audio: 10,
    ultima: "main"
};
OPCIONES2.estado = false;
OPCIONES2.audio = 1;
console.log(OPCIONES2);
// Template Literales
