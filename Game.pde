import ddf.minim.*;
import ddf.minim.analysis.*;
import ddf.minim.effects.*;
import ddf.minim.signals.*;
import ddf.minim.spi.*;
import ddf.minim.ugens.*;

 
Minim minim;
AudioPlayer myPlayer; 

boolean firstClick = false;
boolean secondClick = false;
boolean thirdClick = false;
boolean fourthClick = false;
boolean fifthClick = false;
PFont instruction;

void setup(){
  size(900, 1000);
background(4,41,60);

instruction = createFont("Futura-Medium-48", 20);
textFont(instruction);
fill(240);
text("Help me swim by clicking my strings and playing my song in order!", 700, 100, 200, 200);
textSize(13);
text("Press G to RESTART", 740, 250, 200, 200);

//squares
fill(255);
ellipse(220, 80, 10, 10);

ellipse(130, 550, 20, 20);

ellipse(750, 800, 10, 10);

ellipse(720, 90, 20, 20);
ellipse(640, 100, 10, 10);
ellipse(770, 450, 10, 10);

ellipse(700, 500, 15, 15);


ellipse(90, 200, 15, 15);


ellipse(150, 100, 20, 20);

ellipse(80, 500, 10, 10);

//mountains
noStroke();
fill(12,75,106,70);
beginShape();
vertex(0,1000);
vertex(0, 700);
vertex(200, 500);
vertex(600,1000);
vertex(0,1000);
endShape();

noStroke();
fill(32,96,123,70);
beginShape();
vertex(200, 500);
vertex(600,1000);
vertex(750,800);
vertex(690,300);
vertex(200, 500);
endShape();

noStroke();
fill(84,128,153,70);
beginShape();
vertex(750,800);
vertex(690,300);
vertex(730, 0);
vertex(900,0);
vertex(900, 500);
vertex(750,800);

endShape();



  //JELLYFISH
  
  //bubbles
  
  
  //circles
  noFill();
  stroke(255);
  strokeWeight(1);
  ellipse(270, 260, 70,70);
  ellipse(320, 230, 30,30);
  ellipse(450, 300, 120,120);
  ellipse(470, 240, 60,60);
  ellipse(540, 190, 90,90);
  ellipse(600, 360, 20,20);
  
  strokeWeight(5);
  
  //string 1
  stroke(129,176,178);
  beginShape();
  curveVertex(200, 453);
  curveVertex(200, 453);
  curveVertex(220, 475);
  curveVertex(190, 500);
  curveVertex(240, 540);
  curveVertex(210, 590);
  curveVertex(260, 660);  
  curveVertex(240, 740);
  curveVertex(280, 820);
  curveVertex(250, 860);
   endShape();  
   


//string 5
stroke(214, 234, 212);
  beginShape();
  curveVertex(600, 433);
  curveVertex(600, 433);
  curveVertex(580, 475);
  curveVertex(610, 500);
  curveVertex(560, 540);
  curveVertex(590, 590);
  curveVertex(540, 660);  
  curveVertex(560, 740);
  curveVertex(520, 820);
  curveVertex(550, 860);
   endShape();  
    
 //string 4 
 stroke(255,233,188);
     beginShape();
  curveVertex(500, 463);
  curveVertex(500, 463);
  curveVertex(530, 485);

  curveVertex(490, 550);

  curveVertex(520, 670);  

  curveVertex(470, 730);
  curveVertex(500, 860);
  curveVertex(500, 860);
   endShape();  
   
   //string 2
   stroke(167, 183, 131);
    beginShape();
  curveVertex(300, 436);
  curveVertex(300, 436);
  curveVertex(270, 475);

  curveVertex(310, 570);

  curveVertex(280, 680);  

  curveVertex(330, 710);
  curveVertex(300, 800);
  curveVertex(340, 880);
  curveVertex(340, 880);
   endShape(); 
   
  //string 3
  stroke(141,213,222);
  beginShape();
  curveVertex(420, 465);
  curveVertex(420, 465);
  curveVertex(360, 500);
  curveVertex(440, 580);

  curveVertex(370, 660);

  curveVertex(420, 730);  

  curveVertex(360, 710);
  curveVertex(400, 800);
  curveVertex(340, 860);
  curveVertex(390, 880);
  curveVertex(430, 880);
   endShape(); 
  
   //top
  strokeWeight(3);
  stroke(255);
  beginShape();
  noFill();

  curveVertex(120, 440);
  curveVertex(236, 450);
  curveVertex(366, 420);
  curveVertex(450, 480);
  curveVertex(576, 430);
  curveVertex(690, 440);
  curveVertex(660, 380);
  curveVertex(616, 175);
  curveVertex(500, 100);
  curveVertex(400, 50);
  curveVertex(300, 80);
  curveVertex(200, 150);
  curveVertex(150, 380); //repeat
  curveVertex(120, 440);
  curveVertex(236, 450);
  curveVertex(366, 420);
  curveVertex(450, 480);
  curveVertex(576, 430);
  curveVertex(690, 440);
  curveVertex(660, 380);
  curveVertex(616, 175);
  curveVertex(500, 100);
  curveVertex(400, 50);
  curveVertex(300, 80);
  curveVertex(200, 150);
  curveVertex(150, 380);

  endShape();  
}

                             
                                
                              
                              
void draw(){
}

void keyPressed(){
  if(key == 'g'){
    setup();
    firstClick = false;
    secondClick = false;
    thirdClick = false;
    fourthClick = false;
    fifthClick = false;
  }
}    

void mouseClicked(){                             //Identifying each STRING
   color mouseColor;
  mouseColor= get(mouseX, mouseY);
  if( mouseColor == color(214, 234, 212)){
    firstClick = true; 
    noStroke();
     fill(255);
    ellipse(600, 360, 20,20);
    ellipse(320, 230, 30,30);
    minim = new Minim(this);
  myPlayer = minim.loadFile("ttls1.mp3");
  myPlayer.play(); 
  }
 
  
  
  
   else if( mouseColor == color(141,213,222)){
    if(firstClick == true){
      secondClick = true;
    noStroke();
    fill(255);
    ellipse(540, 190, 90,90);
    minim = new Minim(this);
  myPlayer = minim.loadFile("ttls2.mp3");
  myPlayer.play();
    }
    else{
      minim = new Minim(this);
  myPlayer = minim.loadFile("ttls2.mp3");
  myPlayer.play();
      setup();
      firstClick = false;
    }
  }
  
  
  
  else if( mouseColor == color(167, 183, 131)){
    if(secondClick == true){
      thirdClick = true;
     noStroke();
    fill(255);
    ellipse(270, 260, 70,70);
  ellipse(470, 240, 60,60);
  minim = new Minim(this);
  myPlayer = minim.loadFile("ttls3.mp3");
  myPlayer.play();
    }
    else{
      minim = new Minim(this);
  myPlayer = minim.loadFile("ttls3.mp3");
  myPlayer.play();
      setup();
      firstClick = false;
      secondClick = false;
    }
  }
  
  
  
  else if( mouseColor == color(255,233,188)){
    if(thirdClick == true){
      fourthClick = true;
      noStroke();
    fill(255);
  ellipse(450, 300, 120,120);
  minim = new Minim(this);
  myPlayer = minim.loadFile("ttls4.mp3");
  myPlayer.play();
    }
    else{
      minim = new Minim(this);
  myPlayer = minim.loadFile("ttls4.mp3");
  myPlayer.play();
      setup();
      firstClick = false;
      secondClick = false;
      thirdClick = false;
    }
  }
  
  
  
  else if( mouseColor == color(129,176,178)){
    if(fourthClick == true){
      fifthClick = true;
    noStroke();
    fill(255, 255,255,40);
beginShape();
  curveVertex(120, 440);
  curveVertex(236, 450);
  curveVertex(366, 420);
  curveVertex(450, 480);
  curveVertex(576, 430);
  curveVertex(690, 440);
  curveVertex(660, 380);
  curveVertex(616, 175);
  curveVertex(500, 100);
  curveVertex(400, 50);
  curveVertex(300, 80);
  curveVertex(200, 150);
  curveVertex(150, 380); //repeat
  curveVertex(120, 440);
  curveVertex(236, 450);
  curveVertex(366, 420);
  curveVertex(450, 480);
  curveVertex(576, 430);
  curveVertex(690, 440);
  curveVertex(660, 380);
  curveVertex(616, 175);
  curveVertex(500, 100);
  curveVertex(400, 50);
  curveVertex(300, 80);
  curveVertex(200, 150);
  curveVertex(150, 380);

  endShape(); 
    fill(255,188,227,99);
  ellipse(270, 260, 100,100);
  fill(198,154,242,99);
  ellipse(320, 230, 60,60);
   fill(255, 157, 134,99);
  ellipse(450, 300, 150,150);
   fill(73,180,171,99);
  ellipse(470, 240, 90,90);
   fill(203,81,81,99);
  ellipse(540, 190, 120,120);
   fill(255,139,139,99);
  ellipse(600, 360, 50,50);
  
 minim = new Minim(this);
  myPlayer = minim.loadFile("ttls5.mp3");
  myPlayer.play();
  
  fill(255);
  textSize(60);
  text("THANKS FOR HELPING ME!", 50, 930);
    }
    else{
       minim = new Minim(this);
  myPlayer = minim.loadFile("ttls5.mp3");
  myPlayer.play();
      setup();
      firstClick = false;
      secondClick = false;
      thirdClick = false;
      fourthClick = false;
    }
   
    
  }
  
                                       
                                        
}
