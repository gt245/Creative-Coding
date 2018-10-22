function setup() {

	createCanvas(600,600);
	background(0);
	
    
  }

  function preload(){
  	
  }



function draw() {

	noStroke();
	fill(3,200,178);
	ellipse(140,200, 80,80);
	rect(300,400,130,130);

}


  function mousePressed(){
	var d= dist(mouseX, mouseY, 365, 465);
	if (d < 65) {
		fill(200,180,20);
		rect(400,400,90,130);
	} 
}


