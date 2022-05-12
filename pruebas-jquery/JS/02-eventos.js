$(document).ready(function () {
  console.log("JQuery OK!!");

  //MouseOver y MouseOut
  var caja = $("#caja");

  caja.mouseover(() => {
    $(this).css("background", "red");
  });

  caja.mouseout(() => {
    $(this).css("background", "green");
  });
});
