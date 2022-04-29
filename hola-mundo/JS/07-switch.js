'use strict'

//Switch

var edad = 18;
var imprime ="";

switch(edad){
    case 18:
        imprime = "acabas de cumplir la mayoria de edad";
    break;
    case 25:
        imprime = "ya eres adulto";
    break;
    case 40:
        imprime = "veterano";
    break;
    case 70:
        imprime = "anciano";
    break;
    default:
        imprime ="tu edad no cumple valores";
    break;
}

console.log(imprime);