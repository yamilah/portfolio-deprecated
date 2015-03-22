record();
reset();
hide();
speed(0);

$("#button-save").on("click",function() {
    downloadRecording();
});

$("#button-replay").on("click",function() {
    replay();
});

var drawing = false;
var tool = "pen";

$(document).on("mousedown",function(e) {
    e.preventDefault();
    moveTo(e.pageX,e.pageY);
    if(tool == "pen") { 
        drawing = true;
    }
    else if(tool == "meatball") {
        meatball();
    }
    else if(tool == "wave") {
        wave();
    }
});

$(document).on("mousemove",function(e) {
    e.preventDefault();
    if(drawing) {
        lineTo(e.pageX,e.pageY);
    }
});

$(document).on("mouseup",function(e) {
    e.preventDefault();
    drawing = false;
});

$(".tool").on("click",function(e) {
    $(".selected").removeClass("selected");
    $(this).addClass("selected");
    tool = this.id.slice(7);
});

$(".color").on("click",function(e) {
    lineColor(this.id);
});

$(".width").on("click",function(e) {
    lineWidth(this.id.slice(12));
    console.log(this.id.slice(12));
});

function meatball() {
    angle(0);
    for(var i = 0; i < 300; i++) {
        rotate(5);
        forward(i/100);
    }
}

function wave() {
    angle(0);
    rotate(60);
    forward(50);
    rotate(60);
    forward(50);
}
