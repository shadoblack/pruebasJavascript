$(document).ready(()=>{
    console.log("JQuery...OK");

    $("#caja").hide();

    $("#mostrar").click(()=>{
        $("#caja").show();

    });
    $("#ocultar").click(()=>{
        $("#caja").hide();

    });
});