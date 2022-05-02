'use strict'

//Programa que diga si un numero es par o impar:
//1.ventana prompt
//2.si no es valido, que pida de nuevo el numero


var numero1 = parseInt(prompt('introduce el numero que quieres saber si es par o no:',0));

while(isNaN(numero1)){
    numero1 = parseInt(prompt('introduce el numero que quieres saber si es par o no:',0)); 
}

if(numero1 % 2 == 0){
    alert( numero1 + " es un numero par");
}else{
    alert( numero1 + " es un numero impar");
}