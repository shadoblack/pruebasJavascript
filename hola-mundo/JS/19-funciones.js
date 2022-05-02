'use strict'

//funciones
//una funcion es una agrupacion reutilizable de un conjunto de instrucciones.

function calculadora(numero1,numero2,mostrar = false){

    if(mostrar == false){
    console.log("Suma: "+ (numero1+numero2));
    console.log("Resta: "+(numero1-numero2) );
    console.log("Multiplicacion: "+(numero1*numero2) );
    console.log("Division: "+(numero1/numero2) );
    console.log(mostrar);
    }
    else{
    document.write("Suma: "+ (numero1+numero2)+"<br>");
    document.write("Resta: "+(numero1-numero2) +"<br>");
    document.write("Multiplicacion: "+(numero1*numero2)+"<br>" );
    document.write("Division: "+(numero1/numero2)+"<br>" );
    }
    return "soy el return";

}

calculadora(12,24,true);