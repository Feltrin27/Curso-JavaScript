const mongoose = require('mongoose');
const validator = require('validator');
const bcryptjs = require('bcryptjs');

//Classe home exemplo
const LoginSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true }
});

const LoginModel = mongoose.model('Login', LoginSchema);

class Login {
    constructor(body) {
        this.body = body;
        this.errors = [];
        this.user = null;
    }

    async register() {
        //Método de ver se os campos estão preenchidos corretamente
        this.valida();
        //Aqui se tiver erros dentro do array errors return o erro
        if (this.errors.length > 0) return;
        //Verificação se usuário já existe na base de dados para evitar redundância
        await this.userExists();
        //Verifica novamente se array de errors está vazio
        if (this.errors.length > 0) return;
        //Cria um salt
        const salt = bcryptjs.genSaltSync();
        //Faz um Hash da senha preenchida
        this.body.password = bcryptjs.hashSync(this.body.password, salt);
        try {
            this.user = await LoginModel.create(this.body);
        } catch (e) {
            console.log(e);
        };
    }
    //Método para verificar se usuário já está cadastrado
    async userExists(){
      const user = await LoginModel.findOne({email: this.body.email});
      if(user) this.errors.push('Usuário já existe.');
    }
    //Método para verificar se campos atendem aos requisitos
    valida() {
        this.cleanUp();
        //validação
        //o email precisa ser válido
        if (!validator.isEmail(this.body.email)) this.errors.push('E-mail inválido');
        // a senha precisa ter entre 3 e 50
        if (this.body.password.length < 3 || this.body.password.length > 50) {
            this.errors.push('A senha precisa ter entre 3 e 50 caracteres.');
        }
    }
    //Método para verificar se é uma string
    cleanUp() {
        for (const key in this.body) {
            if (typeof this.body[key] !== 'string') {
                this.body[key] = '';
            };
        };

        this.body = {
            email: this.body.email,
            password: this.body.password
        };
    };
}

module.exports = Login;