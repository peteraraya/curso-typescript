// Interface básica

interface Xmen{
    nombre:string,
    poder?:string, // poder opcional
    regenerar(nombreReal:string):void;
}

function enviarMision(xmen:Xmen){
    console.log("Enviando misión a : "+ xmen.nombre);

    xmen.regenerar("Logan");
}


function enviarCuartel(xmen: Xmen) {
  console.log("Enviando al cuartel : " + xmen.nombre);
    xmen.regenerar("Logan nuevamente");
}


let wolverine:Xmen = {
    nombre: "Wolverine",
    // poder: "Regeneración"
    regenerar(x:string){
        console.log("Se ha regenerado " + x);
    }
};


enviarMision(wolverine);

enviarCuartel(wolverine);

// --------------------------------------------------------------------------------------------
interface Xmen2{
    nombre:string,
    nombreReal?:string,
    regenerar(nombreReal:string):void;
}



// Implementamos la interfaz Xmen
class Mutante implements Xmen2 {

    nombre:string;
    poder:string;
    esBueno:boolean;
    regenerar(nombre){
        console.log("Hola "+nombre);
    }
}


let wolverine2 = new Mutante();

