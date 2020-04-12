"use strict";
// Primer ejemplo
var sumar = function (a, b) { return a + b; };
console.log(sumar(2, 2));
// Segundo ejemplo
// let darOrden_hulk = ( orden:string )=>`Hulk ${orden}`;
// console.log(darOrden_hulk("smash!!!"));
// Tercer ejemplo
var capitan_america = {
    nombre: "Hulk",
    darOrden_hulk: function () {
        var _this = this;
        setTimeout(function () {
            console.log(_this.nombre + " Smash!!!!");
        }, 1000);
    }
};
capitan_america.darOrden_hulk();
// Ventajas de utilizar funciones flecha
// las funciones flecha no cambian el objeto this
