let timer = 2628000
var seeletter = new Boolean(true);
var movingLanterns = new Boolean(false);


var background;
var hands;
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
var myFont2;

var paperLantern;

var myLantern1;
var myLantern2;
var myLantern3;
var myLantern4;
var myLantern5;
var myLantern6;
var myLantern7;
var myLantern8;
var myLantern9;



function preload(){

	background = loadImage("assets/landscape.png") 
  myFont = loadFont("assets/rabbitmoon.ttf")
  myFont2 = loadFont("assets/journal-webfont.ttf")
  myData = loadJSON("assets/Letters.json");
  paperLantern = loadImage("assets/snowflakes.png")
  hands = loadImage("assets/hands.png")
  
}

function setup() {
 



  createCanvas(2200, 1400);

  myLantern1 = new lanterns(100,  - 200, 2, 100, 90);
  myLantern2 = new lanterns(500,  - 300, 1, 80, 70);
  myLantern3 = new lanterns(1450, - 330, 2, 210, 190);
  myLantern4 = new lanterns(900, - 300, 1.5, 170, 150);
  myLantern5 = new lanterns(1200,  - 360, 2.5, 215, 190);
  myLantern6 = new lanterns(1800, - 110, 0.5, 115, 95);
  myLantern7 = new lanterns(1950, - 210, 1, 160, 140);
  myLantern8 = new lanterns(330,  - 150, 0.8, 90, 80);
  
  myLantern9 = new lanterns2(width/2.1, 130, 1.5, 310, 290);


  light1 = new light(width/2, height/2, 0.5, 2, 14);
  light2 = new light(width/2, height/2, -1, -1, 23);
  light3 = new light(width/2, height/2, 1.5, 0.5, 5);
  light4 = new light(width/2, height/2, 0.5, -1.5, 10);
  light5 = new light(width/2, height/2, -1, 0.5, 20);

  blight6 = new blight(width/2, height/2, 1.5, 1, 10);  
  blight7 = new blight(width/2, height/2, -1.5, 0.5, 5);
  blight8 = new blight(width/2, height/2, 1, -1, 12);
  blight9 = new blight(width/2, height/2, 0.5, -1.5, 9);
  blight10 = new blight(width/2, height/2, -0.5, 1,7);
    
}


function draw(){


    image(background,0,0, width, height);

      
 letter();


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


push();
  
keyTyped();
pop();

otherLetters();

lanterns();
lanterns2();


}

function letter(){
  if(seeletter == true){
    console.log("true");
  noStroke();
  fill(255);
  rect(width/4, 200, width/2, height);
  textFont(myFont);
  textAlign(CENTER);
  textSize(105);
  text("Write a letter to your future self...", width/4, 70, width/2, height);
  fill(0);
  textSize(55);
  text("Press the right arrow key to send off your letter-snowflake.", width/4, height - 130, width/2, height);


  
  fill(0,59,111);
  textFont(myFont2);
  textSize(70);
  text(myString, width/3.5, 360, width/2.5);

}

if(seeletter == false){

  image(background,0,0,width, height);
  console.log("false");

    myLantern1.move();
  myLantern1.display();

  myLantern2.move();
  myLantern2.display();

  myLantern3.move();
  myLantern3.display();

  myLantern4.move();
  myLantern4.display();

  myLantern5.move();
  myLantern5.display();

  myLantern6.move();
  myLantern6.display();

  myLantern7.move();
  myLantern7.display();

  myLantern8.move();
  myLantern8.display();

  image(hands, width/2.3, -100, 450, 350);

  myLantern9.move();
  myLantern9.display();

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
  
  

}


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
     if(this.x<=0 || this.x >= width){
    

      this.xvel *= -1;
    
    }



    this.y += this.yvel;

    
    if(this.y<=0 || this.y >= height){
    

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
     if(this.x <= 0 || this.x >= width){
    

      this.xvel *= -1;
 
    }



    this.y += this.yvel;

    
    if(this.y<=0 || this.y >=height){
    

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

function keyTyped(){           //Fortune Paper

    
 
  if (keyCode === RIGHT_ARROW){



    console.log("false");
    seeletter = false;
    movingLanterns = true;

    fill(255, 255, 255, 70);
    noStroke();

    ellipse(170, 900, 80,80);
    image(paperLantern,137,870, 70, 60);
    ellipse(300, 200, 150,150);
    image(paperLantern,230,140, 140, 120);
    ellipse(500, 400, 100,100);
    image(paperLantern,457,365, 85, 75);
    ellipse(900, 1200, 200,200);
    image(paperLantern,813,1120, 175, 150);
    ellipse(1300, 600, 170,170);
    image(paperLantern,1230,530, 150, 130);
    ellipse(1600, 150, 220,220);
    image(paperLantern,1503,63, 195, 170);
    ellipse(1700, 800, 70,70);
    image(paperLantern,1672,775, 60, 50);
    ellipse(2000, 250, 95,95);
    image(paperLantern,1960, 215, 80, 70);



    
push();
fill(255);
  textFont(myFont);
textAlign(CENTER, CENTER);
  
  textSize(550);
  text(timer, width/2, height/2);
  pop();



  // while (timer > 0) {  // this doesn't work because it's all happening at the same time
  //   timer --;
  // }
  
  // frameCount --> this keeps track of the number of times the program has gone throught the code, 60 = 1 second
  // % ---> this is the Modulo operator, it divides numbers and evaluates to the remainder: 17 % 5 evaluates to 2 remainder
  // this can be used to determine if the number on the left is divisible by the number on the right
  
  if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timer --;
  }
  if (timer == 0) {
    seeletter = true;
    myLantern1.move();
  myLantern1.display();

  myLantern2.move();
  myLantern2.display();

  myLantern3.move();
  myLantern3.display();

  myLantern4.move();
  myLantern4.display();

  myLantern5.move();
  myLantern5.display();

  myLantern6.move();
  myLantern6.display();

  myLantern7.move();
  myLantern7.display();

  myLantern8.move();
  myLantern8.display();
  letter();
  }
  }
  

  }

function otherLetters(){
  push();

var a = dist(mouseX,mouseY, 170,900);

  if (mouseIsPressed && a<40) {
  noStroke();
  fill(0,128, 129, 85);
  rect(width/4, 200, width/2, height);
  console.log("letter");

  fill(255);
  textFont(myFont2);
  textSize(55);
  textAlign(CENTER, 360);
  text(myData.HistoricalLetters[0].words, width/3.3, 360, width/2.5);


  } 
  var b = dist(mouseX,mouseY, 300,200);

  if (mouseIsPressed && b<75) {
  noStroke();
  fill(74,74, 125, 95);
  rect(width/4, 200, width/2, height);
  console.log("letter");

  fill(255);
  textFont(myFont2);
  textSize(47);
  textAlign(CENTER, 360);
  text(myData.HistoricalLetters[1].words, width/3.3, 300,width/2.5);


  } 

  var c = dist(mouseX,mouseY, 500,400);

  if (mouseIsPressed && c<50) {
  noStroke();
  fill(11,102, 35, 95);
  rect(width/4, 200, width/2, height);
  console.log("letter");

  fill(255);
  textFont(myFont2);
  textSize(60);
  textAlign(CENTER, 360);
  text(myData.HistoricalLetters[2].words, width/3.3, 300, width/2.5);


  } 

  var d = dist(mouseX,mouseY, 900,1200);

  if (mouseIsPressed && d<100) {
  noStroke();
  fill(17,30, 108, 95);
  rect(width/4, 200, width/2, height);
  console.log("letter");

  fill(255);
  textFont(myFont2);
  textSize(60);
  textAlign(CENTER, 360);
  text(myData.HistoricalLetters[3].words, width/3.3, 300, width/2.5);


  } 

  var e = dist(mouseX,mouseY, 1300,600);

  if (mouseIsPressed && e<85) {
  noStroke();
  fill(124,10, 2, 95);
  rect(width/4, 200, width/2, height);
  console.log("letter");

  fill(255);
  textFont(myFont2);
  textSize(60);
  textAlign(CENTER, 360);
  text(myData.HistoricalLetters[4].words, width/3.3, 300, width/2.5);


  } 

  var f = dist(mouseX,mouseY, 1600,150);

  if (mouseIsPressed && f<110) {
  noStroke();
  fill(196,145, 2, 95);
  rect(width/4, 200,width/2, height);
  console.log("letter");

  fill(255);
  textFont(myFont2);
  textSize(52);
  textAlign(CENTER, 360);
  text(myData.HistoricalLetters[5].words, width/3.3, 300, width/2.5);


  } 

  var g = dist(mouseX,mouseY, 1700,800);

  if (mouseIsPressed && g<35) {
  noStroke();
  fill(75,35, 84, 95);
  rect(width/4, 200, width/2, height);
  console.log("letter");

  fill(255);
  textFont(myFont2);
  textSize(55);
  textAlign(CENTER, 360);
  text(myData.HistoricalLetters[6].words, width/3.3, 300, width/2.5);


  } 

  var h = dist(mouseX,mouseY, 2000,250);

  if (mouseIsPressed && h<45) {
  noStroke();
  fill(114,133, 165, 95);
  rect(width/4, 200, width/2, height);
  console.log("letter");

  fill(255);
  textFont(myFont2);
  textSize(60);
  textAlign(CENTER, 360);
  text(myData.HistoricalLetters[7].words, width/3.3, 300, width/2.5);


  } 
pop();
  


  }

  function lanterns(myX, myY, myVel, myXSize, myYSize){






  this.x = myX;
  this.y = myY;

  this.vel = myVel;

  this.xSize = myXSize;
  this.ySize = myYSize;

  this.move = function(){

    this.y += this.vel;

    if(this.y >= height + 100){


      this.y = -100;
    }

   

  }

  this.display = function(){

    image(paperLantern, this.x, this.y, this.xSize, this.ySize);

  }

};

function lanterns2(myX, myY, myVel, myXSize, myYSize){






  this.x = myX;
  this.y = myY;

  this.vel = myVel;

  this.xSize = myXSize;
  this.ySize = myYSize;

  this.move = function(){

    this.y += this.vel;

  

   

  }

  this.display = function(){

    image(paperLantern, this.x, this.y, this.xSize, this.ySize);

  }

};