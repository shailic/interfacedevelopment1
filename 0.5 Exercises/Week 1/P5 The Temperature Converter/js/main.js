// These are my variables
var tempC = 13;
var tempF = 55.4;

// Output
$('.output').html("<p>What's the weather today?</p>");

var weather = function() {
  if (tempC > 10, tempF > 50) {
    $('.output').html("<p>It's nice out!</p>" + "<p>" + tempC + "&deg;C is " + ((tempC * (9/5)) + 32) + "&deg;F.</p>" + "<p>" + tempF + "&deg;F is " + ((tempF - 32) * (5/9)) + "&deg;C.</p>");
    $('body').css('background-color', 'orange');
  }
  else if (tempC < 10, tempF < 50) {
    $('.output').html("<p>" + tempC + "&deg;C is " + ((tempC * (9/5)) + 32) + "&deg;F.</p>" + "<p>" + tempF + "&deg;F is " + ((tempF - 32) * (5/9)) + "&deg;C.</p>");
    $('body').css('background-color', 'blue');
  }
}




// End.
