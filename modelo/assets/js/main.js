const form = document.querySelector('#formulario');

form.addEventListener('submit', function(e){
    e.preventDefault();
    setResultado();
    const valorInicial = e.target.querySelector('#valorInicial');
    const valorAportes = e.target.querySelector('#valorAportes');
    const tempo = e.target.querySelector('#tempo');
    const jurosAno = e.target.querySelector('#jurosAno');

    const inicial = Number(valorInicial.value);
    const aporte = Number(valorAportes.value);
    const temp = Number(tempo.value);
    const juros = Number(jurosAno.value);

    if (!inicial) {
        setResultado('Valor inicial inválido', false);
        return;
    }

    if (!aporte) {
        setResultado('Valor aporte inválido ', false);
        return;
    }

    if (!temp) {
        setResultado('Valor tempo inválido ', false);
        return;
    }

    if (!juros) {
        setResultado('Valor juros inválido ', false);
        return;
    }

    const valorFinal = calcularjuros(inicial, aporte, temp, juros)
    // const nivelImc = getNivelImc(imc);
    const msg = `o Capital vai ser R$${valorFinal}  `;
    setResultado(msg, true);
});

function calcularjuros(inicial, aporte, tempo, juros){
        for (let  i = 0; i < tempo; i++) {
            inicial += aporte + (inicial + aporte) * juros / 100;  
        }
        let final = inicial;
        return final.toFixed(0);
}


function criaP(){
    const p = document.createElement('p');
    return p;
}

function setResultado(msg, isValid){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = criaP();
    if (isValid){
        p.classList.add('paragrafo-resultado');
    }else{
        p.classList.add('bad');
    }
        
    p.innerHTML = msg;
    resultado.appendChild(p);
}
