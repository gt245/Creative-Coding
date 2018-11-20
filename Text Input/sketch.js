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
   

    query = "cats"; //article search term

    url = baseUrl + "q=" + query;

    console.log(url);

}

function draw() {


}

function gotData(myData){ 
    console.log(myData);
}


function changeQuery(){

  query = input.value(); //get value of text field, store as the new query

  console.log(query);

    //Rebuild URL with new query value
    url = baseUrl + "q=" + query;

    console.log(url);

    //call loadJSON again with new URL (therefore the new search term)
    myData = loadJSON(url, gotData);

  input.value(""); //clear out text input so it doesn't display the last input

}
