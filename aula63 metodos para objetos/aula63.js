/*
Object.values(retorna os valores)
Object.entries(retorna as chaves e valores)
Object.assign(des, any) copiar objeto para outro.+
Object.getOwnPropertyDescriptor(o, 'prop') mostra as propriedades "value, writable, enumerable, configurable"
... (spread) espalha os valores do objeto pra outro objeto
*/

//Já vimos
/*
Object.keys(retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade) 
*/
const produto = {nome: 'Camisa', preco: 1.8};
/* Object.defineProperty(produto, 'nome',{
    writable: false,                            //Alterar as propriedades do elemento
    configurable: false,
    value: 'Qualquer outra coisa'
}) */
console.log(Object.getOwnPropertyDescriptor(produto, 'nome')); // exibe as propriedades do elemento
console.log(produto);