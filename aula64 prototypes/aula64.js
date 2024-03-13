// Construtora -> molde(classe)
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    // this.nomeCompleto = () => 'ORIGINAL: ' + this.nome + ' ' + this.sobrenome; O MOTOR DO JAVASCRIPT PRIMEIRO BUSCARIA AQUI MAS PIOR A PERFORMANCE AGORA ESTÁ O PROTO FORA PARA TODOS OS OBJETOS
}
Pessoa.prototype.nomeCompleto = function(){
    return this.nome + ' ' + this.sobrenome; // AQUI VAI SERVIR PARA TRAZER O NOME DE TODOS OS OBJETOS
};

//instância
const pessoa1 = new Pessoa('Luiz', 'O.'); // <- Pessoa = Função construtora
const pessoa2 = new Pessoa('Maria', 'A.'); // <- Pessoa = Função construtora

console.dir(pessoa1);
console.dir(pessoa2);