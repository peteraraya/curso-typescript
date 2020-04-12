class Avenger{
    private _nombre:string;

    constructor ( nombre:string){
        this._nombre = nombre;
    }

    get nombre():string{
        console.log("Paso por el getnombre");
       if (this._nombre) {
           return this._nombre;
       } else {
         return "No tiene un nombre el avenger";
       }
    }


    set nombre(nombre:string){
        console.log("Se llamo el set del nombre");
        // util para validaciones

        if ( nombre.length <= 3) {
            console.error("Error");
            throw new Error ("Auxilio!!! esto mp debe pasar");
            
            return; // me salgo
        }

        this._nombre = nombre;
    }
}


let ciclope:Avenger = new Avenger("Wolverine")

console.log(ciclope.nombre);

// Utilizamos el set
ciclope.nombre = "Ciclope";


console.log(ciclope);



// Metodos y propiedades estaticas

class Xmen {
  static nombre: string = "Wolverine";

  constructor() {}

  static crearXmen() {
      console.log("Se creo usando un metodo estatico");
    return new Xmen(); // regresa una nueva instancia es decir puedo controlar la manera que los xmen son creados
  }
}


console.log('Metodo estatico : ',Xmen.nombre);

// Haciendo llamado 
let wolverine = Xmen.crearXmen();


console.log(wolverine);


// Clases Abstractas : son un molde

abstract class Mutantes{
    constructor( public nombre:string, public  nombreReal:string){

    }
}

//let wolverine2 = new Mutantes("Wolverine","Logan"); // marca error , no puedo crear instancias de la clase

// sirve para crear moldes de clases para heredarla a otras clases

class Xmen2 extends Mutantes{

}
let wolverine2 = new Xmen2("Wolverine", "Logan");


