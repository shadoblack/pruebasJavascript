'use strict'

//funciones
//una funcion es una agrupacion reutilizable de un conjunto de instrucciones.

function calculadora(numero1,numero2){

    console.log("Suma: "+ (numero1+numero2));
    console.log("Resta: "+(numero1-numero2) );
    console.log("Multiplicacion: "+(numero1*numero2) );
    console.log("Division: "+(numero1/numero2) );

    return "soy el return";

}

calculadora(12,24);