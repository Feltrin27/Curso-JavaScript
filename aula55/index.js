// Valor por referência
//const nomes = ['Eduardo', 'Maria', 'José'];
const nomes = new Array('E', 'b', 'c');
nomes[2] = 'João';
delete nomes[2];
console.log(nomes);
const novo = nomes;
novo.pop();
console.log(nomes);

