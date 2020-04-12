

// class Avenger2 {
//   constructor(public nombre: string, private nombreReal: string) {
//     console.log("Contructor padre llamado");
//   }

//   // protected esta protegida
//   protected getNombre(): string {
//     console.log("getNombre acenger (protegido)");
//     return this.nombre;
//   }
// }

// // Clase Hija ---------------------------------------------------------------------------
// class Xmen extends Avenger2 {
//   // cuando no defino el constructor , va a tomar por defecto el de la clase padre
//   constructor(a: string, b: string) {
//     super(a, b); // utilizo las propiedades de la clase padre

//     console.log("Constructor hijo llamado");
//   }
//   // Publica permite ser accedida
//   public getNombre():string{
//      console.log("getNombre acenger (publico)");
//     return super.getNombre();
//   }
// }



// let ciclope: Xmen = new Xmen("Lobezno", "Scott");



// console.log(ciclope);

// console.log(ciclope.getNombre());

