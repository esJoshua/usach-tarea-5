//Joshua Espinoza  rut 25.595.621-3

//1.Mostrar en consola la secuencia de Fibonacci:
//a.Entre los números 0 y 1000.

const fibo = (n) => {
  let x = 0;
  let y = 1;

  for (i = 0; i < n; i++) {
    let temp = x;
    x = y;
    y = temp + x;
    if (x + temp < 1000) {
      console.log("Fibonacci", x, "+", temp, " = ", x + temp);
    }
  }
};
fibo(100);

//b.Números pares entre 0 y 1000.
const pares = [];
for (let i = 0; i <= 100; i += 2) {
  pares.push(i);
}

console.log("Números pares:", pares);

//c.Números impares entre 0 y 1000.
const impares = [];
for (let i = 1; i <= 100; i += 2) {
  impares.push(i);
}

console.log("Números impares:", impares);

//2.- Del siguiente arreglo de strings retornar otro arreglo con todo a mayúsculas.
let pokemones = ["Pikachu", "Charmander", "Bulbasaur", "Squirtle"];

const pokemonesCAP = pokemones.map((pokemon) => pokemon.toUpperCase());
console.log("pokemonesCAP", pokemonesCAP);

//3.- Del siguiente arreglo de objetos, retornar otro arreglo con los pokemones tipo fuego.
let pokemones2 = [
  { nombre: "Pikachu", tipo: "Electrico" },
  { nombre: "Charmander", tipo: "Fuego" },
  { nombre: "Bulbasaur", tipo: "Planta" },
  { nombre: "Squirtle", tipo: "Agua" },
  { nombre: "Charmeleon", tipo: "Fuego" },
  { nombre: "Weedle", tipo: "bicho" },
  { nombre: "Charizard", tipo: "Fuego" },
];

const pokemonesFuego = pokemones2.filter((pokemon) => pokemon.tipo === "Fuego");
console.log("pokemonesFuego", pokemonesFuego);
