// Template Listerales

let nombre1:string = "Pedro";
let nombre2:string = 'Ricardo';


function getNombres():string {
    return `${nombre1} ${nombre2}`
}


let mensaje:string = `1. Esta es una linia normal
                      2. el primer nombre es ${nombre1} 
                      3. y el segundo nombre es ${nombre2}
                      4. Los nombres son: ${ getNombres()}
                      5. ${5+7} 
                                   `;





console.log(mensaje);

