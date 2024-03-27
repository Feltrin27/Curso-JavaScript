function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') {
            reject('Cai no erro!');
            return;
        }
        setTimeout(() => {
            resolve(msg.toUpperCase() + ' - Passei na promise');
        }, tempo);
    });
}

// Promise.all
const promises = [
    //'Primeiro valor',
    esperaAi('Promise 1', rand(1, 5)),
    esperaAi('Promise 2', rand(1, 5)),
    esperaAi('Promise 3', rand(1, 5)),
    //esperaAi(1000, 1000),
    //'Outro valor'
];
// se tiver erro em uma dessas promessas ele para e não entrega nenhuma
Promise.all(promises)
    .then(function (valor) {
        console.log(valor);
    }).catch(function (erro) {
        console.log(erro);
    });

//Entrega o primeiro a ser executado!
Promise.race(promises)
    .then(function (valor) {
        console.log(valor);
    }).catch(function (erro) {
        console.log(erro);
    });

function baixaPagina() {
    const emCache = false;

    if (emCache) {
        return Promise.resolve('Página em cache');
    } else {
        return esperaAi('Baixei a página', 3000);
    }
}

baixaPagina()
.then(dadosPagina => {
    console.log(dadosPagina);
})
.catch(e => console.log(e));