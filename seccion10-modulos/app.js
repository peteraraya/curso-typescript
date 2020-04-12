"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var numeros_1 = __importDefault(require("./validaciones/numeros"));
var textos = __importStar(require("./validaciones/textos"));
// console.log(PI);
console.log("La resta es :", numeros_1.default(10, 5)); // puede ser cualquier nombre o necesariamente restar el nombre de la función que se está importando
console.log(textos.obtenerError(4));
// console.log(MENSAJES);
// console.log("Hola mundo");
