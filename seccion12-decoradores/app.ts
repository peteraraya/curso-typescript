

// evitar sibrescribir el plan
function editable(esEditable: boolean) {
    // en un decorador de metodos debe devolver una ffunción
    return function (target: any, nombrePropiedad: string, descriptor: PropertyDescriptor) { // debe tener 3 parametros
        // target :   , nombre: nombre de la propiedad , propertyDecorator : devuelve el objeto modificado

        // if ( !esEditable ) {
        //     console.warn("No me haran cambiar de opinion");
        // }
        descriptor.writable = esEditable;

    }

}

// Decorador de clase normal
function consola(constructor: Function) {
    console.log(constructor);
}

// decorador de Factory

function imprimirConsola(imprimir: boolean): Function {

    if (imprimir) {
        return consola;
    } else {
        return (<any>null); // no quiero que retorne 
    }
}


// Decorador de clase
@consola // envia el constructor a fuerza
class Villano {

    constructor(nombre: string) {
    }

    @editable(true)
    plan() {
        console.log("Dominar el mundo");
    }
}

let lex = new Villano("Lex Lulor con metodos");
lex.plan = function () {
    console.log("Cortar flores");
};

// evitar que nos puedan sobrescribir los metodos