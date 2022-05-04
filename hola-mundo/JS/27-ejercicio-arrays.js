'use strict'

//1.pida 6 numeros por pantalla y los meta en un array
//2.mostrar el array entero / todos sus elementos en el cuerpo de la pagina y en la consola.
//3.sacarlo ordenado y mostrarlo
//4.invertir su orden y mostrarlo
//5.mostrar cuantos elementos tiene el array
//6.busqueda de un valor introducido por el usuario, y que diga su posicion en el array.

var entrada = "";
var array =[]

do{
    entrada = prompt("introduce un numero hasta que sean 6");
    array.push(entrada);
    
}while(array.length <= 5);

console.log(array);
document.write("<h1>"+array+"<h1>");

console.log(array.sort());
console.log(array.reverse());
console.log(array.length);



var busqueda = array.find(recorrido => recorrido == 5);
var found =array.findIndex(recorrido2 => recorrido2 ==5);
console.log(busqueda +" y esta en la posicion: "+ found);