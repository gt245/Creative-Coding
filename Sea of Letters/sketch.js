var background;
var light1;
var light2;
var light3;
var light4;
var light5;


var blight6;
var blight7;
var blight8;
var blight9;
var blight10;

var myString = "";

var myFont;


function preload(){

	background = loadImage("assets/mountain.jpg") 
  myFont = loadFont("assets/Santiago.otf")

}

function setup() {


  createCanvas(window.innerWidth, window.innerHeight);


  light1 = new light(window.innerWidth/2, window.innerHeight/2, 1, 4, 14);
  light2 = new light(window.innerWidth/2, window.innerHeight/2, -2, -2, 23);
  light3 = new light(window.innerWidth/2, window.innerHeight/2, 3, 1, 5);
  light4 = new light(window.innerWidth/2, window.innerHeight/2, 1, -3, 10);
  light5 = new light(window.innerWidth/2, window.innerHeight/2, -2, 1, 20);

  blight6 = new blight(window.innerWidth/2, window.innerHeight/2, 3, 2, 10);  
  blight7 = new blight(window.innerWidth/2, window.innerHeight/2, -3, 1, 5);
  blight8 = new blight(window.innerWidth/2, window.innerHeight/2, 2, -2, 12);
  blight9 = new blight(window.innerWidth/2, window.innerHeight/2, 1, -3, 9);
  blight10 = new blight(window.innerWidth/2, window.innerHeight/2, -1, 2,7);
    
}


function draw(){

    image(background,0,0,window.innerWidth, window.innerHeight);



  light1.move();
  light1.display();

  light2.move();
  light2.display();

  light3.move();
  light3.display();

  light4.move();
  light4.display();

  light5.move();
  light5.display();

  blight6.move();
  blight6.display();

  blight7.move();
  blight7.display();

  blight8.move();
  blight8.display();

  blight9.move();
  blight9.display();

  blight10.move();
  blight10.display();

letter();
  


}

function letter(){
  noStroke();
  fill(255);
  rect(window.innerWidth/4, 200, window.innerWidth/2, window.innerHeight);
  textFont(myFont);
  textSize(100);
  text("Write a letter to your future self...", window.innerWidth/3.7, 150);


  push();
  fill(0);
  textFont(myFont);
  textSize(70);
  text(myString, window.innerWidth/3.5, 330, window.innerWidth/2.5);
  pop();


}

function keyPressed(){
  myString += key;
}

function light(myX, myY, myXVel, myYVel, mySize){          

  this.x = myX;
  this.y = myY;



  this.size = mySize;
  this.sizeStep = 1/4;

   this.xvel = myXVel;
  this.yvel = myYVel;





  this.move = function(){
    this.x += this.xvel;
     if(this.x<=0 || this.x >= window.innerWidth){
    

      this.xvel *= -1;
    
    }



    this.y += this.yvel;

    
    if(this.y<=0 || this.y >= window.innerHeight){
    

      this.yvel *= -1;
    }

    this.size += this.sizeStep;
    if(this.size >= 30 || this.size <= 5){
      this.sizeStep *= -1;
    }

  }

  this.display = function(){

    noStroke();

    fill(255,255, 255, 80);
    ellipse(this.x, this.y, this.size, this.size);

  }


};



function blight(myX, myY, myXVel, myYVel, mySize){       

  this.x = myX;
  this.y = myY;



  this.size = mySize;
  this.sizeStep = 1/4;

   this.xvel = myXVel;
  this.yvel = myYVel;





  this.move = function(){
    this.x += this.xvel;
     if(this.x <= 0 || this.x >= window.innerWidth){
    

      this.xvel *= -1;
 
    }



    this.y += this.yvel;

    
    if(this.y<=0 || this.y >= window.innerHeight){
    

      this.yvel *= -1;
    }

    this.size += this.sizeStep;
    if(this.size >= 15 || this.size <= 5){
      this.sizeStep *= -1;
    }

  }

  this.display = function(){

    noStroke();

    fill(255,243,143,80);
    ellipse(this.x, this.y, this.size, this.size);

  }


};

