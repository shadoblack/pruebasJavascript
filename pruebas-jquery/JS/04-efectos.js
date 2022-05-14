$(document).ready(()=>{
    console.log("JQuery...OK");

    $("#caja").hide();

    $("#mostrar").click(()=>{
        $(this).hide();
        $("#ocultar").show();
        $("#caja").fadeIn('slow');

    });
    $("#ocultar").click(()=>{
        $(this).hide();
        $("#mostrar").show();
        $("#caja").fadeOut('slow');
        

    });

    $("#todoEnUno").click(()=>{
        $("#caja").fadeToggle('fast');

        //fadetoggle,slidetoggle,slideDown,SlideUp...hay muchos mas.ir probando
    })
});