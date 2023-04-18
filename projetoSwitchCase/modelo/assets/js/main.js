// const h1 = document.querySelector('.container h1');
// const data = new Date();

// function criaDate(data) {
//     const diaSemana = data.getDay();
//     const numeroMes = data.getMonth();
//     const nomeDia = getDiaSemanaTexto(diaSemana);
//     const nomeMes = getNomeMes(numeroMes);

//     return (
//         `${nomeDia}, ${data.getDate()} de ${nomeMes} ` +
//         `de ${data.getFullYear()}` + 
//         `<br>${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
//     );
// }

// function zeroAEsquerda(num){
//     return num >= 10 ? num : `0${num}`; 
// }

// function getDiaSemanaTexto(diaSemana) {
//     let diaSemanatexto;
//     switch (diaSemana) {
//         case 0:
//             diaSemanatexto = 'domingo';
//             return diaSemanatexto;
//         case 1:
//             diaSemanatexto = 'segunda-feira';
//             return diaSemanatexto;
//         case 2:
//             diaSemanatexto = 'terça-feira';
//             return diaSemanatexto;
//         case 3:
//             diaSemanatexto = 'quarta-feira';
//             return diaSemanatexto;
//         case 4:
//             diaSemanatexto = 'quinta-feira';
//             return diaSemanatexto;
//         case 5:
//             diaSemanatexto = 'sexta-feira';
//             return diaSemanatexto;
//         case 6:
//             diaSemanatexto = 'sábado';
//             return diaSemanatexto;
//         default:
//             diaSemanatexto = '';
//             return diaSemanatexto;
//     }
// }

// function getNomeMes(numeroMes) {
//     let nomeMes;
//     switch (numeroMes) {
//         case 0:
//             nomeMes = 'Janeiro';
//             return nomeMes;
//         case 1:
//             nomeMes = 'Fevereiro';
//             return nomeMes;
//         case 2:
//             nomeMes = 'Março';
//             return nomeMes;
//         case 3:
//             nomeMes = 'Abril';
//             return nomeMes;
//         case 4:
//             nomeMes = 'Maio';
//             return nomeMes;
//         case 5:
//             nomeMes = 'Junho';
//             return nomeMes;
//         case 6:
//             nomeMes = 'Julho';
//             return nomeMes;
//         case 7:
//             nomeMes = 'Agosto';
//             return nomeMes;
//         case 8:
//             nomeMes = 'Setembro';
//             return nomeMes;
//         case 9:
//             nomeMes = 'Outubro';
//             return nomeMes;
//         case 10:
//             nomeMes = 'Novembro';
//             return nomeMes;
//         case 11:
//             nomeMes = 'Dezembro';
//             return nomeMes;
//         default:
//             nomeMes = '';
//             return nomeMes;
//     }
// }
// h1.innerHTML = criaDate(data);

const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toLocaleString('pt-BR', {dateStyle: 'full', timeStyle: 'short'});

