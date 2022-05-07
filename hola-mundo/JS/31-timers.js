'use strict'

window.addEventListener('load', ()=>{

    //timers
    //set interval se ejecuta siempre, setTimeOut solo se ejecuta una vez.

    function intervalo(){
    var tiempo = setInterval(()=>{
        console.log("set interval ejecutado");

        var encabezado =  document.querySelector("h1")

        if(encabezado.style.fontSize =="50px"){
            encabezado.style.fontSize = "20px";
        }else{
            encabezado.style.fontSize ="50px";
        }
        
    },1000);
        return tiempo}
        var tiempo = intervalo();

    var stop = document.querySelector("#stop");

    stop.addEventListener("click",()=>{
        alert("has parado el intervalo en bucle");
        clearInterval(tiempo);
    });

    var start = document.querySelector("#start");

    start.addEventListener("click",()=>{
        alert("has activado el intervalo en bucle");
        intervalo();
    });

});