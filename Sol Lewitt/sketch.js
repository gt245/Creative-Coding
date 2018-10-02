var xPoint = [];
var y2Point = [];
var Points = 25;


function setup() {
  createCanvas(1000,800);
  background(255);
  noFill();
  stroke(0);
  rect(5,5,990,790);
  
  for(var i = 0; i < Points; i++) {
    xPoint[i] = random(-1300,2300);
    y2Point[i] = random(100,700);
  
  }
}

function draw() { 
  stroke(0);
  for(var i = 0; i < Points; i++) {
    for(var j = i; j < Points; j++) {
      line(xPoint[i], y2Point[i], xPoint[j], -200);
      stroke(0);
      strokeWeight(random(0.1,1));
      point(xPoint, y2Point);
    }
  }
  noLoop();
}