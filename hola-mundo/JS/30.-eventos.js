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

//focus
var input = document.querySelector("#campo_nombre");
input.addEventListener('focus',function(){
    console.log("estas dentro del input");
});

//blur

input.addEventListener('blur',function(){
    console.log("estas fuera del input");
});

//keydown

input.addEventListener('keydown',function(){
    console.log("pulsando esta tecla");
});

//KEYPRESS

input.addEventListener('keypress',function(){
    console.log("tecla presionada");
});

//keyup

input.addEventListener('keyup',function(){
    console.log("tecla soltada");
});
