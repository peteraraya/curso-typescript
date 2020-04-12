
let avengers = {
    nick:"Samuel Jackson",
    ironman:"Robert Downey Jr",
    vision: "Paul Bettany"
};

// Destructuración de objetos
// con otro nombre de variable
// variables por defecto -- > thor
let {nick,ironman:warmachine, vision, thor="Paulino Callejas"} = avengers;

console.log(nick);
console.log(warmachine);
console.log(vision);
console.log(thor);


