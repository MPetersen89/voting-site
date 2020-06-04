$(document).ready(function() {
  const age = parseInt(prompt("How old are you?"));

  if (age >= 18) {
    $('#over18').show();
  } else if (age >= 16 && age < 18) {
    $('#16to18').show();
  } else (age < 16) {
    $('#under16').show();
  }
});