const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json'); //Mostra o caminho e da nome ao arquivo a ser criado
const escreve = require('./escrever');
const ler = require('./ler');

/* const pessoas = [
    {nome: 'joão'},
    {nome: 'Maria'},
    {nome: 'jose'},
    {nome: 'pedro'},
    {nome: 'igor'},
    {nome: 'luana'},
];
const json = JSON.stringify(pessoas, '', 2);
escreve(caminhoArquivo, json); */
async function leArquivo(caminho){
    const dados = await ler(caminho);
    renderizaDados(dados);
}

function renderizaDados(dados){
    dados = JSON.parse(dados);
    dados.forEach(val => console.log(val));
}

leArquivo(caminhoArquivo);
