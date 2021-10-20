function clicou(){
  document.getElementById("Agradecimento").innerHTML = "<b>Obrigado por Clicar!!!</b>";

  console.log(document.getElementById("Agradecimento"));
  //alert("Obrigado por Clicar");
}

function redirecionar(){
  window.open("http://www.terra.com.br/");
  window.location.href = "http://www.google.com.br/"
}

function trocar(elemento){
  //document.getElementById("mousemove").innerHTML = "Obrigado por Passar  Mouse";
  elemento.innerHTML = "Obrigado por Passar  Mouse";
}

function voltar(elemento){
  //document.getElementById("mousemove").innerHTML = "Pause o Mouse Aqui";
  elemento.innerHTML = "Pause o Mouse Aqui";
}

function load(){
  alert("Pagina Carregada!");
}

function FuncaoChange(elemento){
  console.log(elemento.value);
}

/*
function soma(n1,n2){
  return n1 + n2;
}


function validaIdade(idade){
  var validar;
  if (idade >= 18){
    validar = true;
  }  
  else{
    validar = false;
  }
  return validar;
}
function setReplace(frase, nome, novo_nome){
  return frase.replace(nome, novo_nome);
}

var idade = prompt("Qual a sua idade:");
console.log(validaIdade(idade));



alert(soma(5,10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));



var d = new Date();

alert(d.getMinutes());
alert(d.getDay());
alert(d.getMonth());
alert(d.getDate());




var count;

for (count = 3; count <=5; count++){
  alert(count);
}



var count = 0;
while (count <= 5) {
  console.log(count);
  alert(count);
  count++;
}

var idade = prompt("Qual a sua Idade?")
//var idade = 18;

if (idade >= 18){
  alert("Maior de Idade");
}
else {
  alert("Menor de Idade");
}



var nome = "Marco Antonio Maschio";
var idade = 29;
var idade2 = 10;
var n1 = 5;
var n2 = 10;
var lista = ["maça", "pera", "laranja"]
var fruta = {nome: "maça", cor: "vermelha"}
var frase = "Japão é o melhor time do mundo!";
//alert(nome + " tem " + idade + " anos.");
//alert(idade + idade2);
console.log(nome);
console.log(idade + idade2);
console.log(frase.replace("Japão", "Brasil"));
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());
console.log(n1 * n2);
console.log(lista);
console.log(lista[1]);
//alert(lista[2]);
lista.push("uva");
console.log(lista);
lista.pop();
console.log(lista);
console.log(lista.length);
lista.push("uva");
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista[0]);
console.log(lista.toString()[0]);
console.log(lista.join(" | "));
console.log(fruta.nome);
console.log(fruta.cor);


var fruta = [{nome: "maça", cor: "vermelha"},{nome: "uva", cor: "roxa"}];

console.log(fruta);
alert(fruta[1].cor);

*/