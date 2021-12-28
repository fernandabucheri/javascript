/*function botao(){
    alert("Obrigada por clicar!\n");
}*/

function botao(){
    document.getElementById("agradecimento").innerHTML="Obrigada por clicar!!!";
    console.log(document.getElementById("agradecimento")); // teste
}

function redirecionar(){
    // abrir em outra janela 
    window.open("https://www.google.com.br/"); 

    // abrir em outra aba 
    //window.location.href="https://www.google.com.br/";
}

// Utilizando o getElementById
/* function trocar(){
    document.getElementById("mouseMove").innerHTML="Obrigada por passar o mouse!!!";
    //alert("Trocar texto"); 
}

function voltar(){
    document.getElementById("mouseMove").innerHTML="Passe o mouse aqui!";
}
*/

// Usando o this
function trocar(elemento){
    elemento.innerHTML="Obrigada por passar o mouse!!!";
}

function voltar(elemento){
    elemento.innerHTML="Passe o mouse aqui!";
}

function load(){
    alert("Página carregada!");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}