function setup() {
  createCanvas( 600, 600);
  background(200);
}

function draw(){
background(200);


  for(var i = 0; i <3; i++){
 
    var offset = (100*i)+ 100;
    noStroke();
    fill( 255, 0, 0);
    push();
    rotate(mouseX/15, mouseY/15);
    rect(offset, 300, 20,20);
    pop();
  }
  
}