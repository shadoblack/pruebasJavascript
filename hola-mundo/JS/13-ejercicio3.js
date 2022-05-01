'use strict'

//Hacer un programa que muestre todos los numeros entre 2 numeros introducidos por el usuario

var numero1 = parseInt(prompt('introduce un numero',0));
var numero2 = parseInt(prompt('introduce otro numero',0));
var cadena =[];
for(var i=numero1;i<=numero2;i++){
    cadena.push(i);
    
    
    
}

alert('los numeros que hay entre ' + numero1 + ' y ' + numero2 + ' son ' + cadena);
document.write('los numeros que hay entre ' + numero1 + ' y ' + numero2 + ' son ' + cadena);