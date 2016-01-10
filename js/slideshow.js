(function() {
  // Set the initial state of the slideshow.
  $(".slideshow-initial").addClass("fade-effect").removeClass("slideshow-initial");
  
  var currentIndex = 0;
  var images = $(".slideshow-image");
  
  function slideCounter() {
    $(images[currentIndex]).removeClass("fade-effect");
    currentIndex = (currentIndex + 1)%images.length;
    $(images[currentIndex]).addClass("fade-effect");
  }
  
  setInterval(slideCounter, 5000);
})();
