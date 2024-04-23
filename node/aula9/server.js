const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.urlencoded({extended: true})); // tratar body em post e put
app.use(routes);

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando porta 3000 obrigado!');
});