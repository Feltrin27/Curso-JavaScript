try {
    console.log('Abri um arquivo');
    console.log('Manipulei arquivo gerou erro');
    console.log('Fechei arquivo');

    try {
        console.log(b);
    } catch (e) {
        console.log('Deu erro');
    }finally{
        console.log('Também sou finally.');
    }
    //É executada quando não há erros
} catch (e) {
    console.log('Tratando erro');
    //É executada quando há erros
}finally{
    console.log('Finally : Eu sempre sou executado');
    //Sempre executada
}