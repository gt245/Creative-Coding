var bg1;
var tvGirl1;
var tvGirl2;
var tvballet;

var dance1;
var dance2;
var dance3;
var dance4;
var stage1;
var stage2;
var stage3;
var stage4;

var finalbg;
var outfit1;
var outfit2;
var outfit3;

var imageState = 0;

function preload(){

  bg1 = loadImage("assets/bg1.png")
  tvballet = loadImage("assets/ballet.jpg")
  tvGirl1 = loadImage("assets/girl1.png")
  tvGirl2 = loadImage("assets/girl2.png")

  dance1 = loadImage("assets/dance1.png")
  dance2 = loadImage("assets/dance2.png")
  dance3 = loadImage("assets/dance3.png")
  dance4 = loadImage("assets/dance4.png")
  stage1 = loadImage("assets/stage1.png")
  stage2 = loadImage("assets/stage2.png")
  stage3 = loadImage("assets/stage3.png")
  stage4 = loadImage("assets/stage4.png")

  finalbg = loadImage("assets/finalbg.png")
  outfit1 = loadImage("assets/outfit1.png")
  outfit2 = loadImage("assets/outfit2.png")
  outfit3 = loadImage("assets/outfit3.png")


}

function setup() {

  frameRate(110);
  createCanvas(900,600);

    
  }
  function draw(){
    change()

    if(stages == 0){
    tvScene():
  }
  else if (stages == 1){
    dance();
  }
  else if (stages == 2){
    final():
  }
  else{
    return;
  }
   
   
    
  }

  //scene 1

  function tvScene(){
     push();

   image(bg1, 0, 0);
    
    
   pop();
    

    var count = frameCount % 30;
  if(count == 0){  //every 30 frames, this happens
    imageState++;
    if(imageState > 1){
      imageState=0;
    }
  }

  switch(imageState){
    case 0:
      image(tvGirl1, 100, 180, 500,300);
      break;
    case 1:
      image(tvGirl2, 100, 180, 500,300);
      break;
    default:
      break;
  }
     
   

  }

  function mousePressed(){
    var d = dist(mouseX, mouseY, 455, 320);
    if (d< 50){
      image(tvballet, 400, 260, 110, 100);
      
    }
  }



//scene 2

  function dance(){

    
  var count = frameCount % 80;
  if(count == 0){  //every 30 frames, this happens
    imageState++;
    if(imageState > 3){
      imageState=0;
    }
  }

  switch(imageState){
    case 0:
      image(stage1, 0, 0, 800,600);
      break;
    case 1:
      image(stage2, 0, 0, 800,600);
      break;
    case 2:
      image(stage3, 0, 0, 800,600);
      break;
    case 3:
      image(stage4, 0, 0, 800,600);
      break;
    default:
      break;
  } 


  if (keyIsPressed && key == '1'){
      image(dance1, -40, 100, 400,540);
    
  }

  if (keyIsPressed && key == '2'){
      image(dance2, 170, -150,400,540);
    
  }
  if (keyIsPressed && key == '3'){
      image(dance3, 300, 0,400,540);
    
  }
  if (keyIsPressed && key == '4'){
      image(dance4, 400, 160,400,540);
    
  }
     

  }


//scene 3

  function final(){
image(finalbg, 0,0, 900,600);
noStroke();
fill(0);
ellipse(225, 530, 100,100);

fill(248, 139, 160);
ellipse(450, 530, 100,100);

fill(195, 139, 248);
ellipse(675, 530, 100,100);

}

function mousePressed(){
    var d = dist(mouseX, mouseY, 225, 530);
    if (d< 50){
      image(outfit3, 100, 0, 700, 450);
      
    }
     var d = dist(mouseX, mouseY, 450, 530);
    if (d< 50){
      image(outfit1, 100, 0, 700, 450);
      
    }
     var d = dist(mouseX, mouseY, 675, 530);
    if (d< 50){
      image(outfit2, 100, 0, 700, 450);
      
    }
  }

  function change(){
  if (keyIsPressed && key == 'a'){
      stages = 1;
  }

  if (keyIsPressed && key == 'b'){
      stages = 2;
    
  }
  if (keyIsPressed && key == 'c'){
      stages = 3;

    }
  }
  
  /*

//scene 1

var bg1;
var tvGirl1;
var tvGirl2;
var tvballet;


var imageState = 0;

function preload(){

	bg1 = loadImage("assets/bg1.png")
  tvballet = loadImage("assets/ballet.jpg")
  tvGirl1 = loadImage("assets/girl1.png")
  tvGirl2 = loadImage("assets/girl2.png")


}

function setup() {

  frameRate(110);
  createCanvas(900,600);

	  
  }
  function draw(){
    tvScene();
   
    
  }

  function tvScene(){
     push();

   image(bg1, 0, 0);
    
    
   pop();
    

    var count = frameCount % 30;
  if(count == 0){  //every 30 frames, this happens
    imageState++;
    if(imageState > 1){
      imageState=0;
    }
  }

  switch(imageState){
    case 0:
      image(tvGirl1, 100, 180, 500,300);
      break;
    case 1:
      image(tvGirl2, 100, 180, 500,300);
      break;
    default:
      break;
  }
     
   

  }

  function mousePressed(){
    var d = dist(mouseX, mouseY, 455, 320);
    if (d< 50){
      image(tvballet, 400, 260, 110, 100);
      
    }
  }



//scene 2
  var dance1;
var dance2;
var dance3;
var dance4;
var stage1;
var stage2;
var stage3;
var stage4;



var imageState = 0;

function preload(){

  dance1 = loadImage("assets/dance1.png")
  dance2 = loadImage("assets/dance2.png")
  dance3 = loadImage("assets/dance3.png")
  dance4 = loadImage("assets/dance4.png")
  stage1 = loadImage("assets/stage1.png")
  stage2 = loadImage("assets/stage2.png")
  stage3 = loadImage("assets/stage3.png")
  stage4 = loadImage("assets/stage4.png")


}

function setup() {

  frameRate(110);
  createCanvas(900,600);

    
  }
  function draw(){
    dance();
   
    
  }

  function dance(){

    
  var count = frameCount % 80;
  if(count == 0){  //every 30 frames, this happens
    imageState++;
    if(imageState > 3){
      imageState=0;
    }
  }

  switch(imageState){
    case 0:
      image(stage1, 0, 0, 800,600);
      break;
    case 1:
      image(stage2, 0, 0, 800,600);
      break;
    case 2:
      image(stage3, 0, 0, 800,600);
      break;
    case 3:
      image(stage4, 0, 0, 800,600);
      break;
    default:
      break;
  } 


  if (keyIsPressed && key == '1'){
      image(dance1, -40, 100, 400,540);
    
  }

  if (keyIsPressed && key == '2'){
      image(dance2, 170, -150,400,540);
    
  }
  if (keyIsPressed && key == '3'){
      image(dance3, 300, 0,400,540);
    
  }
  if (keyIsPressed && key == '4'){
      image(dance4, 400, 160,400,540);
    
  }
     

  }

//scene 3
  var finalbg;
var outfit1;
var outfit2;
var outfit3;
var imageState = 0;


function preload(){

  finalbg = loadImage("assets/finalbg.png")
  outfit1 = loadImage("assets/outfit1.png")
  outfit2 = loadImage("assets/outfit2.png")
  outfit3 = loadImage("assets/outfit3.png")


}

function setup() {

  frameRate(110);
  createCanvas(900,600);

    
  }
  function draw(){
    final();
    finaloutfit();
   
    
  }

  function final(){
image(finalbg, 0,0, 900,600);
noStroke();
fill(0);
ellipse(225, 530, 100,100);

fill(248, 139, 160);
ellipse(450, 530, 100,100);

fill(195, 139, 248);
ellipse(675, 530, 100,100);

}

function mousePressed(){
    var d = dist(mouseX, mouseY, 225, 530);
    if (d< 50){
      image(outfit3, 100, 0, 700, 450);
      
    }
     var d = dist(mouseX, mouseY, 450, 530);
    if (d< 50){
      image(outfit1, 100, 0, 700, 450);
      
    }
     var d = dist(mouseX, mouseY, 675, 530);
    if (d< 50){
      image(outfit2, 100, 0, 700, 450);
      
    }
  }
  





  
  


