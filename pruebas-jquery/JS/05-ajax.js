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

    // $.post($(this).attr("action"), usuario, function (response) {
    //   console.log(response);
    // }).done(()=>{
    //     alert("usuario añadido correctamente");
    // });

    //otras maneras ajax

    $.ajax({
        type: 'POST',
        // dataType: 'json', estos dos dan error y lo considera una accion no permitida 405
        //  contentType: 'application/json',
         url: $(this).attr("action"),
        data: usuario,
        beforeSend: ()=>{
            console.log("enviando usuario...");
        },
        success: (response)=>{
            console.log(response);
        },
        error:  ()=>{
            console.log("ha ocurrido un error");
        },
        timeout: 2000
    });


    return false;
  });
});
