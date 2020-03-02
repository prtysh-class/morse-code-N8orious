function setup() {
  createCanvas(550, 400);
}

function draw() {
  background(204,204,255);
  fill(255,255,255);
  beginShape(QUADS)
  vertex(0, 0);
  vertex(500, 0);
  vertex(500, 500);
  vertex(0, 400);
  circle(150,108,130);
  fill(255,255,153);
  stroke(255);
  circle(150,110,100);
  fill(255,255,255);
  circle(350,108,130);
  fill(255,255,153);
  stroke(255);
  circle(350,90,100);
  
  beginShape(QUADS);
vertex(350, 200);
vertex(350, 300);
vertex(150, 300);
vertex(150, 200);
  
  fill(255,255,255)
  
vertex(340, 200);
vertex(340, 250);
vertex(300, 250);
vertex(300, 200);
  
  vertex(290, 200);
vertex(290, 250);
vertex(230, 250);
vertex(230, 200);

endShape();
}