// Função construtora -> objetos -> Pessoa(new)
// Função fabrica -> objetos

function Pessoa(nome, sobrenome){
    // atributos ou métodos privados
    const id = 123;
    const metodoInterno = function(){

    };

    //Atributos ou métodos públicos
    this.nome = nome
    this.sobrenome = sobrenome;

    this.metodo = function(){
        console.log(this.nome + ' sou um método');
    };
}

const p1 = new Pessoa('Erivelton', 'Feltrin');
const p2 = new Pessoa('João', 'Otávio');

console.log(p1.nome);

p1.metodo();