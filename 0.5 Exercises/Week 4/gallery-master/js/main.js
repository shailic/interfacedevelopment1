var responsivegallery = function() {

  // Change the size of the figure box itself to start
  var w = $(".galimg").width();
  $(".galimg").height(w);


  // Look at each individual image
  // We call this a loop
  $(".galimg img").each(function() {

    // Get width and height of images
    var w = $(this).width();
    var h = $(this).height();

    // Apply classes to shrink and fit images within container
    if (h > w) {
      $(this).addClass("portrait");

      // New w and h
      w = $(this).width();
      h = $(this).height();

      // Centering visually
      var diff = (w - h) / 2;
      $(this).css("top", diff+"px");

      // Centers image using math
      // http://stackoverflow.com/questions/16310918/css-scale-and-square-center-crop-image
      // var centerimg = -(((w/h) * 100)-100)/2;  //math the negative margin
      //       $(this).css('margin-left', centerimg + '%');
    }

    else if (w > h) {
      $(this).addClass("landscape");

      // New w and h
      w = $(this).width();
      h = $(this).height();

      // Centering visually
      var diff = (h - w) / 2;
      $(this).css("left", diff+"px");

      // Centers image using math
      // http://stackoverflow.com/questions/16310918/css-scale-and-square-center-crop-image
      // var centerimg = -(((h/w) * 100)-100)/2; //math the negative margin
      //       $(this).css('margin-top', centerimg + '%');
    }

  });

};

// Responsive images in the gallery
$(window).on("ready resize",responsivegallery);


// Open Modal
$(".galimg img").on("click", function(){

  // Select the modal, clear it out, show it
  $(".modal").empty().removeClass("hidden");

  // Fade in
  $(".modal").fadeIn("slow");

  // Clone the image we clciked and add to modal
  $(this).clone().appendTo(".modal");

  // Copy the caption and add it to the modal
  var cap = $(this).attr("data-caption");
  $("<figcaption>")
    .text(cap)
    .css({"color":"white", "font-size":"2em"})
    .appendTo(".modal");


  // Alternate method
  // // When I click an image, store the SRC attr("src") of the image
  // // Create a new <img> with the src you just stored
  // var imgsrc = $(this).attr("src");
  // $(".modal img").attr("src", imgsrc);
  //
  // // caption
  // var cap = $(this).attr("data-caption");
  // $("<figcaption>")
  //   .text(cap)
  //   .css({"color":"white", "font-size":"2em"})
  //   .appendTo(".modal");

});

// Close modal
var closeModal = function() {
    $(this).fadeOut("slow");
};

$(".modal").on("click", closeModal);
