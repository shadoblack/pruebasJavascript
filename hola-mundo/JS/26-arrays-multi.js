'use strict'

var categorias = ['accion','terror','comedia'];
var peliculas = ['la verdad duele','la vida es bella','gran torino'];

peliculas.sort();
peliculas.reverse();

var cine = [categorias,peliculas];

console.log(cine);
console.log(cine[0][1]);

// var elemento = "";

// do{
//     elemento = prompt("introduce tu pelicula");
//     peliculas.push(elemento);
// }while(elemento != "ACABAR");

// peliculas.pop();

// console.log(peliculas);


var indice = peliculas.indexOf('gran torino');
console.log(indice);

if(indice > -1){
    peliculas.splice(indice,1)
}

console.log(peliculas);

var peliculasString = peliculas.join();
console.log(peliculasString);

var cadena = "texto1, texto2, texto3";
var cadenaArray =cadena.split(",");

console.log(cadenaArray);

for(let recorrido in cadenaArray){
    document.write("<li>" + cadenaArray[recorrido]+"</li>");
}

//busquedas

var busqueda = cadenaArray.find(recorrido => recorrido == "texto2");
console.log(busqueda);
var busqueda2 = cadenaArray.findIndex(recorrido => recorrido == "texto2");
console.log(busqueda2);

var precios = [12,20,50,80,12];
var busqueda3 = precios.some( precio => precio>=20);
console.log(busqueda3);