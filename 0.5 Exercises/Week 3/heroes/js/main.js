// First character is shown
$(".hero").first().addClass("shown");

// Store the name
var doname = function() {

  // Store the name
  var name = $(".shown").attr("title");

  // Print the name
  $(".name").text(name);

};
// Run the nam
doname();

// Show the next character
$(".next").click(function (){

  // Last sibling to first
  if ( $(".shown").is(":last-child") ) {

    $(".shown").removeClass("shown")
    .siblings().first().addClass("shown");

  }

  // Hide current, show next
  else {

    $(".shown").removeClass("shown")
      .next().addClass("shown");

  }

  // Run the name for the rest
  doname();

});
