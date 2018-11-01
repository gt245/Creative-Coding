var mySquare1;
var mySquare2;
var mySquare3;

function setup() {

  createCanvas(500,500);

  mySquare1 = new Square(30, 120, 1, 5, 30);
  mySquare2 = new Square(190, 260, 3, 3, 50);
  mySquare3 = new Square(420, 450, 5, 1, 40);
    
}



function draw() {
  background(210);

  mySquare1.move();
  mySquare1.display();

  mySquare2.move();
  mySquare2.display();

  mySquare3.move();
  mySquare3.display();


}

function Square(myX, myY, myXVel, myYVel, mySize){

  this.x = myX;
  this.y = myY;



  this.size = mySize;
  this.sizeStep = 1;

   this.xvel = myXVel;
  this.yvel = myYVel;





  this.move = function(){
    this.x += this.xvel;
     if(this.x >= width){
    

      this.x = 0;
    }



    this.y += this.yvel;

    
    if(this.y >= height){
    

      this.y = 0;
    }

    this.size += this.sizeStep;
    if(this.size >= 70 || this.size <= 10){
      this.sizeStep *= -1;
    }

  }

  this.display = function(){

    noStroke();

    fill(190,30,180);
    rect(this.x, this.y, this.size, this.size);

  }


};