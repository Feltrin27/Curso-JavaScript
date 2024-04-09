const nome = 'Erivelton';
const sobrenome = 'Feltrin';

const falaNome = () => nome + ' ' + sobrenome;

//module.exports.nome = nome;
//module.exports.sobrenome = sobrenome;
//module.exports.falaNome = falaNome;

//resumo igual acima simplificando;
exports.nome = nome;    
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;
this.qualquerCoisa = 'O que eu quiser exportar';
