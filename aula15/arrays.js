const alunos = ['Luiz', 'Maria', 'João'];
console.log(alunos instanceof Array); // descobrir se alunos é um array
//alunos.push('Otávio'); inserir no final do array
//alunos.unshift('Otávio'); inserir no começo do array
//alunos.pop(); remover do final do array
//alunos.shift(); remover do início
//delete alunos[1]; deletar sem mudar os indices
alunos.push('José');
alunos.push('Pedro');
alunos.push('Caio');
console.log(alunos);
console.log(alunos.slice(0,-2));
