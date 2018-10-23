var myImage;
var x = 1;
var y = 1;
var easing = 0.05;
var RcolorValue = 255;
var GcolorValue = 255;
var BcolorValue = 255;
function preload(){

	myImage = loadImage("assets/228623-676x450-ballet-dancer-practicing.jpg")
}

function setup() {

	createCanvas(900,600);
	background('#153254');
	
    
  }




function draw() {   

	

	if (keyIsPressed && key == '1'){
		background('#153254');
	
		noStroke();
		fill(237, 161, 187);
		rect(0,0, 300, 600);
		 fill(255, 255, 255);
        ellipse(150,200,80,80);
       	fill(255, 255, 255);
        ellipse(150,300,90,150);
        
       //hair
       push();
       translate(95, 200);
       rotate(frameCount / 50.0);
        fill(50,40,20);
        rect(0,0,30,30);
		pop();


		push();
		translate(200,200);//translate first then rotate
  		rotate(frameCount / 50.0);
   		fill(50,40,20);

  		rect(0,0,30,30);

  		pop(); 

  	

		//tv

		fill(0); 
		rect(100, 450, 100, 80);




    }

    if (keyIsPressed && key == 'o'){
    	image(myImage, 110,460, 80, 60);
    }




    if (keyIsPressed && key == '2'){
    	background('#153254');
	
		noStroke();
		fill(243, 210, 77); 
		rect(300,0, 300, 600);
		fill(255, 255, 255);
        ellipse(420,170,85,85);
       	fill(255, 255, 255);
        ellipse(450,300,90,190);
        
       stroke(255);
         strokeWeight(10);
        line(450, 300, 350, 180);

        
       //hair
       noStroke();
      
        fill(50,40,20);
        triangle(365, 170, 330, 200, 310, 140);
		triangle(470, 170, 520, 200, 510, 140);
		fill(122,191, 198);

		 var targetX = mouseX;
    var dx = targetX - x;
    x += dx * easing;

    var targetY = mouseY;
    var dy = targetY - y;
    y += dy * easing;

    ellipse(x,y,66,66);


    }
	
	if (keyIsPressed && key == '3'){
		background('#153254');
	
		noStroke();
		fill(243, 210, 77); 
		rect(300,0, 300, 600);
		fill(255, 255, 255);
        ellipse(480,170,85,85);
       	fill(255, 255, 255);
        ellipse(450,300,90,190);

         stroke(255);
         strokeWeight(10);
        line(450, 300, 550, 180);
        
       //hair
       noStroke();
        fill(50,40,20);
        triangle(425, 170, 390, 200, 370, 140);
		triangle(530, 170, 580, 200, 570, 140);
		fill(122,191, 198);
		 var targetX = mouseX;
    var dx = targetX - x;
    x += dx * easing;

    var targetY = mouseY;
    var dy = targetY - y;
    y += dy * easing;
    line(x+66, y+66, 33, 33)
    ellipse(x,y,66,66);



    }

	if (keyIsPressed && key == '4'){
		background('#153254');
	
		noStroke();

		fill(143, 193, 142); 
		rect(600,0, 300, 600);
		fill(RcolorValue, GcolorValue, BcolorValue);
       	triangle(750, 180, 590, 400, 810, 500);
		fill(50,40,20);
        ellipse(720,160,50,50);
		fill(255, 255, 255);
        ellipse(770,160,85,85);
       	

       	 stroke(255);
         strokeWeight(10);
        line(750, 240, 600, 210);
        stroke(255);
         strokeWeight(10);
        line(750, 250, 870, 160);
         stroke(255);
         strokeWeight(10);
        line(650, 400, 550, 550);
        line(780, 400, 830, 590);

      

        
        }

        if (keyIsPressed && key == '5') {
        RcolorValue = random(0,255);
        GcolorValue = random(0,255);
        BcolorValue = random(0,255);
        background('#153254');
	
		noStroke();

		fill(143, 193, 142); 
		rect(600,0, 300, 600);
		fill(RcolorValue, GcolorValue, BcolorValue);
       	triangle(750, 180, 590, 400, 810, 500);
		fill(50,40,20);
        ellipse(720,160,50,50);
		fill(255, 255, 255);
        ellipse(770,160,85,85);
       	

       	 stroke(255);
         strokeWeight(10);
        line(750, 240, 600, 210);
        stroke(255);
         strokeWeight(10);
        line(750, 250, 870, 160);
         stroke(255);
         strokeWeight(10);
        line(650, 400, 550, 550);
        line(780, 400, 830, 590);

    
		}
	

	

}


function setGradient(x, y, w, h, c1, c2, axis) {

  noFill();

  if (axis == Y_AXIS) {  // Top to bottom gradient
    for (var i = y; i <= y+h; i++) {
      var inter = map(i, y, y+h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x+w, i);
    }
  }  
  else if (axis == X_AXIS) {  // Left to right gradient
    for (var i = x; i <= x+w; i++) {
      var inter = map(i, x, x+w, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y+h);
    }
  }
}





