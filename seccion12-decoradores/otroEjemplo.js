//Otro ejemplo de decorador
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function planVillano3(constructor) {
    constructor.prototype.imprimirPlan = function () {
        console.log("El plan de " + this.nombre + " es dominar el mundo");
    };
}
function imprimible(constructor) {
    constructor.prototype.imprimir = function () {
        console.log(this);
    };
}
// decoradores anidados - no importa el orden
let Villano3 = class Villano3 {
    constructor(nombre, poder) {
        this.nombre = nombre;
        this.poder = poder;
    }
};
Villano3 = __decorate([
    imprimible,
    planVillano3
], Villano3);
let lex3 = new Villano3("Lex Lutor", "Super Mente");
lex3.imprimirPlan();
lex3.imprimir();
