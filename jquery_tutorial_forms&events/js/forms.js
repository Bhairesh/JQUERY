
$("form").on("submit", () => {

  alert($("#entered_word").val());

});

$("#loc_button").on("click, mouseenter", () => {

  let zipCode = $('input#entered_zip').val();

  $("input#entered_city_state").val(zipCode + " is of bangalore south.");

})

$("input#entered_zip").on("focus", () => {
  $("#city_display").text("Typing...");
})

$("input#entered_zip").on("blur", () => {
  $("#city_display").text("Enter Location:");
})




