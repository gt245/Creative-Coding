var xPoint = [];
var y2Point = [];
var Points = 40;


function setup() {
  createCanvas(1000,800);
  background(255);
  noFill();
  stroke(0);
  rect(5,5,990,790);
  
  for(var i = 0; i < Points; i++) {
    xPoint[i] = random(1000);
    y2Point[i] = random(800);
  
  }
}

function draw() { 
  stroke(0);
  for(var i = 0; i < Points; i++) {
    for(var j = i; j < Points; j++) {
      line(xPoint[i], y2Point[i], xPoint[j], y2Point[j]);
      stroke(0);
      strokeWeight(random(0.1, 0.3));
      point(xPoint, y2Point);
    }
  }
  noLoop();
}