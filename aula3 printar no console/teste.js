const pessoa = ['Bruno', 'Josiane', 'Théo']
const pessoaCopia = []

for(let i=0; i<pessoa.length; i++){
  pessoaCopia[i] = pessoa[i] + '2'
}

console.log(pessoaCopia);

const pessoa2 = ['Bruno', 'Josiane', 'Théo'];
const pessoaCopia2 = pessoa2.map(nome => nome + '2');
console.log(pessoaCopia2);