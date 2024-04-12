/*
Operadores de comparação
> maior que
>= maior que ou igual a
< menor que
<= menor que ou igual a
== igualdade (valor)
=== igualdade estrita (valor e tipo)
!= diferente (valor)
!== diferente estrito (valor e tipo)
*/ 

const num1 = 10;
const num2 = '10';
console.log(num1 == num2); // javascript compara mas não a real igualdade retorna true
console.log(num1 === num2); // já dessa forma retorna false porque é a comparação total sem conversão, forma mais correta de ser usada
