import 'core-js/stable'; //Biblioteca para compatibilidade de navegadores mais antigos
import 'regenerator-runtime/runtime'; // Dependência do babel para suportar funcionalidades es6+
import Login from './modules/Login';
import Contato from './modules/Contato';

const contatoCadastro = new Contato('.contato-cadastro');
const contatoEdit = new Contato('.contato-edit');
const login = new Login('.form-login');
const cadastro = new Login('.form-cadastro');
login.init();
cadastro.init();
contatoCadastro.init();
contatoEdit.init();
//import './assets/css/style.css'; //Import css forma moderna

