// class Avenger {
//     // Definir propiedades - 
//     public nombre:string = "Sin nombre";
//     protected equipo:string = "undefined";
//     private nombreReal:string = "undefined";

//     private puedePelear:boolean = false;
//     private peleasGanadas:number = 0;

//     constructor( nombre:string, equipo:string, nombreReal:string){
        
//         this.nombre = nombre;
//         this.equipo = equipo;
//         this.nombreReal = nombreReal;

//         console.log("Se ejecuto el constructor");
//     }
//     // metodos
//     public bio():void{
//         let mensaje:string = `Metodo : ${this.nombre} ${this.nombreReal} ${this.equipo}`;
//         console.log(mensaje);
//     }

//     // Este metodo si puede acceder al metodo privado ya que está dentro del scope de la clase
//     public cambiaEquipoPublico(nuevoEquipo:string):boolean{
//         return this.cambiarEquipo(nuevoEquipo);
//     }

//     private cambiarEquipo(nuevoEquipo:string):boolean{
//         if (nuevoEquipo === this.equipo) {
//             return false;
//         }else{
//             return true;
//         }
//     }




// }


// // Para utilizar la clase

// let antman:Avenger = new Avenger("Antman","Capi","Scott Lang");

// antman.bio();
// console.log(antman.cambiaEquipoPublico("Ironman"));


// antman.nombre = "Nick Fury";
// //antman.equipo = "Ironman"; // arroja error porque equipo es una propiedad protegida y solo puede ser accesada dentro de la clase avenger o sus subclases
// //antman.nombreReal = "Otro nombre real";

// console.log(antman);


