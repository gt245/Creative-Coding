var button;
var input;
var canvas;
var p;

var inputText;
var baseOutputString;

var  change ='30%';

function setup(){
  canvas = createCanvas(300,300);
  canvas.position(200,200);

  inputText = "start";

  input = createInput('What are your weekend plans?');
  input.position(50,100);
  input.style('width', '400px');

  button = createButton('Submit');
  button.position(460,100);

  button.mousePressed(updateText);

  baseOutputString = "This weekend my plans are ";


  p = createP(inputText);
  p.position(50,150);
  p.style('font-weight', 'bold');
  p.style('text-decoration', 'underline');

  
}

function draw(){
  background(150);

  text(inputText, 50,50);
  p.style('font-size',change);
  

}

function updateText(){
  inputText = input.value();

  var totalOutput = baseOutputString + inputText;

  console.log(totalOutput);
  input.value("");

  p.html(inputText);


}
function mouseClicked(){
  if(change =='30%'){
    change = '100%';
    console.log(change);

    
  }
  else
    change ='30%';

}

