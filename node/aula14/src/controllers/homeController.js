const HomeModel = require('../models/HomeModel');

//criando dados no banco
HomeModel.create({
    titulo: 'Outra coisa',
    descricao: 'Outra descrição.'
})
.then(dados => console.log(dados))
.catch(e => console.log(e));
//-----------------------------

//Buscando dados
HomeModel.find()
.then(dados => console.log(dados))
.catch(e => console.log(e));
//---------------------------

exports.paginaInicial = (req, res) => {
    res.render('index');
    return;
};

exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
};