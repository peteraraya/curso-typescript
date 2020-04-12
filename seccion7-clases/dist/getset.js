var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avenger = /** @class */ (function () {
    function Avenger(nombre) {
        this._nombre = nombre;
    }
    Object.defineProperty(Avenger.prototype, "nombre", {
        get: function () {
            console.log("Paso por el getnombre");
            if (this._nombre) {
                return this._nombre;
            }
            else {
                return "No tiene un nombre el avenger";
            }
        },
        set: function (nombre) {
            console.log("Se llamo el set del nombre");
            // util para validaciones
            if (nombre.length <= 3) {
                console.error("Error");
                throw new Error("Auxilio!!! esto mp debe pasar");
                return; // me salgo
            }
            this._nombre = nombre;
        },
        enumerable: true,
        configurable: true
    });
    return Avenger;
}());
var ciclope = new Avenger("Wolverine");
console.log(ciclope.nombre);
// Utilizamos el set
ciclope.nombre = "Ciclope";
console.log(ciclope);
// Metodos y propiedades estaticas
var Xmen = /** @class */ (function () {
    function Xmen() {
    }
    Xmen.crearXmen = function () {
        console.log("Se creo usando un metodo estatico");
        return new Xmen(); // regresa una nueva instancia es decir puedo controlar la manera que los xmen son creados
    };
    Xmen.nombre = "Wolverine";
    return Xmen;
}());
console.log('Metodo estatico : ', Xmen.nombre);
// Haciendo llamado 
var wolverine = Xmen.crearXmen();
console.log(wolverine);
// Clases Abstractas : son un molde
var Mutantes = /** @class */ (function () {
    function Mutantes(nombre, nombreReal) {
        this.nombre = nombre;
        this.nombreReal = nombreReal;
    }
    return Mutantes;
}());
//let wolverine2 = new Mutantes("Wolverine","Logan"); // marca error , no puedo crear instancias de la clase
// sirve para crear moldes de clases para heredarla a otras clases
var Xmen2 = /** @class */ (function (_super) {
    __extends(Xmen2, _super);
    function Xmen2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Xmen2;
}(Mutantes));
var wolverine2 = new Xmen2("Wolverine", "Logan");
