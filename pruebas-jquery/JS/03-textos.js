$(document).ready(()=>{
    console.log("JQuery...OK");
    console.log($('a').length);
    
    reloadLinks();

    $('#add_button').click(()=>{
       $('menu').prepend('<li>< href="'+$("#add_link").val()+'"></a></li>');
       reloadLinks();
    });
});

function reloadLinks(){
    $('a').each(()=>{
        console.log($(this));
        var that = $(this);
        var enlace = that.attr("href");

        that.attr('target','_blank');
        that.removeAttr('id')
        that.text(enlace);
})};