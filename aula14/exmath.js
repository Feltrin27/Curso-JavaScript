const numero = Number(prompt("Digite um número:"));
const numeroTitulo = document.getElementById('numero-titulo');
const divTexto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
divTexto.innerHTML = `<p>A raiz quadrada é : ${Math.sqrt(numero)}</p>
<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>
<p>É NaN: ${Number.isNaN(numero)}</p>
<p>Arredondando para baixo: ${Math.floor(numero)} </p>
<p>Arredondando para cima: ${Math.ceil(numero)}</p>
<p>Com duas casas decimais: ${Number(numero.toFixed(2))}</p>`; 

