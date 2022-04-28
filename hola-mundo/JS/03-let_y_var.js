'use strict'

//prueba con var y let
let prueba = "hola";
alert(prueba);

var numero= 84;

if(true){
    var numero =120;
    console.log(numero);
}

console.log(numero);

var texto = "pelusa";
console.log(texto);


//let nunca saldra de su bloque, siempre sera local, en este caso, del if.El var es el que se aplica, var es 
//el que se mantiene, es global.En cambio, el let al ser local, desaparece.

if(true){
    let texto = "intento de let fuera de archivo";
    console.log(texto);

}

console.log(texto);