import 'core-js/stable'; //Biblioteca para compatibilidade de navegadores mais antigos
import 'regenerator-runtime/runtime'; // Dependência do babel para suportar funcionalidades es6+
import Login from './modules/Login';

const login = new Login('.form-login');
const cadastro = new Login('.form-cadastro');
login.init();
cadastro.init();
//import './assets/css/style.css'; //Import css forma moderna

