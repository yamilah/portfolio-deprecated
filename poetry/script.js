// Litens for all elements with class "scrolling"
$(".scrolling").scrollFlight();

// Down: Add a class of onPage when #poemBgX arrives
$("#poemBg1").on("arriving", function (e) {
    $(this).addClass("onPage");
});

$("#poemBg2").on("arriving", function (e) {
    $(this).addClass("onPage");
});

$("#poemBg3").on("arriving", function (e) {
    $(this).addClass("onPage");
    $(this).addClass("onPage");
});

$("#poemBg4").on("arriving", function (e) {
    $(this).addClass("onPage");
});

$("#poemBg5").on("arriving", function (e) {
    $(this).addClass("onPage");
});

$("#poemBg6").on("arriving", function (e) {
    $(this).addClass("onPage");
});

$("#poemBg7").on("arriving", function (e) {
    $(this).addClass("onPage");
});

$("#poemBg8").on("arriving", function (e) {
    $(this).addClass("onPage");
});

// Remove class of onPage when #poemBgX departs
$("#poemBg1").on("departing", function (e) {
    $(this).removeClass("onPage");
});

$("#poemBg2").on("departing", function (e) {
    $(this).removeClass("onPage");
});

$("#poemBg3").on("departing", function (e) {
    $(this).removeClass("onPage");
});

$("#poemBg4").on("departing", function (e) {
    $(this).removeClass("onPage");
});

$("#poemBg5").on("departing", function (e) {
    $(this).removeClass("onPage");
});

$("#poemBg6").on("departing", function (e) {
    $(this).removeClass("onPage");
});

$("#poemBg7").on("departing", function (e) {
    $(this).removeClass("onPage");
});

// Up: Remove class of offPage when #poemBgX rearrives
$("#poemBg1").on("rearriving", function (e) {
    $(this).addClass("onPage");
});

$("#poemBg2").on("rearriving", function (e) {
    $(this).addClass("onPage");
});

$("#poemBg3").on("rearriving", function (e) {
    $(this).addClass("onPage");
});

$("#poemBg4").on("rearriving", function (e) {
    $(this).addClass("onPage");
});

$("#poemBg5").on("rearriving", function (e) {
    $(this).addClass("onPage");
});

$("#poemBg6").on("rearriving", function (e) {
    $(this).addClass("onPage");
});

$("#poemBg7").on("rearriving", function (e) {
    $(this).addClass("onPage");
});

$("#poemBg8").on("rearriving", function (e) {
    $(this).addClass("onPage");
});

// Remove class of offPage when #poemBgX redeparts
$("#poemBg2").on("redeparting", function (e) {
    $(this).removeClass("onPage");
});

$("#poemBg3").on("redeparting", function (e) {
    $(this).removeClass("onPage");
});

$("#poemBg4").on("redeparting", function (e) {
    $(this).removeClass("onPage");
});

$("#poemBg5").on("redeparting", function (e) {
    $(this).removeClass("onPage");
});

$("#poemBg6").on("redeparting", function (e) {
    $(this).removeClass("onPage");
});

$("#poemBg7").on("redeparting", function (e) {
    $(this).removeClass("onPage");
});

$("#poemBg8").on("redeparted", function (e) {
    $(this).removeClass("onPage");
});

// Add class of activePoem when arrives
$("#poemBg1").on("arriving", function (e) {
    $("#pma1").addClass("activePoem");
});

$("#poemBg2").on("arriving", function (e) {
    $("#pma2").addClass("activePoem");
});

$("#poemBg3").on("arriving", function (e) {
    $("#pma3").addClass("activePoem");
});

$("#poemBg4").on("arriving", function (e) {
    $("#pma4").addClass("activePoem");
});

$("#poemBg5").on("arriving", function (e) {
    $("#pma5").addClass("activePoem");
});

$("#poemBg6").on("arriving", function (e) {
    $("#pma6").addClass("activePoem");
});

$("#poemBg7").on("arriving", function (e) {
    $("#pma7").addClass("activePoem");
});

$("#poemBg8").on("arriving", function (e) {
    $("#pma8").addClass("activePoem");
});

// Remove class of activePoem when departs
$("#poemBg1").on("departing", function (e) {
    $("#pma1").removeClass("activePoem");
});

$("#poemBg2").on("departing", function (e) {
    $("#pma2").removeClass("activePoem");
});

$("#poemBg3").on("departing", function (e) {
    $("#pma3").removeClass("activePoem");
});

$("#poemBg4").on("departing", function (e) {
    $("#pma4").removeClass("activePoem");
});

$("#poemBg5").on("departing", function (e) {
    $("#pma5").removeClass("activePoem");
});

$("#poemBg6").on("departing", function (e) {
    $("#pma6").removeClass("activePoem");
});

$("#poemBg7").on("departing", function (e) {
    $("#pma7").removeClass("activePoem");
});

$("#poemBg8").on("departing", function (e) {
    $("#pma8").removeClass("activePoem");
});

// Add class of activePoem when rearrives
$("#poemBg1").on("rearriving", function (e) {
    $("#pma1").addClass("activePoem");
});

$("#poemBg2").on("rearriving", function (e) {
    $("#pma2").addClass("activePoem");
});

$("#poemBg3").on("rearrived", function (e) {
    $("#pma3").addClass("activePoem");
});

$("#poemBg4").on("rearriving", function (e) {
    $("#pma4").addClass("activePoem");
});

$("#poemBg5").on("rearriving", function (e) {
    $("#pma5").addClass("activePoem");
});

$("#poemBg6").on("arriving", function (e) {
    $("#pma6").addClass("activePoem");
});

$("#poemBg7").on("rearriving", function (e) {
    $("#pma7").addClass("activePoem");
});

$("#poemBg8").on("rearriving", function (e) {
    $("#pma8").addClass("activePoem");
});

// Remove class of activePoem when redeparts
$("#poemBg1").on("redeparting", function (e) {
    $("#pma1").removeClass("activePoem");
});

$("#poemBg2").on("redeparting", function (e) {
    $("#pma2").removeClass("activePoem");
});

$("#poemBg3").on("redeparting", function (e) {
    $("#pma3").removeClass("activePoem");
});

$("#poemBg4").on("redeparting", function (e) {
    $("#pma4").removeClass("activePoem");
});

$("#poemBg5").on("redeparting", function (e) {
    $("#pma5").removeClass("activePoem");
});

$("#poemBg6").on("redeparting", function (e) {
    $("#pma6").removeClass("activePoem");
});

$("#poemBg7").on("redeparting", function (e) {
    $("#pma7").removeClass("activePoem");
});

$("#poemBg8").on("redeparted", function (e) {
    $("#pma8").removeClass("activePoem");
});
