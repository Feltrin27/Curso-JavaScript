require('dotenv').config(); //Informações de ambiente que não queremos publicar em um repositório/senha/email
const express = require('express');
const app = express();

//Modelagem e salvar os dados na base de dados
const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        app.emit('pronto');
    }
    )
    .catch(e => console.log(e));
//-------------------
const session = require('express-session'); // identifica uma sessão
const MongoStore = require('connect-mongo'); // salva sessão no mongo
const flash = require('connect-flash'); // mensagens autodestrutivas precisa de sessão
const routes = require('./routes'); // rotas aplicação
const path = require('path'); // trabalhar com caminhos
//const helmet = require('helmet'); //Segurança 
const csrf = require('csurf'); // sites externos não podem postar nada na nossa aplicação
const { middlewareGlobal, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware');// funções que são executadas na rota

app.use(express.urlencoded({ extended: true })); // tratar body em post e put
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public')));
//app.use(helmet());

const sessionOptions = session({
    secret: 'feijao',
    store: MongoStore.create({mongoUrl: process.env.CONNECTIONSTRING}),
    resave: false,
    saveUninitialized: false,
    cookie:{
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true 
    }
});
app.use(sessionOptions);
app.use(flash());
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');//engine usada ejs
app.use(csrf());
//Nossos próprios middlewares
app.use(middlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(routes);

app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000');
        console.log('Servidor executando porta 3000 obrigado!');
    });
})
