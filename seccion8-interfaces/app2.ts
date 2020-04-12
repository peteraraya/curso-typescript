interface DosNumerosFunc{
    // Vamos a defnir un metodo nada de propiedades

    (num1:number , num2:number) : number 
}


let sumar:DosNumerosFunc;

sumar = function(a:number,b:number){
    return a+b;
}

let restar : DosNumerosFunc;

restar = function (a:number,b:number) {
    
    return a-b;
}