// Funções de primeira classe
function getName() {
    return 'Fernanda';
}

// recebe uma função por parâmetro e aplica um console.log no que essa função retornar
function logFn(fn) {
    console.log(fn());
}

const logFnResult = logFn;

logFnResult(getName);