//const data = new Date(2023, 3, 17, 11, 8, 17, 555); // ano, mês, dia, hora, minuto, segundo, milésimo de segundo
//const data = new Date('2019-04-20 20:20:59.100'); forma de data

const data = new Date(1681744035109); // desde o marco zero são os milisegundos
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1); // mês começa do zero
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('Ms', data.getMilliseconds());
console.log('Dia da semana', data.getDay()); // 0 - Domingo, 6 Sábado
console.log(data.toString());
console.log(Date.now()); // aqui pega o valor do marco zero

function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`
}
function formataData(data){
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());
    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`; 
}

const data1 = new Date();
const dataBrasil = formataData(data1);
console.log(dataBrasil);
