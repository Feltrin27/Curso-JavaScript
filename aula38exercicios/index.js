// Escreva uma função que recebe 2 números e retorne o maior deles
const max = (x, y) => x > y ? x : y; // arrowFunction
console.log(max(100, 200));
/////////////////////////
//Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura
//de uma imagem (number). Retorne true se a imagem estiver no modo paisagem;
const ePaisagem = (larg, alt) => larg > alt;
console.log(ePaisagem(400, 200));

//Escreva uma função que recebe um número e retorne a seguinte:
//Número divisível por 3 = Fizz
//Número divisível por 5 = Buzz
//Número divisível por 3 e 5 = FizzBuzz
//Número NÃO é divisível por 3 e 5 = retorna o próprio número
//Checar se o número é realmente um número
//Use a função com números de 0 a 100
console.log('#############');
function fizzBuzz(numero){
    if(typeof numero !== 'number') return numero;
    if (numero % 3 == 0 && numero % 5 === 0) return 'FizzBuzz';
    if (numero % 3 === 0) return 'Fizz';
    if (numero % 5 === 0) return 'Buzz';
    
    return numero;
}
console.log('aaaaa', fizzBuzz('aaaaa'));

for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i))
}
    
