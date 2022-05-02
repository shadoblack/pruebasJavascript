'use strict'

//calculadora
//-pide 2 numeros por pantalla
//-si se introduce un numero mal se vuelva a pedir
//-en el cuerpo de la pagina, en una alerta y por la consola, el resultado de
//sumar, restar, multiplicar y dividir esas 2 cifras

var numero1 = parseInt(prompt("introduce la primera cifra: ",0));
var numero2 = parseInt(prompt("introduce la segunda cifra: ",0));

while(isNaN(numero1) || isNaN(numero2)){
    numero1 = parseInt(prompt("introduce la primera cifra: ",0));
    numero2 = parseInt(prompt("introduce la segunda cifra: ",0));
}

document.write(numero1+numero2);
alert(numero1+numero2);
console.log(numero1+numero2);

document.write(numero1-numero2);
alert(numero1-numero2);
console.log(numero1-numero2);

document.write(numero1*numero2);
alert(numero1*numero2);
console.log(numero1*numero2);

document.write(numero1/numero2);
alert(numero1/numero2);
console.log(numero1/numero2);