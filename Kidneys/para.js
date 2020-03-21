let t = 0;
function setup() {
    createCanvas(1000, 1000);
    background(0);
}

function draw() {
    translate(500, 500);
    stroke(255);
    strokeWeight(1);
    line(x(t), y(t), x(t+PI/1000), y(t+PI/1000));
    t+=PI/1000;
}

x = (t) => {
    return 100*(2*cos(t) + sin(2*t) * cos(60*t));
}

y = (t) => {
    return 100*(sin(2*t) + sin(60*t));
}