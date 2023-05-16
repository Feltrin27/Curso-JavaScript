const nome = ['Erivelton Feltrin', 'João', 'José'];


//For clássico - Geralmente com iteráveis (array ou strings)
//For in - Retorna o índice ou chave (string, arrays ou objetos)
//For of - Retorna o valor em si (iteráveis, arrays ou strings)


//for clássico
for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]); 
}

console.log('---------');

//for in
for (const i in nome) {
    console.log(nome[i]);
}

console.log('---------');

// for of
for (const valor of nome) {
    console.log(valor);
}

nome.forEach(function(valor, indice){
    console.log(valor, indice);
});

