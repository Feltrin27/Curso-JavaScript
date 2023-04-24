const pessoa= {
    nome: 'Erivelton',
    sobrenome: 'Feltrin',
    idade: 31,
    endereco: {
        rua: 'Octavio lopes',
        numero: 26
    }
};

// Atribuição via desestruturação
// const {endereco: {rua, numero}, nome: n = 'Não encontrado'} = pessoa;
// console.log(rua, numero, n);

const {nome, ...resto} = pessoa;
console.log(nome,resto);