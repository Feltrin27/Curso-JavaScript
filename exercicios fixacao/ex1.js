document.addEventListener("DOMContentLoaded", function(){
    const botaoEnviar = document.querySelector(".Enviar");

    botaoEnviar.addEventListener("click", function(event){
        event.preventDefault();

        const campoNome = document.querySelector(".nome");
        const nomeDigitado = campoNome.value;
        const divResultado = document.querySelector(".resultado");
        
        saudar(nomeDigitado, (saudacao, nome) => divResultado.textContent = `${saudacao} ${nome}`);
        campoNome.value = '';
    })
})

const saudar = (nome, responder) => {
    const horaAtual = new Date().getHours()
    //const responder = (saudacao) => console.log(saudacao, nome)
    if(horaAtual < 12)return responder("Bom dia", nome)
    if(horaAtual <= 18)return responder("Boa tarde", nome)
    return responder("Boa noite", nome)
}
