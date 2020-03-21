let t = 0;
let theta = 0;
function setup() {
    createCanvas(1000, 1000);
    background(0);
}

function draw() {
    background(0);
    translate(400, 500);
    stroke(255);
    strokeWeight(2);
    for(var angle = 0; angle <= TWO_PI; angle += PI/theta) {
        for(var t = -3; t <= 3; t+=PI/900) {
            stroke(255);
            line(x_rot(t, angle), y_rot(t, angle), x_rot(t+PI/1000, angle), y_rot(t+PI/1000, angle));
        }
    }
    if(theta < 10) {
        theta+=0.4;
    }
}

x = (t) => {
    return 30*(4*sin(7.24*t/3)/(0.3+sin(t)*sin(t)));
}

y = (t) => {
    return 30*(7*cos(t)*Math.pow(sin(7.24*t), 4));
}

x_rot = (t, theta) => {
    return x(t) * cos(theta) - y(t)*sin(theta);
}

y_rot = (t, theta) => {
    return x(t) * sin(theta) + y(t)*cos(theta); 
}