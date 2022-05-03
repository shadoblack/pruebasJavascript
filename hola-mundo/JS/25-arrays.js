'use strict'

//arrays,arreglos,matrices

var nombre = "Edgar";
var nombres = ["Edgar","Fulgencio","Risto","Cristian","Willfred",52,true];

var lenguajes = new Array("PHP","JS","Go","Java");

console.log(nombres);
console.log(lenguajes);

console.log(nombres.length);

var elemento =parseInt(prompt("que elemento del array quieres?",0));
if(elemento >= nombres.length){

    alert("introduce el numero correcto menor que "+ nombres.length);
}else{
    alert("el usuario seleccionado es " + nombres[elemento]);

}


document.write("<h1>lenguajes de programacion del 2020</h1>");

for(var i = 0; i<lenguajes.length; i++){
    document.write("<li>"+lenguajes[i]+"</li>");
}