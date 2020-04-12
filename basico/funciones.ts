let heroe2: string = "Flash";

function imprime_heroe(): string {
  return heroe2;
}


let activar_batisenal = function () {
    return "Batiseñal activada";
}

console.log(imprime_heroe());
console.log(activar_batisenal());


// Funciones con parametros

function nombreCompleto( nombre:string, apellido:string):string{


    return nombre + '' + apellido;
}

let nombre = nombreCompleto("Pedro "," Araya");

console.log(nombre);


// Funciones con parametros opcionales

function hola(nombre:string, apellido?:string):string {

    if (apellido) {
        return nombre + " " + apellido;
    }else{
        return nombre ;
    }
    
}

let nombre2 = hola("Barry");

console.log(nombre2);

// miFuncion

function sumar(a:number, b:number):number {
    return a + b;
}
function saludar(nombre:string):string {
  return "I'm " + nombre;
}
function salvarMundo():void {
  console.log("El Mundo esta a salvo");
}

// Se definen funciones con las reglas de los tipos de datos que tendran los parametros

let miFuncion: (a:number,b:number) =>  number;
let miFuncion2: (x:string) => string;
let miFuncion3: () => void;


miFuncion = sumar;
console.log( miFuncion(5,5));

miFuncion2 = saludar;
console.log(miFuncion2("Pedro"));

miFuncion3 = salvarMundo;
miFuncion3();

/* Evitar que mi función mute en algo que yo no espero */

