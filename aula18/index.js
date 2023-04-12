/*
Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol) - valores copiados

Referência (mutável) - array, object, function - Passados por referência
*/
const a = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};

const b = {...a}; //dessa forma só afeta o array a se for alterado se b só recebesse a dessa foram b = a; qunado alterar a altera também o b

a.nome = 'João';
console.log(a);
console.log(b);