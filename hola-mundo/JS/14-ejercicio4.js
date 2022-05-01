'use strict'

//Mostrar todos los numeros impares que hay entre dos numeros introducidos por el usuario

var numero1 = parseInt(prompt('introduce un numero',0));
var numero2 = parseInt(prompt('introduce otro numero',0));
var cadena =[];


while(numero1 < numero2){
    numero1++;
    if(numero1%2 !=0){
        cadena.push(numero1);

    }else{

    }

}

alert('los numeros impares que hay entre el primer numero y el segundo numero son ' + cadena);
document.write('los numeros impares que hay entre el primer numero y el segundo numero son ' + cadena);