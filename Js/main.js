function clicked(){
    document.getElementById("thank").innerHTML = "<b>Thanks for clicking</b>";

    //console.log(document.getElementById("thank"))
    //alert("thanks for clicking");
}

function redirect(){
    window.open("https://github.com/ParisPS");
    //window.location.href = "https://github.com/ParisPS";
}

function change(elemento){
    //document.getElementById("mousemove").innerHTML = "Thanks for hovering over here";
    elemento.innerHTML = "Thanks for hovering over here";
    //alert("change text");
}

function turn(elemento){
    //document.getElementById("mousemove").innerHTML = "Mouse over here";
    elemento.innerHTML = "Mouse over here";
}

function load(){
    alert("page loaded");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}

/* function validaIdade (idade){
    var validar;
    if (idade >= 18){
        validar = true

    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual a sua idade?");
console.log(validaIdade(idade));

/* function soma(n1, n2) {
    return n1 + n2;
}
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}
alert(setReplace ("Anime", "Star Wars", "Marvel"));
alert(soma(5, 10)) */

/* var d = new Date();
alert(d.getMonth()+1) */

/* var count;
for (count=0; count <= 5; count++){
       alert(count);
}; */

/* var idade = prompt("Qual a sua idade?");
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
}; */

/* var frutas = [{name: "maçã", cor:"vermelha"}, {name:"uva", cor:"roxa"}]
console.log(frutas);


var name = "Paris PS";
var age = 17;
var age2 = 10;
var list = ["Maçã", " laranja", " limão"];
list.push(" uva")

alert(name + " tem " + age + " anos");

console.log(name);
console.log(age + age2);
console.log(list[0])
console.log(list.join(" - ")); */