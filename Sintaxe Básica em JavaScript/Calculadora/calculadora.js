function calculadora(){
    const operacao = Number(prompt("Escolha uma operação:\n1- Soma (+)\n2- Subtração (-)\n3- Divisão (real) (/)\n4- Multiplicação (*)\n5- Resto (ou divisão inteira) (%)\n6- Potenciação (**)\n"));
    
    if(!operacao || operacao < 1 || operacao > 6){
        alert("Erro! Digite um valor válido!\n")
        calculadora();
    }
    let n1 = Number(prompt("Insira o primeiro valor: \n"));
    let n2 = Number(prompt("Insira o segundo valor: \n"));

    if(!n1 || !n2){
        alert("Erro! Digite parâmetros válidos\n")
        calculadora();
    }
    
    let resultado;

    function soma(){
        resultado = n1 + n2;
        alert(`${n1} + ${n2} = ${resultado}`);
        novaOp()
    }
    
    function subtracao(){
        resultado = n1 - n2;
        alert(`${n1} - ${n2} = ${resultado}`);
        novaOp()
    }
    
    function divisao(){
        resultado = n1 / n2;
        alert(`${n1} / ${n2} = ${resultado}`);
        novaOp()
    }
    
    function multiplicacao(){
        resultado = n1 * n2;
        alert(`${n1} * ${n2} = ${resultado}`);
        novaOp()
    }

    function resto(){
        resultado = n1 % n2;
        alert(`O resto da divisão entre ${n1} e ${n2} = ${resultado}`);
        novaOp()
    }

    function potenciacao(){
        resultado = n1 ** n2;
        alert(`${n1} elevado a ${n2} = ${resultado}`);
        novaOp()
    }

    function novaOp(){
        let opcao = Number(prompt("Deseja fazer uma nova operação?\n1- Sim\n2- Não\n"));

        if(opcao == 1){
            calculadora();
        } else if(opcao == 2){
            alert("Encerrando!\n");
        }else{
            alert("Erro! Digite uma opção válida\n");
            novaOp();
        }
    }

    switch (operacao){
        case 1:
            soma();
            break;
        case 2:
            subtracao();
            break;
        case 3:
            divisao();
            break;
        case 4: 
            multiplicacao();
            break;
        case 5:
            resto();
            break;
        case 6:
            potenciacao();
            break;
        default:
            console.log("Opção inválida!\n");
            break;

    }
    console.log(operacao);
}

calculadora();