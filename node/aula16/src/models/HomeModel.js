const mongoose = require('mongoose');

//Classe home exemplo
const HomeSchema = new mongoose.Schema({
    titulo: {type: String, required: true},
    descricao: String 
});

const HomeModel = mongoose.model('Home', HomeSchema);

module.exports = HomeModel;