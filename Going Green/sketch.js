
var plants;

var myString = "";

function preload(){  //load all images

  myFont = loadFont("assets/Foglihten-068.otf")
  recycle = loadImage("assets/recycle.jpg")
  compost = loadImage("assets/compost.png")
  trash = loadImage("assets/trash.jpg")

}


function setup() {   



  createCanvas(1600,1100);
  background(247,212,214);
  fill(0);
  textFont(myFont);
textSize(60);
push();
textAlign(CENTER);      
  text("What are you throwing away?", 240,50,1200,500);
  pop();  
  fill(70,130,180)
  image(recycle, 70,200, 400, 370);
  text("Press 'R'", 140,590,1200,500);
  fill(34,139,34)
  image(compost, 560,200, 430, 370);
  text("Press 'C'", 660,590,1200,500);
  image(trash, 1050,150, 400, 470);
  fill(147,112,219)
  text("Press 'T'", 1150,670,1200,500);
  noStroke();
  fill(255);
  rect(1150,790,400,75);   
  push();
  fill(0);
textSize(40);    
  text("if other press 'O'", 1200, 800,1200,500);
  pop(); 

    
}

function keyPressed(){
  if (keyCode === 82){
    recyclef();
  }
  else if (keyCode == 67){
   compostf();
  }
  else if (keyCode == 84 || keyCode == 79){
    trashf();
  }
}



function draw() {
  
}




function recyclef(){           

    
    fill(32, 63,132);
    rect(0,0,1600,1100);          



    noStroke();
    fill(0, 0, 0, 10);
    rect(0,0, width, height);
    fill(255, 255, 255,);
    rect(400, 330, 700, 200);
    textSize(60);
    fill(0, 0, 0);

    text("Recycle!", 620,400, 500, 170);

    textSize(50);
    fill(255, 255, 255);

    text("Refresh page to try another one!", 400, 200 );

  }

  function compostf(){

    fill(32, 112,104);
    rect(0,0,1600,1100);



    noStroke();
    fill(0, 0, 0, 10);
    rect(0,0, width, height);
    fill(255, 255, 255,);
    rect(400, 330, 700, 200);
    textSize(60);
    fill(0, 0, 0);

    text("Compost!", 600,400, 500, 170);

    textSize(50);
    fill(255, 255, 255);

    text("Refresh page to try another one!", 400, 200 );

  }
  
  function trashf(){
    fill(0);
    rect(0,0,1600,1100);


    noStroke();
    fill(0, 0, 0, 10);
    rect(0,0, width, height);
    fill(255, 255, 255,);
    rect(400, 330, 700, 200);
     textSize(60);
      fill(0, 0, 0);

      text("Trash!", 650,400, 500, 170);

      textSize(50);
      fill(255, 255, 255);

      text("Refresh page to try another one!", 400, 200 );

  }

