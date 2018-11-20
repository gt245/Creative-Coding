var myData;

var url;
var baseUrl;
var apiKey;

var query;

function setup() {

  createCanvas(500,500);

  url = "https://ghibliapi.herokuapp.com/films";
  
  display();
  queryNewData();
    
}

function draw() {
  input = createInput("Search for a Studio Ghibli movie");
  input.position(100,100);
  input.style('width','200');

  button = createButton('Search');
  button.position(300,100;
    button.mousePressed(display);
}

function display(){ 
  var title = input.value();
  text()
}

function queryNewData(){
  myData = loadJSON(url, callBack);
}
