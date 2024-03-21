class Dispositivo{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if (this.ligado) {
            console.log(this.nome + ' Já ligado');
            return;
        }
        this.ligado = true;
    }

    desligar(){
        if (!this.ligado) {
            console.log(this.nome + ' Dispositivo já desligado');
            return;
        }
        this.ligado = false;
    }
}

class Smartphone extends Dispositivo{
    constructor(nome, cor, modelo){
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends Dispositivo{
    constructor(nome, temWifi){
        super(nome);
        this.temWifi = temWifi;
    }
// Quando chamado vai buscar primeiramente o método de dentro da classe se não vai na classe pai
    ligar(){ 
       console.log('Olha, você alterou o método ligar.')
    }
}

const s1 = new Smartphone('Iphone', 'Preto', 'MAX10');
s1.ligar();
console.log(s1);

const t1 = new Tablet('Ipad', true);
t1.ligar();
t1.ligar();
console.log(t1);