var fortuneCookies;
var takeoutBox;

var Slip;
var Advice;

var myData;
var url;

function preload(){  //load all images

  fortuneCookies = loadImage("assets/fortune-cookie-png-2.png")
  takeoutBox = loadImage("assets/box.png")
  green = loadImage("assets/green.png")
  yellow = loadImage("assets/yellow.png")

}


function setup() {    //first page of EAT ME


  createCanvas(1500,1000);
  background(248,210,78);

  url = "https://api.adviceslip.com/advice";
  queryNewData();
  fill(0);

textSize(60);             
  text("EAT ME!", 640,300,500,200);
  image(takeoutBox, 550,500, 400, 460);
    
}

function draw() {


  fortunecookie();

  fortune();
  fill(255);
 

}


function callBack(myData){


  Slip = myData.slip.slip_id;
  Advice = myData.slip.advice;


}

function queryNewData(){

  myData = loadJSON(url, callBack);

}

function fortunecookie(){     //Second Screen with Fortune Cookie



var d = dist(mouseX,mouseY, 750,700);

  if (mouseIsPressed && d<175) {
    background(118,205,218);
     image(takeoutBox, 550,500, 400, 460);
    image(green, 330, 700,300,200);
    image(yellow, 830, 700,400,250);

    image(fortuneCookies, 450,150, 600, 340);
    


fill(0);
   textSize(50);
  text("Press '1' to Open the Fortune Cookie!", 100,500,500,200);


  } 
 


}




function fortune(){           //Fortune Paper

    
 
  if (keyIsPressed && key == '1'){


    noStroke();
    fill(0, 0, 0, 10);
    rect(0,0, width, height);
    fill(255, 255, 255,);
    rect(400, 330, 700, 200);
     textSize(25);
      fill(0, 0, 0);

      text(Advice, 500,400, 500, 170);

      textSize(50);
      fill(255, 255, 255);

      text("Refresh page to get a new fortune!", 400, 200 );

  }

  }

