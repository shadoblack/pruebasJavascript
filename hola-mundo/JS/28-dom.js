'use strict'

//DOM - Document Object Model

function cambiaColor(color){
    caja.style.color = color;
}
//conseguir elementos con un ID concreto
//var caja =document.getElementById("micaja");

var caja =document.querySelector("#micaja");

caja.innerHTML = "cambio de lo que pone en la caja";
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "hola";

console.log(caja);

//conseguir elementos por su etiqueta

var todosLosDivs = document.getElementsByTagName('div');

var contenido1= todosLosDivs[2].textContent;

console.log(contenido1);

// todosLosDivs.forEach(valor,indice => {
    var valor;
    for(valor in todosLosDivs){
        if( todosLosDivs[valor].textContent === 'string'){
    var parrafo = document.createElement("p");
    var texto = document.createTextNode(todosLosDivs[valor].textContent);
    parrafo.appendChild(texto);
    document.querySelector("#miseccion").appendChild(parrafo);
    }}
// });

console.log(todosLosDivs);

//conseguir elementos por su clase css

var divsRojos = document.getElementsByClassName('rojo');
divsRojos[0].style.background = "red";
console.log(divsRojos);

//query selector

var id =document.querySelector("#encabezado");
console.log(id);



