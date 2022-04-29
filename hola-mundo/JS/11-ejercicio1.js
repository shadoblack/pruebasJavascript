'use strict'

//Programa que pida dos numeros y que nos diga cual es el mayor, el menor y si son iguales

var numero1= parseInt(prompt('introduce el primer numero',0));
var numero2= parseInt(prompt('introduce el segundo numero',0));
var resultado ="";

if(numero1 < numero2){
    resultado=" es mas pequeño que ";
}
else if(numero1 > numero2){
    resultado=" es mas grande que ";
}
else if(numero1 == numero2){
    resultado=" es igual que ";
}
else{
    resultado="añade un numero correcto";
}

alert(numero1 + resultado + numero2);