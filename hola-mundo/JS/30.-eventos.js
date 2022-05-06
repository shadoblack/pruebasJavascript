'use strict'

//Eventos del raton

var boton = document.querySelector("#boton");

function cambiarColor(){
    var bg = boton.style.background;
    if(bg =="green"){
        boton.style.background="red";
    }else{
        boton.style.background="green";
    }
}

//click

boton.addEventListener('click',function(){
    cambiarColor();
});

//mouseover

boton.addEventListener('mouseover',function(){
    boton.style.background = '#ccc';
});

//mouseout

boton.addEventListener('mouseout',function(){
    boton.style.background = 'black';
});