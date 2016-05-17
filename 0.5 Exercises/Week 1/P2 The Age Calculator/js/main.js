// These are my variables
var currentYear = 2016;
var birthYear = 1991;

// Output
$('.output').html("<p>How old am I?</p>");

var calculate = function() {
  if (currentYear > birthYear) {
    $('.output').html("<p>You are " + (currentYear - birthYear) + " years old.</p>");
  }
  if (currentYear < birthYear) {
    $('.output').html("<p>You will be born in " + (birthYear - currentYear) + " years.</p>");
  }
}


// End.
