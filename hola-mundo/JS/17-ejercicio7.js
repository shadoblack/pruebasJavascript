'use strict'

//tabla de multiplicar de un numero introducido por pantalla.

var numero1 = parseInt(prompt('introduce el numero del que quieres saber su tabla de multiplicar: ',0));


for(let i=1;i<=10;i++){
let multiplicador = numero1*i;
document.write(numero1 + " X " + i + "=" + multiplicador + "<br>");
}