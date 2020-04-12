
// Creación de tipos personalizados en ts
// convención de usar un type con su primera letra mayuscula para definir que es una clase y no una variable
type Heroe = {
    //  Puedo definir lo que quiera aquí adentro
    nombre:string, 
    edad:number, 
    poderes:string[], 
    getNombre:()=>string
};


let flash:Heroe = { // definimos el tipo de propiedades que queremos que tengan 
    nombre : "Barry Allen",
    edad: 24,
    poderes : ["Puede correr muy rapido ", "Puede viajar por el tiempo"],
    getNombre(){
        return this.nombre;
    }
};

flash.getNombre();

let superman:Heroe = { 
    nombre : "Clark Kent",
    edad: 24,
    poderes : ["Puede volar ", "Super Velocidad"],
    getNombre(){
        return this.nombre;
    }
};



// flash = {
//     nombre : "Clark Kent",
//     edad : 500,
//     poderes : ["Volar"]
// };


// Ayuda a controlar de manera estricta el objeto

// Los nombres de las propiedades importan



// Video 2
// Objeto Espesifico : como definimos el objeto


// Video 3
// Metodos dentro de los objetos

// Necesito crear un tipo personalizado de objetos para poder definir de una forma mas ordenada y reulizable

// Video 4
// Tipos personalizados : nos podemos crear en otro archivos los tipos

// Video 5
// Multiples tipos permitidos , da una cierta flexibilidad

let loquesea :string | number | boolean | Heroe = "Pedro";

loquesea = 10;


// Video 6 : revisar el tipo de objeto o variable
let cosa:any = 123;

// necesito saber si eso es un tipo de numero

console.log( typeof cosa);
if (typeof cosa === "number") {
    
    console.log("cosa es un numero");
}


