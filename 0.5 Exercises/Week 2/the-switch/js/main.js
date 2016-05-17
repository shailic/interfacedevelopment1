// 1. When someone hits the button in the switch, remove the current state class (on/off), and apply the opposite class (on/off)
// 2. Swap the colors of the body's background and text by adding or removing the dark/light class
// 3. Lastly, change the text in box to say "It's so bright in here!" when it's on, and "Hey, who turn off the lights?" when it's off

///////////////////////////////
// VARIABLES
///////////////////////////////

// 1. USER HITS BUTTON //
var lights = function() {

  if(class="on"){
    $(".on").toggleClass(".off");
  }

};

///////////////////////////////
// OUTPUTS
///////////////////////////////

// 1. On -> Off
$(".switch").on("click", lights);
