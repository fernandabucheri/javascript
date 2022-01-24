/*
array de alunos e cada aluno tem dois atributos: nome e nota;
mostra uma lista com os estudantes aprovados, mas não altera a lista inicial;
*/

const estudantes = [
    {
        nome: 'Grace',
        nota: 7
    },
    {
        nome: 'Jennifer',
        nota: 10
    },
    {
        nome: 'Paul',
        nota: 3
    }
];

function qntsEstudantesAprovados(estudantesList) {
    return estudantesList.filter(estudante => estudante.nota >= 7);
}

console.log('Alunos aprovados:');
console.log(qntsEstudantesAprovados(estudantes));

console.log('\nLista de alunos:');
console.log(estudantes);