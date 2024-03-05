//Reduce
//               0   1   2  3  4  5  6  7  8   9  10  11  12
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// Some todos os números(reduce)
const total = numeros.reduce(function(acumulador, valor){
    acumulador += valor;
    return acumulador;
});
console.log(total);

// Retorne um array com os pares(Filter) poderia ser feito com filter
const pares = numeros.reduce(function(acumulador, valor, indice, array){
    if(valor % 2 === 0) acumulador.push(valor);
    return acumulador;
}, []); 
console.log(pares);

// Retorne um array com o dobro dos valores(Map) poderia ser feito com map
const dobro = numeros.reduce(function(acumulador, valor){
    acumulador.push(valor*2);
    return acumulador;
}, []); 
console.log(dobro);

// Retorne a pessoa mais velha
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 64},
    {nome: 'Wallace', idade: 47},
];
const velha = pessoas.reduce(function(acumulador, valor){
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(velha);
