// Factory function / constructor functions / Classes

//factory
/*function criaPessoa(nome, sobrenome){
    return{
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}
const p1 = criaPessoa('ERI', 'Felt');
console.log(p1.nomeCompleto);*/

//constructor
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    Object.freeze(this);// congela objeto nada pode ser alterado
};

const p1 = new Pessoa('Luiz', 'Miranda');
console.log(p1);
