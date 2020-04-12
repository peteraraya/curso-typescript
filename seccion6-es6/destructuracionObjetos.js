"use strict";
var avengers = {
    nick: "Samuel Jackson",
    ironman: "Robert Downey Jr",
    vision: "Paul Bettany"
};
// Destructuración de objetos
// con otro nombre de variable
// variables por defecto -- > thor
var nick = avengers.nick, warmachine = avengers.ironman, vision = avengers.vision, _a = avengers.thor, thor = _a === void 0 ? "Paulino Callejas" : _a;
console.log(nick);
console.log(warmachine);
console.log(vision);
console.log(thor);
