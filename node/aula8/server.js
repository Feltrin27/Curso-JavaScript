const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true})); // tratar body em post e put

// https://facebook.com/profiles/12345?campanha=googleads&nome_campanha=seila

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar</button>
    </form>
    `);
});

app.get('/testes/:idUsuarios?/:parametro?', (req, res) => { //Interrogação no parametro transforma em opcional
    // /profiles/3
    console.log(req.params);
    // /profiles/?chave1=valor1&chave2=valor2
    console.log(req.query);
    res.send(req.query.facebookprofile);
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`O que você enviou foi: ${req.body.nome} `);
});


app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando porta 3000 obrigado!');
});