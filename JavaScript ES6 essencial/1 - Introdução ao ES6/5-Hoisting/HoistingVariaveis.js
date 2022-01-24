function fn() {
    console.log(texto); // por causa do hoisting, quando executa essa linha, ao invés de ocorrer um erro, é exibido 'undefined' (ou seja, indica que a variável existe, porém não foi definida ainda).

    var texto = 'Exemplo';

    console.log(texto);
}

fn();

/* o hoisting faz com ocorra algo como:
function fn() {
    var texto;

    console.log(texto);

    texto = 'Exemplo';

    console.log(texto);
}
*/