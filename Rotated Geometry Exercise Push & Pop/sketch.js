function setup() {
  createCanvas( 800, 500);
  background(200);
}

function draw(){

push();
translate(200,200);//translate first then rotate
  rotate(PI/4);
   fill(0,0,255);

  rect(0,0,60,60);

  pop(); 

  push();
translate(400,300);//translate first then rotate
  rotate(PI/9);
   fill(0,255,0);

  rect(0,0,30,60);

  pop();

  push();
translate(700,100);//translate first then rotate
  rotate(PI/1.8);
   fill(255,0,0);

  rect(0,0,50,90);

  pop();
}