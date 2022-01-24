(() => {
    const teste = 'valor função';
    console.log(`Valor dentro da função "${teste}"`);

    if (true) {
        const teste = 'valor if';
        console.log(`Valor dentro do if "${teste}"`);
    }

    console.log(`Valor após execução do if "${teste}"`);
})();