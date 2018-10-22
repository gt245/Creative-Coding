


function setup() {

	createCanvas(600,600);
	background(255);
	
    
  }

  function draw() {

	noStroke();
	fill(3,200,178);
	ellipse(300,300, 80,80);

	fill(3,200,178, 255);
	rect(200,400,130,130);
	rect(400,400,130,130);
	rect(550,400,130,130);

}

  function preload(){
  	
  }

   function mousePressed(){
	var d= dist(mouseX, mouseY, 265, 465);
	if (d < 65) {
		fill(200,180,20, 255);
		rect(400,100,90,130);
		
	} 
}


function mousePressed(){
	var d= dist(mouseX, mouseY, 465, 465);
	if (d < 65) {
		fill(300,180,20, 255);
		rect(100,200,90,130);
		
	} 
}

function mousePressed(){
	var d= dist(mouseX, mouseY, 515, 465);
	if (d < 65) {
		fill(200,180,120, 255);
		rect(300,200,90,130);
		
	} 
}






