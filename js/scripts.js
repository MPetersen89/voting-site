$(document).ready(function() {
  
  $("#ageVerification").submit(function() {
    const age = parseInt($("#age").val());
    event.preventDefault()
    if (age >= 18) {
      $('#over18').show();
      $('#under16').hide();
      $('#from16to18').hide();
    } else if (age >= 16 && age <= 17) {
      $('#from16to18').show();
      $('#over18').hide();
      $('#under16').hide();
    } else if (age < 16) {
      $('#from16to18').hide();
      $('#over18').hide();
      $('#under16').show();
    }
  });
});