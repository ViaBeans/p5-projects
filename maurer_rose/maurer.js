let d = 11;
let n = 9/d;
let k = n/d;
function setup() {
  createCanvas(1000, 1000);
  background(0);
  translate(500, 500);
}

function draw() {
  translate(width/2, height/2);
  stroke(255, 0, 0, 240);
  strokeWeight(4);
  noFill();
  background(0);
  //beginShape();
  //for(var theta = 0; theta <=360*d; theta++) {
  //  let angle = theta * PI/180;

  //  let r = 200 * cos(n * angle);
  //  let x = r * cos(angle);
  //  let y = r * sin(angle);
  //  vertex(x, y);
  //}
  //endShape();

  stroke(0, 255, 0);
  strokeWeight(2);
  noFill();
  beginShape();
  for(var theta = 0; theta <= 360; theta++) {
    let angle = theta * d * PI/180;
    let r = 200 * sin(n * angle);
    let x = r * sin(angle);
    let y = r * cos(angle);
    vertex(x, y);
  }
  endShape();
}
