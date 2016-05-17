// These are my variables
var jobTitle = "scientist";
var geoLocation = "Geneiva";
var partnerName = "ThatPerson";
var noChildren = 3;

// Output
$('.output').html("<p>Tell me my fortune!</p>");

var fortune = function() {
  if (jobTitle == "scientist") {
    $('.output').html("<p>You will be a " + jobTitle + " in " + geoLocation + ", and married to " + partnerName + " with " + noChildren + " kids.</p>");
  }
  else {
    $('.output').html("<p>Could not find your fortune...</p>");
  }
}



// End.
