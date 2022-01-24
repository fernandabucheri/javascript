(() => {
    let teste = 'valor função';
    console.log(`Valor dentro da função "${teste}"`);

    if (true) {
        let teste = 'valor if';
        console.log(`Valor dentro do if "${teste}"`);
    }

    console.log(`Valor após execução do if "${teste}"`);
})();