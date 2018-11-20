//Create variables for DOM objects

var input;
var inputButton;

var url;
var baseUrl;
var query;

function setup() {
    input = createInput("Search term");
    input.position(50, 200);
    input.style('width', '150px');


    inputButton = createButton("Enter");
    inputButton.position(220,200);
    inputButton.mousePressed(changeQuery);


    baseUrl = "https://ghibliapi.herokuapp.com/films";
   

    query = "title"; //article search term

    url = baseUrl + "q=" + query;

    console.log(url);

}

function draw() {


}

function gotData(myData){ 
    console.log(myData);
}


function changeQuery(){

  query = input.value(); 

  console.log(query);

    
    url = baseUrl + "q=" + query;

    console.log(url);

    
    myData = loadJSON(url, gotData);

  input.value(""); 

}

function display(){
    if(input.value == "My neighbor Totoro"){
    text(myData.description[8], 50,50);
        
    }
}
