// Declarando variables con la palabra reservada let

//scope distinto
let nombre = "Tony";


if (true) {
    let nombre_1 = "Bruce"
console.log(nombre_1);
    if (true) {
        let nombre_2 = "Ricardo";
    }
}

console.log(nombre);


// Variables const : permiten crear datos
const OPCIONES:string = "Activo";

if (true) {
    const OPCIONES:string = "Descativado";
}

for( const i of [1,2,3,4,5,6]){
    console.log(i);
}

// problema const
const OPCIONES2 = {
    estado:true,
    audio:10,
    ultima:"main"
};

OPCIONES2.estado = false;
OPCIONES2.audio = 1;

console.log(OPCIONES2);

// Template Literales
