type Auto = {
  carroceria:string,
  modelo:string,
  antibalas:boolean,
  pasajeros:number,
  disparar?: ()=>void
};

// Objetos
let batimovil:Auto = {
  carroceria: "Negra",
  modelo: "6x6",
  antibalas: true,
  pasajeros:4
};

let bumblebee:Auto = {
  carroceria: "Amarillo con negro",
  modelo: "4x2",
  antibalas: true,
  pasajeros:4,
  disparar(){ // El metodo disparar es opcional
    console.log("Disparando");
  }
};


// Villanos debe de ser un arreglo de objetos personalizados
type Villano = {
  nombre:string,
  edad:number| undefined ,
  mutante:boolean
};
// Villano es un arreglo de villanos
let villanos: Villano[] = [{
  nombre:"Lex Luthor",
  edad: 54,
  mutante:false
},{
  nombre: "Erik Magnus Lehnsherr",
  edad: 49,
  mutante: true
},{
  nombre: "James Logan",
  edad: undefined,
  mutante: true
}];

// Multiples tipos
// cree dos tipos, uno para charles y otro para apocalipsis

type Charles = {
  poder:string,
  estatura:number
};

type Apocalipsis = {
  lider:boolean,
  miembros:string[]
};

let charles:Charles = {
  poder:"psiquico",
  estatura: 1.78
};

let apocalipsis:Apocalipsis = {
  lider:true,
  miembros: ["Magneto","Tormenta","Psylocke","Angel"]
}

// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
let mystique: Charles | Apocalipsis;

mystique = charles;
mystique = apocalipsis;



let prueba = undefined;



// Programa de prueba de sección 5probando depuración utilizando los archivos .map con sourceMap: true

let heroe:string = " Pedro Araya Gálvez";
let edad = 33;

let mensaje = imprimir(heroe,edad);

console.log(mensaje);


function imprimir(heroe:string, edad:number):string {

  heroe = heroe.toLowerCase();
  edad = edad + 10;

  return heroe + " " + edad;
  
}