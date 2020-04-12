"use strict";
var avenger = 5;
var villanos = 1;
var otros = 2;
if (avenger > villanos) {
    console.log("Estamos salvados");
}
else {
    console.log("Estamos muertos");
}
//  Uso de String
var strin1 = "";
var string2 = '';
var string3 = "";
//  Uso de any
var vengador;
var existe;
var derrotas;
vengador = "Dr Strange;";
console.log(vengador.charAt(0));
vengador = 150.55555;
console.log(vengador.toFixed(2));
vengador = true;
console.log(vengador);
// arrays y arreglos : son iguales que en javascript pero le podemos definir que tipo de datos queremos
var arreglo = [1, 2, 3, 3, 4, 4, 5, 5];
var villanosArray = ['el malo', 'el culiao', ' el ctm'];
villanosArray[0].charAt(0);
// Tuplas : es un tipo de dato nuevo que no esta en javascript
var heroe = ["Dr. Strange", 100];
heroe[0] = "Hola mundo";
heroe[1] = 50;
console.log(heroe[0]);
// Enum : no existe en js 
var Volumen;
(function (Volumen) {
    // defino 3 estados de audio
    Volumen[Volumen["min"] = 1] = "min";
    Volumen[Volumen["medio"] = 2] = "medio";
    Volumen[Volumen["max"] = 10] = "max"; //  2   - 10
})(Volumen || (Volumen = {}));
var audio = Volumen.medio;
console.log(audio);
console.log(Volumen);
// Void : ningun tipo , relacionado con el return
function llamar_batman() {
    console.log("Mostrar la batiseñal");
}
var mensaje = llamar_batman();
// Never : 
// function error(mensaje:string):never{
//     throw new Error(mensaje);
// }
// error("Error critico,")
// aserciones
var cualquierValor = "cualquier cosa";
var largoDelString = cualquierValor.length;
console.log(largoDelString);
// Undefined y Null
var nada = undefined;
// nada = "hola mundo";
var ironman;
ironman = "Tony";
// ironman = undefined;
