var myData;

var circle1;
var circle2;
var circle3;
var circle4;
var circle5;
var circle6;

function preload(){
	myData = loadJSON("assets/school.json");
}

function setup(){
	createCanvas(2000,2000);

	circle1 = new circle(50, 600, 8, 10); 
  circle2 = new circle(140, 690, 8, 10);
  circle3 = new circle(230, 780, 20, 25);
  circle4 = new circle(320, 870, 25, 30);
  circle5 = new circle(410, 960, 30, 40);
  circle6 = new circle(500, 1050, 1000, 1440);


}

function draw(){

	for(var i = 0; i < myData.SchoolShootings.length; i++){
		var countryName = myData.SchoolShootings[i].name;
		var Snumber = myData.SchoolShootings[i].number;
		var offset = 90;
		var scaleData = 5;
		var colorChange = 40;
		var color = (255, 182, 203, 30);

		noFill();
		noStroke();
		fill(10+ 40 *i, 50, 255 - 40*i, 70- i *13.5);
		ellipse(i *offset + 50,  i *offset +600, Snumber* scaleData, Snumber* scaleData);

		fill(255);
		textSize(25 + i);
		text(countryName, i*offset + 25, i *offset + 550,100,200);

	

		textSize(40);
		text("Number of School Shootings from 2009-2018", 500, 600,500,200);

	}
	circle1.move();
  circle1.display();

  circle2.move();
  circle2.display();

  circle3.move();
  circle3.display();

  circle4.move();
  circle4.display();

  circle5.move();
  circle5.display();

  circle6.move();
  circle6.display();


}

function circle(myX, myY, mySize, myBig){
	background(252,184, 184,70);
	this.x = myX;
  this.y = myY;



  this.size = mySize;
  this.sizeStep = 8;


  this.move = function(){
   
    this.size += this.sizeStep;
    if(this.size >= myBig || this.size <= 5){
      this.sizeStep *= -1;
    }


  }

  this.display = function(){

    
    stroke(255,255,255,50);

    noFill();
    ellipse(this.x, this.y, this.size, this.size);

  }


};
