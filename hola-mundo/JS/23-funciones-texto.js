'use strict'

//transformacion de textos
var numero = 444;
var texto1 = "Hola soy una string";
var texto2 = "Hola soy la segunda string";

var dato = numero.toString();
var dato2 = texto1.toUpperCase();
var dato3 = texto2.toLowerCase();


console.log(typeof dato);
console.log( dato2);
console.log( dato3);

//calcular longitud

var nombre = "Inclopelusia";

console.log(nombre.length);

//concatenar - unir textos

var textoTotal = texto1 + " " + texto2;

console.log(textoTotal);


textoTotal = texto1.concat(" "+ texto2);

console.log(textoTotal);