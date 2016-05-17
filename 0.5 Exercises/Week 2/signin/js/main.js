// 1. When the user presses the .signin button, fade in the modal window
// 2. When the user presses the .close button, fade out the modal window
// 3. When the user presses the .submit button, add an .error class to both input elements
// 4. When the user puts their cursor in one of the input fields, remove the .error class
// 5. (Bonus) Allow the user to click the .modal to close itself
// 5a. Tricky, consider what happens when two elements that are overlapping are both waiting for a click

///////////////////////////////
// VARIABLES
///////////////////////////////

// 1. LAUNCH MODAL //
var open = function() {
  $(".modal").fadeIn("slow");
};

// 2. CLOSE MODAL //
var close = function(event) {
  if (event) {
    $(".modal").fadeOut("slow").children().on("click", function(event) {
      event.stopPropagation();
    });
  }
};

// 3. ERROR //
var error = function() {
  $("input").addClass("error");
};

// 4. REMOVE ERROR //
var remerror = function() {
  $(this).removeClass("error");
};


///////////////////////////////
// OUTPUTS
///////////////////////////////

// 1. Open
$(".signin").on("click", open);

// 2. Close: X
$(".close").on("click", close);

// 2. Close: Modal
$(".modal").on("click", close);

// 3. Error
$(".submit").on("click", error);

// 4. Remove error
$("input").on("focus", remerror);


// End.
