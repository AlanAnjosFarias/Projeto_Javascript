var nome = "Alan dos Anjos";
//alert("Bem Vindo " + nome);
var lista = ['pera', 'maca', 'banana'];
console.log(lista);
lista.push('uva');
console.log(lista);
lista.pop();
console.log(lista);
console.log(lista.length);
console.log(lista.reverse());
console.log(lista);
console.log(lista.toString());
console.log(lista.join("|"));

//dicionario - parecido com objeto jason

var fruta = {nome: "maca", cor:"vermelha"};
console.log(fruta);
console.log(fruta.nome);

// lista de dicionario

var frutas = [{nome: "uva", cor:"roxa"}, {nome: "maca", cor:"vermelha"}];
console.log(frutas);
console.log(frutas[1].nome);


// Condicionais
//var idade = 18;

/* // comentando para testar
var idade = prompt("Qual a sua idade");


if(idade >= 18){
    alert("Maior de idade");
}
else {
    alert("Menor de idade");
}
*/

//loop

/*
var count = 0;

while(count < 5){
    console.log(count);
    count++;
}

var count2 = 0;
for(var x = 6; x <= 10; x++){
    console.log(x);
}
*/

// Datas
/*
var d = new Date();
console.log(d);
console.log(d.getMonth()+1);
console.log(d.getHours());
console.log(d.getDay());
*/

// funcoes

function soma(n1, n2){
    return n1+n2;
}

function redirecionar(){
    //para abrir EM outra pagina
    window.open("https://www.google.com.br");
    //para abrir na mesma pagina
    window.location.href = ("https://www.outlook.com.br");
}

console.log(soma(5, 10));

// interagindo com elementos HTML

//funcao para o click do botao no arquivo html

function clicou(){
    //alert("Botao clicado");

    //manipulando elementos no html
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
    document.getElementById("agradecimento2").innerHTML = "<b>Obrigado por clicar</b>";

}

//opção usando document.getElementById()
function trocar(){
    document.getElementById("mousemove").innerHTML = "Obrigado por passa o Mouse";
}

//opção usando document.getElementById()
function voltar(){    
    document.getElementById("mousemove").innerHTML = "Passe o Mouse Aqui";
}

//opção sem usar document.getElementById()

function trocar2(elemento){
    elemento.innerHTML = "Obrigado por passa o Mouse";
}

//opção sem usar document.getElementById()
function voltar2(elemento){    
    elemento.innerHTML = "Passe o Mouse Aqui 2";
}

function load(){
    console.log("Pagina Carregada!");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}