class Apocalipsis{
    // instancia nueva
    static instancia:Apocalipsis;

   private constructor(public nombre:string){

   }

   static llamarApocalipsis(){
       // preguntamos si existe una instancia de apocalipsis
       if (!Apocalipsis.instancia) {
           Apocalipsis.instancia = new Apocalipsis("Soy el verdadero Apocalipsis");
       }

       return Apocalipsis.instancia;
   }

}

// llamamos el metodo estatico
let real = Apocalipsis.llamarApocalipsis();
console.log(real);
//let apocalipsisFalso = new Apocalipsis("Soy apocalipsis falso"); // marca error
