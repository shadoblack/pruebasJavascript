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

var year=2022
var year2=2018
if(year !=2018){
    console.log("el año no es 2018")
}

if(year>=2000 && year <= 2020){
    console.log("la fecha se comprende entre el 2000 y el 2020");
}
else{
    console.log("no se cumple");
}

if(year == 2022 || year2 == 2016){
    console.log( " se cumple el or");
}
else{
    console.log("no se cumple el or");
}