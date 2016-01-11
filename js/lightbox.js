$(document).ready(function() {
  $(".fade-wrapper").click(function() {
    $("#lightbox-" + this.id).show();
  })
  
  $(".black-overlay").click(function() {
    $(this.parentElement).hide();
  })
  
  $(".lightbox-position-wrapper").click(function() {
    $(this).hide();
  })
});    
