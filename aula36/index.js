function random(min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = random(min, max);

while (rand !== 10) { // se rand for igual a 10 não executa nenhuma
    rand = random(min, max);
    console.log(rand);
}
console.log('#######')

do { // executa pelo menos uma vez
    rand = random(min, max);
    console.log(rand);
} while (rand !== 10);