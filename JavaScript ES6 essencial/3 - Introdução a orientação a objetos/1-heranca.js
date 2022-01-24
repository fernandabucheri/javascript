// Herança

function Animal(qtdePatas) {
    this.qtdePatas = qtdePatas;
}

function Cachorro(morde) {
    Animal.call(this, 4);
    this.morde = morde;
}

const Toddy = new Cachorro(false);

console.log(Toddy)