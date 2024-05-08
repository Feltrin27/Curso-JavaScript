import validator from "validator";

export default class Contato {
    constructor(formclass){
        this.form = document.querySelector(formclass);
    }

    init(){
        this.events();
    }

    events() {
        if (!this.form) return;
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.validate(e);
        });
    }

    validate(e) {
        const el = e.target;
        const nomeInput = el.querySelector('input[name="nome"]');
        const emailInput = el.querySelector('input[name="email"]');
        const telefoneInput = el.querySelector('input[name="telefone"]');
        let error = false;

        if(!nomeInput.value){
            alert('O nome é obrigatório!');
            error = true;
        }
        if(!emailInput.value && !telefoneInput.value){
            alert('Email ou telefone são requeridos!');
            error = true;
        } 

        if (!validator.isEmail(emailInput.value)) {
            alert('E-mail inválido');
            error = true;
        }
        
        if (!error) el.submit();
    }
}