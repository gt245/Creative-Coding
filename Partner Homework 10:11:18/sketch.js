var col = 0;
var xPos = 0;

function setup() {

	createCanvas(600,600);
	background(0);
	rectMode(CENTER);
	angleMode(DEGREES);
smooth();
    
  }

function draw() {

colR = map(mouseX,0,600,15,248);     //changing the background color
colG = map(mouseX,0,600,164,172);
colB = map(mouseX,0,600,230,218);
	background(colR,colG,colB);



	push(); 

	rectGrid();

	pop(); 



}

function rectGrid(){ 				//custom fucntioon

var size = map(mouseY, 0, 600, 2, 550);   //change size of the rectangles
var size2 = map(mouseY, 0, 600, 0, 550);
transparent = map(mouseX,0,600,200,0);    //adjust the transparency

rectMode(CENTER);

fill(120,77,134,transparent);
	stroke(255);


		for(var j=0; j < 3; j++){				//3 x 3 squares
			rotate(mouseX*radians(30));         //rotation
			var sizeX = (i*10);
			yPos = (j*100)+200;
	

		for(var i=0; i < 3; i++){
			rotate(mouseX*radians(30));
			var sizeY = (i*10);
			xPos = (i*100)+200;
			

			rect(xPos,yPos,size + 10,size2);     
		}
	}
}