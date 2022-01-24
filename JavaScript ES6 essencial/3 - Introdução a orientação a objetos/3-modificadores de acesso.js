// let - antes da versão 12 do JavaScript
/*
function Person(initialName) {
    let name = initialName;
    this.getName = function () {
        return name;
    }
    this.setName = function (newName) {
        name = newName;
    }
}

const p = new Person('nome');

console.log(p);
console.log(p.getName());
console.log(p.name);

p.setName('Outro nome');
console.log(p.getName());
*/

// -------------------------------------------

// modificador de acesso - versão 12 do JavaScript

class Person {
    #name = '';

    constructor(initialName) {
        this.#name = initialName;
    }

    getName() {
        return this.#name;
    }

    setName(name) {
        this.#name = name;
    }
}

const p = new Person('nome');

console.log(p);
console.log(p.getName());
console.log(p.name);

p.setName('outro nome');
console.log(p.getName());
