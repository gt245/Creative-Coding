var fortuneCookies;
var takeoutBox;

var firstSlip;
var firstAdvice;

var myData;
var url;

function preload(){

  fortuneCookies = loadImage("assets/fortune-cookie-png-2.png")
  takeoutBox = loadImage("assets/box.png")

}


function setup() {

  createCanvas(1500,1000);

  url = "https://api.adviceslip.com/advice";
  queryNewData();
    
}

function draw() {

  background(145, 214, 235);

  image(takeoutBox, 550,500, 400, 460);

  fortunecookie();

}

//callback function from loadJSON
function callBack(myData){

  //print the entire data object
  console.log(myData);

  //find a specific piece of data
  firstSlip = myData[0].slip_id;
  firstAdvice = myData[0].advice;
  console.log(firstSlip);
  console.log(firstAdvice);


}

function queryNewData(){
  //use loadJSON with a callback method for asynchronous data loading
  //callBack() will be called when a valid data object is received.
  myData = loadJSON(url, callBack);

}

function fortunecookie(){

  fill(255);
  ellipse(230, 185, 250, 250);


  image(fortuneCookies, 80,100, 300, 170);
  image(fortuneCookies, 500, 300, 300, 170);
  image(fortuneCookies, 230,600, 300, 170);
  image(fortuneCookies, 870,180, 300, 170);
  image(fortuneCookies, 1100,500, 300, 170);
  text(firstAdvice, 550,500,500,200);

}
