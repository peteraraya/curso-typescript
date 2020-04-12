
// Decorador de propiedad
function editableProp(esEditable: boolean): any {
  // en un decorador de metodos debe devolver una ffunción
  return function (target: any, nombrePropiedad: string) {
    let descriptor: PropertyDescriptor = {
      writable: esEditable,
    };

    return descriptor;
  };
}


class Villano1 {

    @editableProp(true)
    public nombre: String;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    plan() {
        console.log("Dominar el mundo");
    }
}


let lex1 = new Villano1("Lex Luthor")
console.log(lex1);