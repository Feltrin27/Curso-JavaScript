const verdadeira = true;

//let tem escopo de bloco {...}
//var só tem escopo de função

// let nome = 'Luiz'; // criando
// var nome2 = 'Luiz';
// if (verdadeira) {
//     let nome = 'Otávio'; //criando
//     var nome2 = 'Rogério';
//     if (verdadeira) {
//         var nome2 = 'Ceci';
//         let nome = 'Outra coisa';  
//     }
// }
//console.log(nome, nome2);
var sobrenome = 'Miranda'
function falaOi() { // escopo de função por mais que seja var não consegue acessar fora dela
    var nome = 'Luiz';
    console.log(nome);
    console.log(sobrenome);  //já a função consegue acessar valores que estão em escopo global
}

falaOi();

