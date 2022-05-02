'use strict'

//funciones anonimas
//es una funcion que no tiene nombre(callback)

// var pelicula = function(nombre){
//     return "La pelicula es: " + nombre;
// }

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
    var sumar = numero1+numero2;

    sumaYmuestra(sumar);
    sumaPorDos(sumar);
    return sumar;
}

sumame(5,7,function(dato){
    console.log("la suma es: ",dato);
},
function(dato){
    console.log("la suma por dos es:",(dato*2));
}
)