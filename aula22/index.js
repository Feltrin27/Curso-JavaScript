/*
&& -> false && true -> false "o valor mesmo"
|| -> true && false -> vai retornar "o valor verdadeiro"

FALSY                        -   
*false                        -   
0                              -
'' "" `` string vazia é false   - tudo isso é considerado como falso
null/ undefined                - 
NaN                           -
*/  
 
//-----------------------------
// function falaOi(){
//     return 'Oi';
// }
// let vaiExecutar = true;
// console.log(vaiExecutar && falaOi());

//-----------------------------------
// esse se o usuário deixar em branco vai ser a cor preto;
const corUsuario = 'vermelho';
const corPadrao = corUsuario || 'preto';
console.log(corPadrao);
//---------------------
//pegadinha
const a = 0;
const b = null;
const c = 'false'; // true vai printar na tela
const d = false;
const e = NaN;
console.log(a||b||c||d||e);