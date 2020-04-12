class Avenger2{
    constructor(nombre:string, poder:string){
        // Se instamcia la clase --> cada vez que se utilize el new
        this.nombre = nombre;
        this.poder = poder;

    }
}

// Herencia
class AvengerVolador extends Avenger2{
    constructor(nombre,poder){
     super(nombre,poder);
     this.vuela = true;   
    }
}


let hulk = new Avenger2("Hulk", "Super Fuerza");
let falcon = new AvengerVolador("Falcon","Volar");

console.log(hulk);
console.log(falcon);