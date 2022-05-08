'use strict'

//localStorage

//comprobacion de disponibilidad de local storage


if(typeof(Storage) !== 'undefined'){
    console.log("LocalStorage disponible");
}else{
    console.log("no admite LocalStorage");
}

//guardar datos en localstorage

localStorage.setItem("titulo","Prueba de localstorage");

//recuperar elemento de localstorage

document.querySelector("#peliculas").innerHTML=localStorage.getItem("titulo");

//guardar objetos

var usuario ={
    nombre: "Edgar",
    email: "edgarerb@hotmail.es",
    web: "edgarerb.com"
};

localStorage.setItem("usuario",JSON.stringify(usuario));

//recuperar objeto

console.log(localStorage.getItem("usuario"));
var userjs=JSON.parse(localStorage.getItem("usuario"));
console.log(userjs);

document.querySelector("#peliculas").append(userjs.web);

//borrar localstorage

localStorage.removeItem("usuario");

//si usamos clear en vez de removeitem vaciamos todo el storage
