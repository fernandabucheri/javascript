// ---------------------- Tipos primitivos
const name = 'Fernanda';
/* Não podemos alterar o valor, ou seja,
name = 'Guilherme';
não ocorre */

// ---------------------- Objetos e arrays
// Se for um objeto é possível trocar suas propriedades
const user = {
    name: 'Fer'
};
console.log(user)

user.name = 'Fernanda';
console.log(user)

// Entretanto não podemos fazer o objeto "apontar" para outro lugar
/*
user = {
    name: 'Guilherme'
}
*/

// Exemplo com array
const pessoas = ['Grace', 'Guilherme', 'Pedro'];
console.log(pessoas)

// Podemos adicionar novos itens
pessoas.push('João');
console.log(pessoas)

// Podemos remover algum item
pessoas.shift();
console.log(pessoas)

// Podemos alterar diretamente
pessoas[1] = 'Jennifer';
console.log(pessoas)