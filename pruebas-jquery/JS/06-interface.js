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
    

});