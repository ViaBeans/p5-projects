let multiplier = 2;
function setup() {

  createCanvas(1000, 1000);
  background(0);
}

function draw() {

  translate(500, 500);
  background(255);
  strokeWeight(3);

  for(var i = 0; i < TWO_PI; i+=TWO_PI/200) {

    stroke(0,255,0, 0);
    strokeWeight(3);
    point(250*sin(i), 250*cos(i));

    strokeWeight(1);
    stroke(255, 0, 255, 50);
    line(250*cos(i), 250*sin(i), 250*cos(i*multiplier), 250*sin(i*multiplier));
  }

  multiplier+=0.01;
}
