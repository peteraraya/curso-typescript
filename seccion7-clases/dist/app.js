var Apocalipsis = /** @class */ (function () {
    function Apocalipsis(nombre) {
        this.nombre = nombre;
    }
    Apocalipsis.llamarApocalipsis = function () {
        // preguntamos si existe una instancia de apocalipsis
        if (!Apocalipsis.instancia) {
            Apocalipsis.instancia = new Apocalipsis("Soy el verdadero Apocalipsis");
        }
        return Apocalipsis.instancia;
    };
    return Apocalipsis;
}());
// llamamos el metodo estatico
var real = Apocalipsis.llamarApocalipsis();
console.log(real);
//let apocalipsisFalso = new Apocalipsis("Soy apocalipsis falso"); // marca error
