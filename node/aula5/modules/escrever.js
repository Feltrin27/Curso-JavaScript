const fs = require('fs').promises; //Usando promises ai tem que usar async no app.js

module.exports = (caminho, dados) => {
    fs.writeFile(caminho, dados, { flag: 'w'}); //Escreve dentro do arquivo criado. Quando usa W ele apaga o que tinha antes, quando usa a ele continua escrevendo sem apagar o que já tem
}
