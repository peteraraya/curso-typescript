
function imrpimeConsola(parametro:any) {
    console.log(parametro);
}

// imrpimeConsola(123);
// imrpimeConsola(new Date());
// imrpimeConsola({});
// imrpimeConsola({nombre:"Pedro"});



// Función generica con <T>
function regresar<T>(arg:T) {
    return arg;
}

console.log( regresar(15.453424).toFixed(2) );
console.log( regresar("Ricardo Tapia").toLowerCase() );
console.log( regresar(new Date().getTime()) );


// Otra función generica

function funcionGenerica<T>(arg:T) {
    return arg;
}


type Heroe = {
    nombre:string;
    nombreReal:string;
}

type Villano = {
    nombre:string;
    poder:string;
}

let deadpool = {
    nombre: "Deadpool",
    nombreReal: "Wade Windston Wilson",
    poder: "Regeneración"
}

console.log( funcionGenerica<Heroe>(deadpool).nombreReal );
console.log( funcionGenerica<Villano>(deadpool).poder );


// Arreglos de genericos - se puede hacer de las dos formas ( generiica o explicita)

let heroes: Array<string> = ["Flash","Batman","Superman"];

heroes.push("123");

let villanos:string[]= ["Lex Luthor","Flash Reverso"];


console.log(heroes);


// Clases genericas

class Cuadrado<T extends number|string> {
    base:T ;
    altura:T ;
    area():number{
        return this.base * this.altura;
    }
}


let cuadrado = new Cuadrado();

cuadrado.base = 10;
cuadrado.altura = 10;

// Imprimimos por consola

console.log(cuadrado.area());

