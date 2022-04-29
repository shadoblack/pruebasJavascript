'use strict'

//condicional if
//si A es igual a B entonces haz algo

var edad1= 30;
var edad2 = 12;

if(edad1> edad2){
    console.log("Edad uno es mayor que edad dos");
}
else{
    console.log("otra cosa");
}

var edad=18;
var nombre = 'Edgar';

if(edad != 18){
    console.log("se cumple");
    if(nombre =='Edgar'){
        console.log("se vuelve a cumplir");
    }
    else if(nombre =='Edgar'){
        console.log(" se sigue cumpliendo");
    }
}

else{
    console.log("no se cumple");
}