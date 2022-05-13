$(document).ready(function () {
  console.log("JQuery OK!!");

  //MouseOver y MouseOut
  // var caja = $("#caja");

  // caja.mouseover(() => {
  //   $(this).css("background", "red");
  // });

  // caja.mouseout(() => {
  //   $(this).css("background", "green");
  // });

  //hover
  function cambiaRojo() {
    $(this).css("background", "red");
  }

  function cambiaVerde() {
    $(this).css("background", "red");
  }

  caja.hover(cambiaRojo, cambiaVerde);
});
