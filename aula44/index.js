//Declaração de função (Function Hoisting)
function falaOi(){
    console.log('Oi');
}

//First-class objects (Objetos de primeira classe)
//Function expression
const souUmDado = function (){
    console.log('Sou um dado.');
};

function executaFuncao(funcao){ //// Executada função como se fosse parâmetro
    funcao();
};
executaFuncao(souUmDado);

//Arrow Function

const funcaoArrow = () =>{console.log('Sou uma arrow function');};
funcaoArrow();

//Dentro de um objeto
const obj = {
    falar: function(){console.log('Estou falando...');
    }
};
obj.falar();