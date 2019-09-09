
$("button").on("click", function () {
    let qty = $("#quant_1").val();
    let price = $("#rate_1").val();
    let amt = qty * price;

    $("#amount_1").addClass("amount");
    $("#amount_1").removeAttr("id"); //  or $("#amount_1").css("display", "block" );

    $(".amount").val(amt);

    $("#calc_output").html(`<h2 id='output'>Amount Charged for quantity of ${qty} is $${amt}</h2>`);

});
