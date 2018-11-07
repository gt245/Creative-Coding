var jar;

var spots = [];
var dot = [];

var first;
var second;
var third;
var fourth;

var firefly1;
var firefly2;
var firefly3;
var firefly4;
var firefly5;


var bfirefly6;
var bfirefly7;
var bfirefly8;
var bfirefly9;
var bfirefly10;

var mylight;



function preload(){

	jar = loadImage("assets/jar.png")  //image
	first = loadSound("assets/1.m4a")			//noises
	second = loadSound("assets/2.m4a")
	third = loadSound("assets/3.m4a")
	fourth = loadSound("assets/4.m4a")


}

function setup() {

  createCanvas(700,700);

  firefly1 = new firefly(230, 270, 1, 4, 30); //Green set
  firefly2 = new firefly(390, 460, 2, 2, 50);
  firefly3 = new firefly(420, 530, 3, 1, 40);
  firefly4 = new firefly(260, 320, 1, 3, 30);
  firefly5 = new firefly(390, 290, 2, 1, 50);

  bfirefly6 = new bfirefly(450, 450, 3, 2, 15);  //Yellow Set
  bfirefly7 = new bfirefly(230, 230, 3, 1, 20);
  bfirefly8 = new bfirefly(300, 260, 2, 2, 12);
  bfirefly9 = new bfirefly(420, 400, 1, 3, 13);
  bfirefly10 = new bfirefly(360, 380, 1, 2,14);

  mylight = new light(350,350, 100);   //White Light

  fill('rgba(100%,100%,100%,0.3)');  //Stars
				
	for (var i=0; i<50;i++)
	{
	for (var i=0; i<50; i++) {
	spots.push(new stars());
		}
	}	
    
}



function draw() {
  background(41, 65, 81);

  stroke(0,0,0,0);  		//stars
					
				for (var i=0; i<spots.length; i++) {
					spots[i].display();
				}
				
			for (i=0; i<dot.length; i++)
				{
					push();
					dot[i].display();
					pop();
				}
				
			
			

  image(jar, 170,50);

  firefly1.move();
  firefly1.display();

  firefly2.move();
  firefly2.display();

  firefly3.move();
  firefly3.display();

  firefly4.move();
  firefly4.display();

  firefly5.move();
  firefly5.display();

  bfirefly6.move();
  bfirefly6.display();

  bfirefly7.move();
  bfirefly7.display();

  bfirefly8.move();
  bfirefly8.display();

  bfirefly9.move();
  bfirefly9.display();

  bfirefly10.move();
  bfirefly10.display();

  mylight.move();
  mylight.display();

  						//Playing music when the fireflies intersect

   if( dist(firefly1.x, firefly1.y, bfirefly6.x, bfirefly6.y) < 5 || dist(firefly1.x, firefly1.y, bfirefly7.x, bfirefly7.y) < 5|| 
   	dist(firefly1.x, firefly1.y, bfirefly8.x, bfirefly8.y) < 5 || dist(firefly1.x, firefly1.y, bfirefly9.x, bfirefly9.y) < 5||
   	dist(firefly1.x, firefly1.y, bfirefly10.x, bfirefly10.y) < 5 ){
    
   		first.play();
      console.log("collision");
    }

if( dist(firefly2.x, firefly2.y, bfirefly6.x, bfirefly6.y) < 5 || dist(firefly2.x, firefly2.y, bfirefly7.x, bfirefly7.y) < 5|| 
   	dist(firefly2.x, firefly2.y, bfirefly8.x, bfirefly8.y) < 5 || dist(firefly2.x, firefly2.y, bfirefly9.x, bfirefly9.y) < 5||
   	dist(firefly2.x, firefly2.y, bfirefly10.x, bfirefly10.y) < 5 ){
    
	first.play();
      console.log("collision");
    }

if( dist(firefly3.x, firefly2.y, bfirefly6.x, bfirefly6.y) < 5 || dist(firefly3.x, firefly2.y, bfirefly7.x, bfirefly7.y) < 5|| 
   	dist(firefly3.x, firefly2.y, bfirefly8.x, bfirefly8.y) < 5 || dist(firefly3.x, firefly2.y, bfirefly9.x, bfirefly9.y) < 5||
   	dist(firefly3.x, firefly2.y, bfirefly10.x, bfirefly10.y) < 5 ){
    
	first.play();
      console.log("collision");
    }

if( dist(firefly4.x, firefly2.y, bfirefly6.x, bfirefly6.y) < 5 || dist(firefly4.x, firefly2.y, bfirefly7.x, bfirefly7.y) < 5|| 
   	dist(firefly4.x, firefly2.y, bfirefly8.x, bfirefly8.y) < 5 || dist(firefly4.x, firefly2.y, bfirefly9.x, bfirefly9.y) < 5||
   	dist(firefly4.x, firefly2.y, bfirefly10.x, bfirefly10.y) < 5 ){
    
	first.play();
      console.log("collision");
    }

if( dist(firefly5.x, firefly2.y, bfirefly6.x, bfirefly6.y) < 5 || dist(firefly5.x, firefly2.y, bfirefly7.x, bfirefly7.y) < 5|| 
   	dist(firefly5.x, firefly2.y, bfirefly8.x, bfirefly8.y) < 5 || dist(firefly5.x, firefly2.y, bfirefly9.x, bfirefly9.y) < 5||
   	dist(firefly5.x, firefly2.y, bfirefly10.x, bfirefly10.y) < 5 ){
    
	first.play();
      console.log("collision");
    }



}

function firefly(myX, myY, myXVel, myYVel, mySize){					//Green Set of Fireflies properties

  this.x = myX;
  this.y = myY;



  this.size = mySize;
  this.sizeStep = 1;

   this.xvel = myXVel;
  this.yvel = myYVel;





  this.move = function(){
    this.x += this.xvel;
     if(this.x<=200 || this.x >= 500){
    

      this.xvel *= -1;
      second.play();
    }



    this.y += this.yvel;

    
    if(this.y<=250 || this.y >= 550){
    

      this.yvel *= -1;
    }

    this.size += this.sizeStep;
    if(this.size >= 70 || this.size <= 10){
      this.sizeStep *= -1;
    }

  }

  this.display = function(){

    noStroke();

    fill(213,255,163);
    ellipse(this.x, this.y, this.size, this.size);

  }


};



function bfirefly(myX, myY, myXVel, myYVel, mySize){				//Yellow Set of Fireflies properties

  this.x = myX;
  this.y = myY;



  this.size = mySize;
  this.sizeStep = 1;

   this.xvel = myXVel;
  this.yvel = myYVel;





  this.move = function(){
    this.x += this.xvel;
     if(this.x <= 200 || this.x >= 500){
    

      this.xvel *= -1;
      third.play();
    }



    this.y += this.yvel;

    
    if(this.y<=250 || this.y >= 550){
    

      this.yvel *= -1;
    }

    this.size += this.sizeStep;
    if(this.size >= 30 || this.size <= 5){
      this.sizeStep *= -1;
    }

  }

  this.display = function(){

    noStroke();

    fill(255,243,143);
    ellipse(this.x, this.y, this.size, this.size);

  }


};

function stars(){								//Stars properties

			
			this.x = random(width);
			this.y = random(height);
			
				var lum= 100;
			this.display = function() {
			
			
				if ( lum >= 200)
				{
					lum = lum - 10;
				}
				
				if( lum >= 100)
				{
					lum = lum + 10;
				}
			
				fill(255,lum);
				rect(this.x, this.y, 3, 3);
				};
				
				
			}

function light(myX, myY, mySize){ 			//Growing/Diminishing Light


  this.x = myX;
  this.y = myY;



  this.size = mySize;
  this.sizeStep = 8;


  this.move = function(){
   
    this.size += this.sizeStep;
    if(this.size >= 700 || this.size <= 30){
      this.sizeStep *= -1;
    }

    if(this.size == 700 ){
      fourth.play();
      console.log("big");
    }

  }

  this.display = function(){

    noStroke();

    fill(255,255,255, 60);
    ellipse(this.x, this.y, this.size, this.size);

  }


};


