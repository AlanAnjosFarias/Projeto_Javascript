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