function criaPessoa(nome, sobrenome){
    return{
        nome,
        sobrenome,
        fala: function(assunto){
            return `${nome} está ${assunto}.`
        },
        idade: 32
    };
}

const p1 = criaPessoa('Erivelton', 'Feltrin');
console.log(p1.fala('falando sobre js'));