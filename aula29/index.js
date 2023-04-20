// ... ret, ... spread
const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900];
const [primeiroNumero , segundoNumero, ...resto] = numeros;
console.log(primeiroNumero, segundoNumero);
console.log(resto);

const numeros2= [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const [lista1, lista2, lista3] = numeros2;
console.log(lista3[2]);


