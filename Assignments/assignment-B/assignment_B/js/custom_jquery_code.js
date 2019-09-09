
$('#smart').on('dblclick', ()=>{

    let html = $("#smart").html();

    $('#place').html(html);
    $(this).html("<p> Paragraph added..! </p>");

    //$('#place').html($("#smart").html());

});




