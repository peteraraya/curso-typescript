"use strict";
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
var Avenger2 = /** @class */ (function () {
    function Avenger2(nombre, poder) {
        // Se instamcia la clase --> cada vez que se utilize el new
        this.nombre = nombre;
        this.poder = poder;
    }
    return Avenger2;
}());
// Herencia
var AvengerVolador = /** @class */ (function (_super) {
    __extends(AvengerVolador, _super);
    function AvengerVolador(nombre, poder) {
        var _this = _super.call(this, nombre, poder) || this;
        _this.vuela = true;
        return _this;
    }
    return AvengerVolador;
}(Avenger2));
var hulk = new Avenger2("Hulk", "Super Fuerza");
var falcon = new AvengerVolador("Falcon", "Volar");
console.log(hulk);
console.log(falcon);
