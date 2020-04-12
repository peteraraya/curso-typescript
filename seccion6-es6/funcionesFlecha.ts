// Primer ejemplo
let sumar = (a:number,b:number)=>a+b;

console.log(sumar(2,2));


// Segundo ejemplo

// let darOrden_hulk = ( orden:string )=>`Hulk ${orden}`;

// console.log(darOrden_hulk("smash!!!"));



// Tercer ejemplo

let capitan_america = {
    nombre:"Hulk",        
    darOrden_hulk:function () {
        setTimeout(() => {
               console.log(this.nombre + " Smash!!!!");
        }, 1000);
     
    }
};

capitan_america.darOrden_hulk();



// Ventajas de utilizar funciones flecha

// las funciones flecha no cambian el objeto this