

let avenger:number = 5;

let villanos:number= 1;

let otros = 2;


if (avenger > villanos) {
    console.log("Estamos salvados");
}else{
    console.log("Estamos muertos");
}


//  Uso de String

let strin1 = "";
let string2 = '';
let string3 = ``;

//  Uso de any

let vengador:any;
let existe;
let derrotas;

vengador = "Dr Strange;"
console.log( vengador.charAt(0) );

vengador = 150.55555;

console.log( vengador.toFixed(2));


vengador = true;


console.log(vengador);


// arrays y arreglos : son iguales que en javascript pero le podemos definir que tipo de datos queremos

let arreglo:number[] = [1,2,3,3,4,4,5,5];

let villanosArray:string[] = ['el malo', 'el culiao', ' el ctm'];

villanosArray[0].charAt(0);


// Tuplas : es un tipo de dato nuevo que no esta en javascript

let heroe:[string,number] = ["Dr. Strange",100];

heroe[0] = "Hola mundo";
heroe[1] = 50; 

console.log(heroe[0]);


// Enum : no existe en js 

enum Volumen {
    // defino 3 estados de audio
    min = 1, // 0   - 1
    medio, //   1   - 2
    max = 10//  2   - 10
}

let audio:number = Volumen.medio;

console.log(audio);

console.log(Volumen);


// Void : ningun tipo , relacionado con el return

function llamar_batman():void { // esta función regresa  a un vació
    console.log("Mostrar la batiseñal");
}


let mensaje = llamar_batman();


// Never : 

// function error(mensaje:string):never{
//     throw new Error(mensaje);
    
// }


// error("Error critico,")

// aserciones
let cualquierValor:any = "cualquier cosa";

let largoDelString:number = (<string>cualquierValor).length;

console.log( largoDelString );


// Undefined y Null

let nada:undefined = undefined;

// nada = "hola mundo";


let ironman:string;

ironman = "Tony";

// ironman = undefined;



