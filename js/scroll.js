(function() {
  $("#intro-wrapper").click(function(event) {
    $("html, body").animate({
      scrollTop: $("#content-wrapper").offset().top
    }, 200);
    event.preventDefault();
  });
})();