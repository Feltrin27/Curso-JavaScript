const nome = 'Erivelton';
const sobrenome = 'Feltrin';
const idade = 32;
const peso = 80;
const altura = 1.80;
let imc; // peso / (altura * altura)
let anoNascimento;
const dataAtual = new Date();
const anoAtual = dataAtual. getFullYear();
imc = peso / (altura * altura);
anoNascimento = anoAtual - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg, 
tem ${altura} metros de altura e seu IMC é de ${imc} e ${nome} ${sobrenome} nasceu em ${anoNascimento} `)

