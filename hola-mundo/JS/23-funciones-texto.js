'use strict'

//transformacion de textos
var numero = 444;
var texto1 = "Hola soy una string";
var texto2 = "Hola soy la segunda string";

// var dato = numero.toString();
// var dato2 = texto1.toUpperCase();
// var dato3 = texto2.toLowerCase();


// console.log(typeof dato);
// console.log( dato2);
// console.log( dato3);

// //calcular longitud

// var nombre = "Inclopelusia";

// console.log(nombre.length);

// //concatenar - unir textos

// var textoTotal = texto1 + " " + texto2;

// console.log(textoTotal);


// textoTotal = texto1.concat(" "+ texto2);

// console.log(textoTotal);

var busqueda = texto1.lastIndexOf("Hola"); //se puede usar tambien .search
// con .match hara un array con todas las coincidencias. para que sean varias busquedas,seria /Hola/g sin las ""
// con .substr,seria .substr(posicion donde inicia,caracteres que saca)
// con .charAt()el numero que el pongamos sacara la letra en esa posicion.
// con .startsWith("palabra que buscamos") devolvera si es true o false si tiene el contenido, y siempre al principio del string.
// con .endsWith() lo mismo pero por donde termina
// con .includes() devuelve true o false si encuentra o no esto en este string
// con .replace(lo que voy a remplazar,loremplazado)
// con .slice()el numero que se le ponga,cortara esa cantidad de caracteres.puede darsele limites con ,
// con .split() lo mete en un array.si ponemos ""dentro, separara las palabras del array.
// con .trim() quita espacios al inicio y final de los strings.Va bien para guardar en BBDD.
console.log(busqueda);