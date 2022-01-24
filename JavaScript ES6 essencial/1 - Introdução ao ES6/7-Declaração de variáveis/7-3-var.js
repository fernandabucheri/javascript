(() => {
    console.log(`Valor dentro da função "${teste}"`);

    if (true) {
        var teste = 'valor diferente';
        console.log(`Valor dentro do if "${teste}"`);
    }

    console.log(`Valor após execução do if "${teste}"`);
})();

/* O que está acontecendo:
(() => {
    var teste;
    console.log(`Valor dentro da função "${teste}"`);

    if (true) {
        teste = 'valor diferente';
        console.log(`Valor dentro do if "${teste}"`);
    }

    console.log(`Valor após execução do if "${teste}"`);
})();

OBS: "var" não respeita escopo de bloco
 */