'use strict'

//mostrar todos los numeros divisores de un numero introducido en un prompt

var numero1 = parseInt(prompt('introduce un numero',0));
var cadena =[];

for(var i = 1;i<= numero1;i++){

    if(numero1%i == 0){
        cadena.push(i);
    }else{

    }
}

alert("divisores: " + cadena);
document.write("divisores: " + cadena);