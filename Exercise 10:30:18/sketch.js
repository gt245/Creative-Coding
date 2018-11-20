var myBall1;
var myBall2;
var myBall3;

function setup() {

  createCanvas(500,500);

  myBall1 = new Ball(30, 120, 1, 5, 30);
  myBall2 = new Ball(190, 260, 3, 3, 50);
  myBall3 = new Ball(420, 450, 5, 1, 40);
    
}



function draw() {
  background(210);

  myBall1.move();
  myBall1.display();

  myBall2.move();
  myBall2.display();

  myBall3.move();
  myBall3.display();


}

function Ball(myX, myY, myXVel, myYVel, mySize){

  this.x = myX;
  this.y = myY;



  this.size = mySize;
  this.sizeStep = 1;

   this.xvel = myXVel;
  this.yvel = myYVel;





  this.move = function(){
    this.x += this.xvel;
     if(this.x >= width || this.x<= 0){
    

      this.xvel *= -1;
    }



    this.y += this.yvel;

    
    if(this.y >= height|| this.y<= 0){
    

      this.yvel *= -1;
    }

    this.size += this.sizeStep;
    if(this.size >= 70 || this.size <= 10){
      this.sizeStep *= -1;
    }

  }

  this.display = function(){

    noStroke();

    fill(190,30,180);
    ellipse(this.x, this.y, this.size, this.size);

  }


};
