//Herança
//Produto -> aumento, desconto
//camiseta = cor, caneca = material
function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
};
Produto.prototype.aumento = function(quantia){
    this.preco += quantia;
};
Produto.prototype.desconto = function(quantia){
    this.preco -= quantia;
};
//------------------------------------------------
function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco);
    this.cor = cor;
}
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;
Camiseta.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100));
}
//------------------------------------------------
function Caneca(nome, preco, material, estoque){
    Produto.call(this, nome, preco);
    this.material = material;
    this.estoque = estoque;
    Object.defineProperty(this, 'estoque',{
        enumerable : true,
        get: function(){
            return estoque;
        },
        set: function(valor){
            if(typeof valor != 'number') return ;
            estoque = valor;
        }
    })
};
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;
//------------------------------------------------
const caneca = new Caneca('Café', 10, 'ceramica', 5);
const camiseta = new Camiseta('Regata', 7.5, 'Preta');
const produto = new Produto('gen', 120);
caneca.estoque = 1000;
console.log(produto);
console.log(camiseta);
console.log(caneca);
console.log(caneca.estoque);