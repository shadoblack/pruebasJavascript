$(document).ready(function () {
  console.log("JQuery OK!!");

  var datos = $("#datos");
  //MouseOver y MouseOut
  // var caja = $("#caja");

  // caja.mouseover(() => {
  //   $(this).css("background", "red");
  // });

  // caja.mouseout(() => {
  //   $(this).css("background", "green");
  // });

  //hover
  // function cambiaRojo() {
  //   $(this).css("background", "red");
  // }

  // function cambiaVerde() {
  //   $(this).css("background", "red");
  // }

  // $(caja).hover(cambiaRojo, cambiaVerde);

  //click, doble click
  $(caja).click(function () {
    $(this).css("background", "blue").css("color", "white");
  });

  $(caja).dblclick(function () {
    $(this).css("background", "pink").css("color", "yellow");
  });

  //focus y blur
var nombre = $("#nombre");
  nombre.focus(()=>{
    $(this).css("border","2px solid red");
  });

  nombre.blur(()=>{
    $(this).css("border","2px solid transparent");
    datos.text($(this).val()).show();
  });

  //mousedown y mouseup

  datos.mousedown(()=>{
    $(this).css("border-color","grey");
  });

  datos.mouseup(()=>{
    $(this).css("border-color","black");
  });

  //mousemove
  $(document).mousemove(()=>{
    $('body').css("cursor","none")
    console.log("X" + event.clientX);
    console.log("Y" + event.clientY);
      $("#sigueme").css("left",event.clientX);
      $("#sigueme").css("top",event.clientY);

  });
});
