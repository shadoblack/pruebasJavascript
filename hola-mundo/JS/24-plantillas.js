'use strict'

//plantillas de texto

var nombre = prompt("mete tu nombre");
var apellidos = prompt("mete tus apellidos");

//var texto = "mi nombre es: " +nombre+ " mis apellidos son: " +apellidos;

var texto =`
    <h1>Hola que tal</h1>
    <h3>Mi nombre es: ${nombre}</h3>
    <h3>Mi apellido es: ${apellidos}</h3>
`;


document.write(texto);