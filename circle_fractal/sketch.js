function setup() {
  createCanvas(1000, 1000);
  background(0);
}

function draw() {
    background(0);
    drawCircle(500, 500, 500);
}

drawCircle = (x, y, r) => {
    noFill();
    stroke(255);
    ellipse(x, y, r, r);
    if(r > 1) {
        drawCircle(x-r/3, y-r/3, r/2);
        drawCircle(x+r/3, y+r/3, r/2);
    }
}