$(document).ready(()=>{
    console.log("JQuery...OK");

    $('.elemento').draggable();

    //redimensionar

    $('.elemento').resizable();

    //seleccionar y ordenar elementos

    // $('.lista-seleccionable').selectable();
    $('.lista-seleccionable').sortable({
        update: function(event,ui){
            console.log("ha cambiado la lista");
        }
    });

    //drop
    $('#elemento-movido').draggable();
    $('#area').droppable({
        drop: function(){
            console.log("has soltado algo dentro del area");
        }
    });


    //efectos
    $('#mostrar').click(()=>{
        $(".caja-efectos").toggle("explode","slow");
    });

    //tooltip
    $(document).tooltip();

    //dialog
    $("#lanzar-popup").click(()=>{
        $("#popup").dialog();
    });
    

    //datepicker

    $('#calendario').datepicker();

    //tabs
    $("#pestanas").tabs();

});