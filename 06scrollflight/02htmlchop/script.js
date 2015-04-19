// Litens for all elements with class "scrolling"
$(".scrolling").scrollFlight();

// Down: Add a class of onPage when #poemBgX arrives
$("#poemBg1").on("arriving",function(e) {
    $(this).addClass("onPage");
});

$("#poemBg2").on("arriving",function(e) {
    $(this).addClass("onPage");
});

$("#poemBg3").on("arriving",function(e) {
    $(this).addClass("onPage");
});

$("#poemBg4").on("arriving",function(e) {
    $(this).addClass("onPage");
});

$("#poemBg5").on("arriving",function(e) {
    $(this).addClass("onPage");
});

$("#poemBg6").on("arriving",function(e) {
    $(this).addClass("onPage");
});

$("#poemBg7").on("arriving",function(e) {
    $(this).addClass("onPage");
});

$("#poemBg8").on("arriving",function(e) {
    $(this).addClass("onPage");
});

// Remove class of onPage, add offPage when #poemBgX departs
$("#poemBg1").on("departing",function(e) {
    $(this).removeClass("onPage");
});

$("#poemBg2").on("departing",function(e) {
    $(this).removeClass("onPage");
});

$("#poemBg3").on("departing",function(e) {
    $(this).removeClass("onPage");
});

$("#poemBg4").on("departing",function(e) {
    $(this).removeClass("onPage");
});

$("#poemBg5").on("departing",function(e) {
    $(this).removeClass("onPage");
});

$("#poemBg6").on("departing",function(e) {
    $(this).removeClass("onPage");
});

$("#poemBg7").on("departing",function(e) {
    $(this).removeClass("onPage");
});

//$("#poemBg8").on("departing",function(e) {
//    $(this).removeClass("onPage");
//});

// Up: Remove class of offPage, add onPage when #poemBgX rearrives
$("#poemBg1").on("rearriving",function(e) {
    $(this).addClass("onPage");
});

$("#poemBg2").on("rearriving",function(e) {
    $(this).addClass("onPage");
});

$("#poemBg3").on("rearriving",function(e) {
    $(this).addClass("onPage");
});

$("#poemBg4").on("rearriving",function(e) {
    $(this).addClass("onPage");
});

$("#poemBg5").on("rearriving",function(e) {
    $(this).addClass("onPage");
});

$("#poemBg6").on("rearriving",function(e) {
    $(this).addClass("onPage");
});

$("#poemBg7").on("rearriving",function(e) {
    $(this).addClass("onPage");
});

$("#poemBg8").on("rearriving",function(e) {
    $(this).addClass("onPage");
});

// Remove class of offPage, add onPage when #poemBgX redeparts
$("#poemBg2").on("redeparting",function(e) {
    $(this).removeClass("onPage");
});

$("#poemBg3").on("redeparting",function(e) {
    $(this).removeClass("onPage");
});

$("#poemBg4").on("redeparting",function(e) {
    $(this).removeClass("onPage");
});

$("#poemBg5").on("redeparting",function(e) {
    $(this).removeClass("onPage");
});

$("#poemBg6").on("redeparting",function(e) {
    $(this).removeClass("onPage");
});

$("#poemBg7").on("redeparting",function(e) {
    $(this).removeClass("onPage");
});

$("#poemBg8").on("redeparted",function(e) {
    $(this).removeClass("onPage");
});
