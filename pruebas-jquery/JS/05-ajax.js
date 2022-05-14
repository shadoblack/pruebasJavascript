$(document).ready(()=>{
    console.log("JQuery...OK");

    //load
    //$("#datos").load("");

    //get y post
    $.get("https://reqres.in/api/users",{page: 2},function(response){
        response.data.forEach((element,index)=>{
            $("#datos").append("<p>"+element.first_name+"</p>");
        });          
        

    });
});