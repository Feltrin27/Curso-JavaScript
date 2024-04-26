exports.paginaInicial = (req, res) => {
    //req.session.usuario = {nome: 'Erivelton', logado: true};
    /* req.flash('info', 'Olá Mundo!');
    req.flash('error', 'Errou cara');
    req.flash('success', 'Aí sim!'); */
    console.log(req.flash('info'), req.flash('error'), req.flash('success'));
    res.render('index');
    return;
};

exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
};