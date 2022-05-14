$(document).ready(() => {
  console.log("JQuery...OK");

  //load
  //$("#datos").load("");

  //get y post
  $.get("https://reqres.in/api/users", { page: 2 }, function (response) {
    response.data.forEach((element, index) => {
      $("#datos").append("<p>" + element.first_name + "</p>");
    });
  });

  //post

  $("#formulario").submit(function (e) {
      e.preventDefault();
    var usuario = {
      name: $('input[name="name"]').val(),
      web: $('input[name="web"]').val()
    };

    console.log(usuario);

    $.post($(this).attr("action"), usuario, function (response) {
      console.log(response);
    }).done(()=>{
        alert("usuario añadido correctamente");
    });
    return false;
  });
});
