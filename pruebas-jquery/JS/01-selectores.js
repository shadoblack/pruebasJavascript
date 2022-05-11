$(document).ready(function () {
  console.log("JQuery OK!!");

  //selector de ID
  $("#rojo").css("background", "red").css("color", "white");

  $("#amarillo").css("background", "yellow").css("color", "green");

  $("#verde").css("background", "green").css("color", "black");

  //selectores de clases
  var mi_clase = $(".zebra");

  console.log(mi_clase);
  console.log(mi_clase.eq(1));

  mi_clase.css("border", "5px dashed black");

  $(".sin_borde").click(function () {
    console.log("has clicado");
    $(this).addClass("zebra");
  });
});
