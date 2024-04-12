// function criarPessoa (nome, sobrenome, idade){
//     return {nome,sobrenome,idade};
// }
// const pessoa1 = criarPessoa('João', 'Santos', 38);
// const pessoa2 = criarPessoa('Maria', 'Julia', 39);
// const pessoa3 = criarPessoa('Erivelton', 'Feltrin', 31);
// const pessoa4 = criarPessoa('Pedro', 'Augusto', 45);
// const pessoa5 = criarPessoa('José', 'Vieira', 50);
// console.log(pessoa1.nome, pessoa2.sobrenome, pessoa3.idade);

const pessoa1= {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 31,

    fala(){
        console.log(`${this.nome} ${this.sobrenome} está falando oi... e sua idade é ${this.idade}`);
    },

    incrementaIdade(){
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();