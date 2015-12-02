Logoish.init();

speed(0);
lineWidth(8);

function archUnit() {
    angle(0);
    rotate(180);
    forward(100);
    
    rotate(-60);
    forward(50);
    
    rotate(60);
    forward(100);
    
    rotate(-180);
    forward(100);
    
    rotate(60);
    forward(50);
    
    rotate(-60);
    forward(100);
}

for(var archLoop = 0; archLoop < 5; archLoop++) {
    moveTo(20,archLoop*150);
    for(var archIndex = 0; archIndex < 10; archIndex++) {
        archUnit();
    }
}

function middleUnit() {
    angle(0);
    rotate(120);
    forward(25);
    
    rotate(60);
    forward(100);
    
    rotate(-60);
    forward(25);

    rotate(-60);
    forward(25);
    
    rotate(-60);
    forward(100);
    
    rotate(60);
    forward(25);
}

for(var middleLoop = 0; middleLoop < 5; middleLoop++) {
    moveTo(20,middleLoop*150+125);
    for(var middleIndex = 0; middleIndex < 10; middleIndex++) {
        middleUnit();
    }
}
