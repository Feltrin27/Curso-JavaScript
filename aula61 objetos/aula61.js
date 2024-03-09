const pessoa = new Object();
pessoa.nome = 'Erivelton';
pessoa.sobrenome = 'Feltrin';
pessoa.idade = 30;
pessoa.getNome = function(){
    return (`${this.nome} é o nome`);
};
pessoa.getDataNascimento = function(){
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};
for (const chave in pessoa) {
    console.log(pessoa[chave]);
}
console.log(pessoa.getDataNascimento());
console.log(pessoa.getNome());