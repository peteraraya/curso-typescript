"use strict";
function imrpimeConsola(parametro) {
    console.log(parametro);
}
// imrpimeConsola(123);
// imrpimeConsola(new Date());
// imrpimeConsola({});
// imrpimeConsola({nombre:"Pedro"});
// Función generica con <T>
function regresar(arg) {
    return arg;
}
console.log(regresar(15.453424).toFixed(2));
console.log(regresar("Ricardo Tapia").toLowerCase());
console.log(regresar(new Date().getTime()));
// Otra función generica
function funcionGenerica(arg) {
    return arg;
}
var deadpool = {
    nombre: "Deadpool",
    nombreReal: "Wade Windston Wilson",
    poder: "Regeneración"
};
console.log(funcionGenerica(deadpool).nombreReal);
console.log(funcionGenerica(deadpool).poder);
// Arreglos de genericos - se puede hacer de las dos formas ( generiica o explicita)
var heroes = ["Flash", "Batman", "Superman"];
heroes.push("123");
var villanos = ["Lex Luthor", "Flash Reverso"];
console.log(heroes);
// Clases genericas
var Cuadrado = /** @class */ (function () {
    function Cuadrado() {
    }
    Cuadrado.prototype.area = function () {
        return this.base * this.altura;
    };
    return Cuadrado;
}());
var cuadrado = new Cuadrado();
cuadrado.base = 10;
cuadrado.altura = 10;
// Imprimimos por consola
console.log(cuadrado.area());
