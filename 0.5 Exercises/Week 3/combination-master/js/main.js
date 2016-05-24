// The current combination:
var dial1 = 5;
var dial2 = 6;
var dial3 = 2;

$('button')
  .on('click', function() {
    // Increase the number on the dial
    $(this).text((parseInt($(this).text()) + 1) % 10);
    // Check the combination
    checkcombo();
  });

var checkcombo = function() {
  // Each time a button is clicked, check the combo:
  // If no number are correct, the background should be #d27666
  // If any one number is correct, the background should be #e69458
  // If any two numbers are correct, the background should be #e3cb67
  // If all three numbers are correct, the background should be #bcdd4e

  // Get the numbers and output them
  var a = $(".one").text();
  var b = $(".two").text();
  var c = $(".three").text();

  var correct = 0;

  // if ( a == dial1 ) {
  //   // correct = correct + 1;
  //   correct++;
  // }

  if ( a == dial1 ) correct++;
  if ( b == dial2 ) correct++;
  if ( c == dial3 ) correct++;

  if ( correct == 1 )
    $("body").css("background-color", "#e69458");
  else if ( correct == 2 )
    $("body").css("background-color", "#e3cb67");
  else if ( correct == 3 )
    $("body").css("background-color", "#bcdd4e");
  else
    // NONE correct
    $("body").css("background-color", "#d27666");

    // No need for curly brackets if there is only one thing happening in the if/else statements 


  // if ( a == dial1 && b == dial2 && c == dial3 )
  // {
  //   $("body").css("background-color", "#bcdd4e");
  //   // ALL correct
  // }
  //
  // else if ( (a == dial1 && b == dial2) ||
  //           (a == dial1 && c == dial3) ||
  //           (b == dial2 && c == dial3))
  // {
  //   $("body").css("background-color", "#e3cb67");
  //   // TWO correct
  // }
  //
  // else if ( a == dial1 ||
  //           b == dial2 ||
  //           c == dial3 )
  // {
  //   $("body").css("background-color", "#e69458");
  //   // ONE correct
  // }
  //
  // else {
  //   $("body").css("background-color", "#d27666");
  //   // NONE correct
  // }


};
