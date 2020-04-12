
//Otro ejemplo de decorador

function planVillano3(constructor: Function) {
    constructor.prototype.imprimirPlan = function () {
        console.log("El plan de " + this.nombre + " es dominar el mundo");
    }

}

function imprimible(constructor: Function) {
    constructor.prototype.imprimir = function () {
        console.log(this);
    };
}

// decoradores anidados - no importa el orden
@imprimible
@planVillano3
class Villano3 {
    constructor(public nombre: string, public poder: string) { }
}



let lex3 = new Villano3("Lex Lutor", "Super Mente");
(<any>lex3).imprimirPlan();
(<any>lex3).imprimir();




