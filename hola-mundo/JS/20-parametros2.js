'use strict'

//parametros REST y SPREAD

function listadoFrutas(fruta1, fruta2, ...todas_las_frutas){
    console.log("fruta 1: ", fruta1);
    console.log("fruta 2: ", fruta2);
    console.log("Resto de frutas: ", todas_las_frutas);
}

listadoFrutas("Naranja", "Manzana", "Sandia", "pera", "melon", "coco");

var frutas = ["Naranja", "Manzana"]

listadoFrutas(...frutas, "Sandia", "pera", "melon", "coco");
