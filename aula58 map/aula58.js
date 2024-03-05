//Altera valores e retorna arrays do mesmo tamanho do original
//Dobre os números
//               0   1   2  3  4  5  6  7  8   9  10  11  12
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map(valor => valor * 2);
console.log(numerosEmDobro);

// Para cada elemento:
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

// Retorne apenas uma string com o nome da pessoa
const nomePessoas = pessoas.map(obj => obj.nome);
console.log(nomePessoas);
// Remova apenas a chave "nome" do objeto
const removeNome = pessoas.map(obj => ({idade : obj.idade}));
console.log(removeNome);
// Adicione uma chave id em cada objeto
const addID = pessoas.map(function(obj, indice){
    const newObj = {...obj};
    newObj.id = indice;
    return newObj;
})
console.log(addID);
console.log(pessoas);