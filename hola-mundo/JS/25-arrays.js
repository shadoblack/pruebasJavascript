'use strict'

//arrays,arreglos,matrices

var nombre = "Edgar";
var nombres = ["Edgar","Fulgencio","Risto","Cristian","Willfred",52,true];

var lenguajes = new Array("PHP","JS","Go","Java");

console.log(nombres);
console.log(lenguajes);

console.log(nombres.length);

var elemento =parseInt(prompt("que elemento del array quieres?",0));
alert(nombres[elemento]);