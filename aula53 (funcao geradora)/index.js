function* gerador() {
    yield 1;
    yield 2;
    yield 3;
}

const iterador = gerador();

console.log(iterador.next().value); // Imprime 1
console.log(iterador.next().value); // Imprime 2
console.log(iterador.next().value); // Imprime 3
