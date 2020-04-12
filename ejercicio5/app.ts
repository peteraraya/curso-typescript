// Crear interfaces 
interface Auto {
  encender:boolean,
  velocidadMaxima: number;
  acelear():void;
}


// Cree una interfaz para validar el auto (el valor enviado por parametro)
function conducirBatimovil( auto:Auto ):void{
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelear();
}

let batimovil:Auto = {
  encender:false,
  velocidadMaxima:0,
  acelear(){
    console.log("...... run!!!");
  }
}

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales
interface Villano{
  reir:boolean,
  comer?:boolean,
  llorar?:boolean
}


let guason: Villano = {
  reir: true,
  comer: true,
  llorar: false,
};

function reir(guason:Villano): void {
  if (guason.reir) {
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion

interface CiudadGoticaFun{
  (ciudadanos:string[]):number
}

let ciudadGotica:CiudadGoticaFun;

ciudadGotica = function (ciudadanos:string[]):number {
  return ciudadanos.length;
}

// function ciudadGotica( ciudadanos:string[] ):number{
//   return ciudadanos.length;
// }

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/

interface Persona{
  nombre:string,
  edad:number,
  sexo:number, // 1 hombre 2 mujer
  edtadoCivil:string,
  imprimirBio():void
}


class PersonaClass implements Persona{
  nombre:string;
  edad:number;
  sexo:number;
  estadoCivil:string;
  imprimirBio(){
    console.log("Breve descripción");
  };
}

