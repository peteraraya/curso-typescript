var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// evitar sibrescribir el plan
function editable(esEditable) {
    // en un decorador de metodos debe devolver una ffunción
    return function (target, nombrePropiedad, descriptor) {
        // target :   , nombre: nombre de la propiedad , propertyDecorator : devuelve el objeto modificado
        // if ( !esEditable ) {
        //     console.warn("No me haran cambiar de opinion");
        // }
        descriptor.writable = esEditable;
    };
}
// Decorador de clase normal
function consola(constructor) {
    console.log(constructor);
}
// decorador de Factory
function imprimirConsola(imprimir) {
    if (imprimir) {
        return consola;
    }
    else {
        return null; // no quiero que retorne 
    }
}
// Decorador de clase
let Villano = class Villano {
    constructor(nombre) {
    }
    plan() {
        console.log("Dominar el mundo");
    }
};
__decorate([
    editable(true)
], Villano.prototype, "plan", null);
Villano = __decorate([
    consola // envia el constructor a fuerza
], Villano);
let lex = new Villano("Lex Lulor con metodos");
lex.plan = function () {
    console.log("Cortar flores");
};
// evitar que nos puedan sobrescribir los metodos
