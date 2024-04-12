// (condicao) ? 'Valor para verdadeiro' : 'Valor para falso'; Operador ternário

const pontuacaoUsuario = 999;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP': 'Usuário normal';

const corUsuario = null;
const corPadrao = corUsuario || 'Preta'; // seta como padrão a cor preta ali se a cor usuario for null ou seja sem entrada de dados.

console.log(nivelUsuario, corPadrao);