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

var resultado = "La suma es: "+ (numero1+numero2)+"<br>"+
                "La resta es: "+(numero1-numero2)+"<br>"+
                "La multiplicacion es: "+(numero1*numero2)+"<br>"+
                "La division es: "+(numero1/numero2)+"<br>";
var resultadon = "La suma es: "+ (numero1+numero2)+"\n"+
                "La resta es: "+(numero1-numero2)+"\n"+
                "La multiplicacion es: "+(numero1*numero2)+"\n"+
                "La division es: "+(numero1/numero2)+"\n";

document.write(resultado);
alert(resultadon);
console.log(resultadon);


// document.write(numero1+numero2);
// alert(numero1+numero2);
// console.log(numero1+numero2);

// document.write(numero1-numero2);
// alert(numero1-numero2);
// console.log(numero1-numero2);

// document.write(numero1*numero2);
// alert(numero1*numero2);
// console.log(numero1*numero2);

// document.write(numero1/numero2);
// alert(numero1/numero2);
// console.log(numero1/numero2);