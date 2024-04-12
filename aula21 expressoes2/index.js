/*
Operadores Lógicos
&& -> And -> E
|| -> OR -> OU
! -> NOT -> NÃO
*/

const expressaoAnd = true && true && true && true;
const expressaoOr = false || true ;
const expressaoNot = !false && true;
console.log(expressaoAnd);
console.log(expressaoOr);
console.log(expressaoNot);

const usuario = 'Luiz';
const senha = '123456';

const vaiLogar = usuario === 'Luiz' && senha === '123456';
console.log(vaiLogar);