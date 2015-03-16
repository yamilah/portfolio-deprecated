Logoish.init();
speed(0);

function square() {
    for (var i = 0; i < 4; i++) {
        forward(150);
        rotate(89.8);
    }
    rotate(15);
}

move(150, -150);

for (var j = 0; j < 60; j++) {
    for (var i = 0; i < 19; i++) {
        square();
    }
    forward(250);
}
