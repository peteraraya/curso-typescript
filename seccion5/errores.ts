// Programa de prueba de sección 5probando depuración utilizando los archivos .map con sourceMap: true

let heroe: string = " Pedro ARAYA Gálvez";
let edad = 33;

let mensaje = imprimir(heroe, edad);

// Otro comentario
console.log(mensaje);

function imprimir(heroe: string, edad: number): string {
  heroe = heroe.toLowerCase();
  edad = edad + 10;

  return heroe + " " + edad;
}            

/*
Comentatarios multinia




*/