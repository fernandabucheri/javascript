/*
class Animal {
    constructor(qtdePatas) {
        this.qtdePatas = 4;
    }
}

class Cachorro extends Animal {
    constructor(morde) {
        super(4);
        this.morde = false;
    }
}

const Dulce = new Cachorro(false);

console.log(Dulce);*/

class Animal {
    constructor() {
        this.qtdePatas = 0;
    }

    movimentar() {
    }
}

class Cachorro extends Animal {
    constructor(morde) {
        super();
        this.qtdePatas = 4;
        this.morde = morde;
    }

    latir() {
        console.log("Au! au!");
    }
}

const Dulce = new Cachorro(true);
const Toddy = new Cachorro(false);

console.log(Dulce);
console.log(Toddy);