let n = 0;
let c = 2;
function setup() {
    createCanvas(1000, 1000);
    background(0);
    angleMode(DEGREES);
    colorMode(HSB);
}

function draw() {
    translate(500, 500);
    rotate(n * 0.3);
    let theta = 137.5 * n;
    let r = c * Math.sqrt(n);

    let point_x = r * cos(theta);
    let point_y = r * sin(theta);

    strokeWeight(4);
    stroke(n % 256,255,255);
    point(point_x, point_y);
    n+=5;
}
