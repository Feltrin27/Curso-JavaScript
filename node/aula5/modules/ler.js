const fs = require('fs').promises;

module.exports = (caminho) => fs.readFile(caminho, 'utf8'); // aqui só recebe o caminho e lê os arquivos com readfile.