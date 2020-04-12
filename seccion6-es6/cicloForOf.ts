// Ciclo forOf nos permite barrer

let thor = {
    nombre: "Thor",
    arma: "Mjolnir",
};


let ironman = {
    nombre: "Ironman",
    arma: "Armosuit"
};

let capitan = {
    nombre: "Capitan America",
    arma: "Escudo"
};

let avengersArreglo = [thor, ironman, capitan];

// Barrer todos los elementos de este arreglo

for (const avenger of avengersArreglo) {
    console.log(avenger.nombre, avenger.arma);
}