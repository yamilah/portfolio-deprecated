Logoish.init();

var colors = ["#1DB7CF", "#E03D24"];

speed(0);
lineWidth(15);

function arch() {
    angle(0);
    forward(50);
    rotate(60);
    forward(25);
    rotate(300);
    forward(50);

    rotate(60);
    forward(25);
    rotate(300);
    forward(50);

    rotate(180);
    forward(50);
    rotate(300);
    forward(25);

    rotate(60);
    forward(50);
    rotate(300);
    forward(25);

    rotate(60);
    forward(50);
}

for(var archLoop = 0; archLoop < 10; archLoop++) {
    moveTo(10,archLoop*74+180);
    lineColor(colors[archLoop%2]);
    for(var archIndex = 0; archIndex < 10; archIndex++) {
        arch();
    }
}
