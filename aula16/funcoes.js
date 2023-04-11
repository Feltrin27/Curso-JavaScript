function saudacao(nome){
    return `Bom dia ${nome}!`;
}
const variavel = saudacao('Luiz');
console.log(variavel);
function soma(x , y){
    const resultado = x + y ;
    return resultado;
}
console.log(soma(2, 2));
console.log(soma(100, 500));
console.log(soma(223, 7));
console.log(soma(152, 9));

// const raiz = function(n){
//     return n ** 0.5;       função de raiz quadrada
// };
const raiz = (n) => n ** 0.5; // mesma função de raiz quadrada mas usando arrowfunction
console.log(raiz(9));
console.log(raiz(25));
console.log(raiz(16));



