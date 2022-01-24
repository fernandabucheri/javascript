const myNumber = 12.4032;

// Transformar número para string
const numberAsString = myNumber.toString();
console.log('Numero transformado em string:', typeof numberAsString);

// Retorna número com um número de casas decimais
const fixedTwoDecimals = myNumber.toFixed(2);
console.log('\nNúmero com duas casas decimais:', fixedTwoDecimals);

// Transforma uma string em float - o que significa que pode ter casas decimais
console.log('\nString parseada para float:', parseFloat('13.22'));
console.log(typeof parseFloat('13.22')) // number

// Tranforma uma string em int - o que significa que não pode ter casas decimais
console.log('\nString parseada para int:', parseInt('13.20'));
console.log(typeof parseInt('13.22')) // number