$(document).ready(() => {
  console.log("JQuery...OK");

  $("#caja").hide();

  $("#mostrar").click(() => {
    $(this).hide();
    $("#ocultar").show();
    $("#caja").fadeIn("slow");
  });
  $("#ocultar").click(() => {
    $(this).hide();
    $("#mostrar").show();
    $("#caja").fadeOut("slow");
  });

  $("#todoEnUno").click(() => {
    $("#caja").fadeToggle("fast");

    //fadetoggle,slidetoggle,slideDown,SlideUp...hay muchos mas.ir probando
  });

  $("#animame").click(() => {
    $("#caja")
      .animate(
        { marginLeft: "500px", fontSize: "40px", height: "120px" },
        "slow"
      )
      .animate(
        {
          borderRadius: "900px",
          marginleft: "0px",
        },
        "slow"
      );
  });
});
