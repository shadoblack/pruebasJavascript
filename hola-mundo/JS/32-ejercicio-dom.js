'use strict'

window.addEventListener('load',()=>{
    console.log("DOM cargado")

    var formulario = document.querySelector('#formulario');
    var box_dashed = document.querySelector(".dashed");
    box_dashed.style.display ="none";

    formulario.addEventListener('submit',()=>{
        console.log("Evento submit capturado");

        var nombre = document.querySelector('#nombre').value;
        var apellidos = document.querySelector('#apellidos').value;
        var edad = document.querySelector('#edad').value;

        box_dashed.style.display ="block";


        console.log("nombre: " +nombre+" apellidos: " + apellidos+ " edad: "+edad);

        var datos_usuario =[nombre,apellidos,edad];

        for(let indice in datos_usuario){
            var parrafo = document.createElement("p");
            parrafo.append(datos_usuario[indice]);
            box_dashed.append(parrafo);

        }

       
    });
})