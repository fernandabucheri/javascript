const user = {
    name: 'Fernanda',
    lastname: 'Silva'
}

// Recupera as chaves do objeto
console.log('Propriedades do objeto user:', Object.keys(user));

// Recupera os valores das chaves do objeto
console.log('\nValores das propriedades do objeto user:', Object.values(user));

// Retorna um array de arrays contendo [nome_prop, valor_prop]
console.log('\nLista de propriedades e valores:', Object.entries(user));

// Mergear propriedades de objeto
Object.assign(user, {fullName: 'Fernanda Silva'});
console.log('\nAdiciona propriedade fullName no objeto user:', user);

console.log('\nRetorna um novo objeto mergeando dois ou mais objetos', Object.assign({}, user, {age: 24})); // melhor opção

// Previne todos as alterações em um objeto
const newObj = {foo: 'bar'};
Object.freeze(newObj);

newObj.foo = 'changes';
delete newObj.foo;
newObj.bar = 'foo';

console.log('\nVariável newObj após as alterações:', newObj);

// Permite apenas a alteração de propriedades existentes em um objeto, deletar e criar não
const person = {name: 'Nome'};
Object.seal(person);

person.name = 'Nanda';
delete person.name;
person.age = 24;

console.log('\nVariável person após as alterações:', person);