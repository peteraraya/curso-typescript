// Decoradores de parametros
function parametro(target:any, metodo:string, index:number){
    console.log(target,metodo,index);
}

class Villano2{
    constructor(public nombre:string){

    }

    imprimir( plan:boolean, @parametro mensaje:String):void{
        if ( plan ) {
            console.log("El plan es : "+ mensaje);
        }else{
            console.log(mensaje);
        }
    }
}


let lex2= new Villano2("Lex lLuthor");