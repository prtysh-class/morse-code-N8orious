function setup() {
  createCanvas(700, 500);
}

function draw() {
  let z = random(255);
  noStroke();
  background(0);
  
  beginShape();
  
  let spacing = map(mouseX, 0, width, 40, 550);
  if(spacing  > 50){
  fill(153, 51, 255);}
  
  if(spacing > 75){
    fill(255, 255, 0);}
  
  if(spacing > 150){
    fill(255, 0, 0);}
  
  if(spacing > 225){
    fill(255, 0, 255);}
  
  if(spacing > 300){
    fill(51, 255, 51);}
  
  if(spacing > 375){
    fill(102, 255, 255);}
  
  if(spacing > 450){
    fill(0);}
  
  
  
  

  ellipse(250, 250, spacing);
    endShape(CLOSE);
}
