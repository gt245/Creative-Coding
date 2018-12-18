
let timer = 30
var seeletter = new Boolean(true);
var movingLanterns = new Boolean(false);

var music;


var background;
var hands;
var light1;
var light2;
var light3;
var light4;
var light5;


var blight6;
var blight7;
var blight8;
var blight9;
var blight10;

var myString = "";

var myFont;
var myFont;

var paperLantern;

var myLantern1;
var myLantern2;
var myLantern3;
var myLantern4;
var myLantern5;
var myLantern6;
var myLantern7;
var myLantern8;
var myLantern9;



function preload(){

	background = loadImage("assets/mountain.jpg") 
  myFont = loadFont("assets/chinese3.ttf")
  paperLantern = loadImage("assets/lantern.png")
  hands = loadImage("assets/hands1.png")
  music = loadSound("assets/music.mp3")
}

function setup() {
  music.play();
  
  createCanvas(2200, 1400);

  myLantern1 = new lanterns(100, height + 200, -2, 70, 85);
  myLantern2 = new lanterns(500, height + 300, -1, 50, 60);
  myLantern3 = new lanterns(1450, height + 330, -2, 170, 200);
  myLantern4 = new lanterns(900, height + 300, -1.5, 130, 150);
  myLantern5 = new lanterns(1200, height + 360, -2.5, 150, 180);
  myLantern6 = new lanterns(1800, height + 110, -0.5, 75, 90);
  myLantern7 = new lanterns(1950, height + 210, -1, 120, 140);
  myLantern8 = new lanterns(330, height + 150, -0.8, 60, 70);
  
  myLantern9 = new lanterns2(width/2.06, height -480, -1.5, 270, 300);


  light1 = new light(width/2, height/2, 0.5, 2, 14);
  light2 = new light(width/2, height/2, -1, -1, 23);
  light3 = new light(width/2, height/2, 1.5, 0.5, 5);
  light4 = new light(width/2, height/2, 0.5, -1.5, 10);
  light5 = new light(width/2, height/2, -1, 0.5, 20);

  blight6 = new blight(width/2, height/2, 1.5, 1, 10);  
  blight7 = new blight(width/2, height/2, -1.5, 0.5, 5);
  blight8 = new blight(width/2, height/2, 1, -1, 12);
  blight9 = new blight(width/2, height/2, 0.5, -1.5, 9);
  blight10 = new blight(width/2, height/2, -0.5, 1,7);

    
}


function draw(){


    image(background,0,0,width, height);

      
 letter();


  light1.move();
  light1.display();

  light2.move();
  light2.display();

  light3.move();
  light3.display();

  light4.move();
  light4.display();

  light5.move();
  light5.display();

  blight6.move();
  blight6.display();

  blight7.move();
  blight7.display();

  blight8.move();
  blight8.display();

  blight9.move();
  blight9.display();

  blight10.move();
  blight10.display();


push();
  
keyTyped();
pop();

otherLetters();

lanterns();
lanterns2();


}

function letter(){
  if(seeletter == true){
    console.log("true");
  noStroke();
  fill(255);
  rect(width/4, 200, width/2, height);
  textFont(myFont);
  textSize(120);
  textAlign(CENTER, CENTER);
  text("給你未來的自己寫一封信...", width/3.8, 120, width/2);
  fill(0);
  textSize(90);
  text("按右箭頭鍵發送信件.", width/4, height - 80, width/2);


  
  fill(14,77,146);
  textFont(myFont);
  textSize(105);
  text(myString, width/3.3, 360, width/2.5);

}

if(seeletter == false){

  image(background,0,0,width, height);
  console.log("false");

    myLantern1.move();
  myLantern1.display();

  myLantern2.move();
  myLantern2.display();

  myLantern3.move();
  myLantern3.display();

  myLantern4.move();
  myLantern4.display();

  myLantern5.move();
  myLantern5.display();

  myLantern6.move();
  myLantern6.display();

  myLantern7.move();
  myLantern7.display();

  myLantern8.move();
  myLantern8.display();

  image(hands, width/2.3, height-250, 450, 350);

  myLantern9.move();
  myLantern9.display();

  light1.move();
  light1.display();

  light2.move();
  light2.display();

  light3.move();
  light3.display();

  light4.move();
  light4.display();

  light5.move();
  light5.display();

  blight6.move();
  blight6.display();

  blight7.move();
  blight7.display();

  blight8.move();
  blight8.display();

  blight9.move();
  blight9.display();

  blight10.move();
  blight10.display();
  
  

}


}

function keyPressed(){
  myString += key;
}

function light(myX, myY, myXVel, myYVel, mySize){          

  this.x = myX;
  this.y = myY;



  this.size = mySize;
  this.sizeStep = 1/4;

   this.xvel = myXVel;
  this.yvel = myYVel;





  this.move = function(){
    this.x += this.xvel;
     if(this.x<=0 || this.x >= width){
    

      this.xvel *= -1;
    
    }



    this.y += this.yvel;

    
    if(this.y<=0 || this.y >= height){
    

      this.yvel *= -1;
    }

    this.size += this.sizeStep;
    if(this.size >= 30 || this.size <= 5){
      this.sizeStep *= -1;
    }

  }

  this.display = function(){

    noStroke();

    fill(255,255, 255, 80);
    ellipse(this.x, this.y, this.size, this.size);

  }


};



function blight(myX, myY, myXVel, myYVel, mySize){       

  this.x = myX;
  this.y = myY;



  this.size = mySize;
  this.sizeStep = 1/4;

   this.xvel = myXVel;
  this.yvel = myYVel;





  this.move = function(){
    this.x += this.xvel;
     if(this.x <= 0 || this.x >= width){
    

      this.xvel *= -1;
 
    }



    this.y += this.yvel;

    
    if(this.y<=0 || this.y >= height){
    

      this.yvel *= -1;
    }

    this.size += this.sizeStep;
    if(this.size >= 15 || this.size <= 5){
      this.sizeStep *= -1;
    }

  }

  this.display = function(){

    noStroke();

    fill(255,243,143,80);
    ellipse(this.x, this.y, this.size, this.size);

  }


};

function keyTyped(){           //Fortune Paper

    
 
  if (keyCode === RIGHT_ARROW){



    console.log("false");
    seeletter = false;
    movingLanterns = true;

    fill(250, 218, 94, 70);
    noStroke();

    ellipse(170, 900, 80,80);
    image(paperLantern,142,865, 60, 70);
    ellipse(300, 200, 150,150);
    image(paperLantern,245,130, 120, 140);
    ellipse(500, 400, 100,100);
    image(paperLantern,465,355, 75, 90);
    ellipse(900, 1200, 200,200);
    image(paperLantern,830,1110, 150, 180);
    ellipse(1300, 600, 170,170);
    image(paperLantern,1240,520, 130, 150);
    ellipse(1600, 150, 220,220);
    image(paperLantern,1525,50, 170, 200);
    ellipse(1700, 800, 70,70);
    image(paperLantern,1677,770, 50, 60);
    ellipse(2000, 250, 95,95);
    image(paperLantern,1970,210, 70, 85);



    
push();
fill(255);
  textFont(myFont);
textAlign(CENTER, CENTER);
  
  textSize(1000);
  text(timer, width/2, height/2.6);
  pop();



  // while (timer > 0) {  // this doesn't work because it's all happening at the same time
  //   timer --;
  // }
  
  // frameCount --> this keeps track of the number of times the program has gone throught the code, 60 = 1 second
  // % ---> this is the Modulo operator, it divides numbers and evaluates to the remainder: 17 % 5 evaluates to 2 remainder
  // this can be used to determine if the number on the left is divisible by the number on the right
  
  if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timer --;
  }
  if (timer == 0) {
    seeletter = true;
    myLantern1.move();
  myLantern1.display();

  myLantern2.move();
  myLantern2.display();

  myLantern3.move();
  myLantern3.display();

  myLantern4.move();
  myLantern4.display();

  myLantern5.move();
  myLantern5.display();

  myLantern6.move();
  myLantern6.display();

  myLantern7.move();
  myLantern7.display();

  myLantern8.move();
  myLantern8.display();
  letter();
  }
  }
  

  }

function otherLetters(){
  push();

var a = dist(mouseX,mouseY, 170,900);

  if (mouseIsPressed && a<40) {
  noStroke();
  fill(0,128, 129, 85);
  rect(width/4, 200, width/2, height);
  console.log("letter");

  fill(255);
  textFont(myFont);
  textSize(60);
  textAlign(CENTER, 360);
  text("親愛的托德，謝謝你的來信。這裡有\n一些一般的漫畫卡通技巧，我試圖為各級\n推進的人們提供幫助。我希望這些將適用於\n您的工作。材料並不重要，只要您的工作\n重現並明顯減少。這就是你用重要的材料做\n的事情。我認為角色比笑話更重要。任何漫\n畫家都應該能夠提出有趣的噱頭，但最好\n的條帶有圓潤，複雜的字符，讀者可以關心。\n卡通人物不僅僅是站立道具來傳遞笑話。不\n要模仿其他條帶。編輯正在尋找新的和原創\n的東西。最重要的是，享受您的工作樂趣，\n並儘可能地練習寫作和繪畫。祝好運,\n W.B. Watterson", width/3.3, 360, width/2.5);


  } 
  var b = dist(mouseX,mouseY, 300,200);

  if (mouseIsPressed && b<75) {
  noStroke();
  fill(74,74, 125, 95);
  rect(width/4, 100, width/2, height);
  console.log("letter");

  fill(255);
  textFont(myFont);
  textSize(50);
  textAlign(CENTER, 360);
  text("親愛的先生：我喜歡言語。我喜歡肥胖的黃\n油，如軟泥，悶熱，糯，膩。我喜歡莊嚴，棱角分明，\n吱吱作響的話語，比如吝嗇，脾氣暴躁，狡猾，告\n別。我喜歡虛假的黑白字，比如殯葬師，清算人，扁\n桃體，黛米。我喜歡“V”字樣，如 Svengali，\nsvelte，bravura，verve。我喜歡鬆脆，脆弱，\n脆弱的詞語，如碎片，擒抱，爭吵，硬殼。我喜歡悶\n悶不樂，螃蟹，皺眉的話，比如 skulk，glower，\nscabby，churl。我喜歡 Oh-Heavens，我親切\n的，有著土地的緣故，比如狡猾，笨拙，上流社會，\n可怕。我喜歡優雅，華麗的詞彙，如 estivate，\nperegrinate，elysium，halcyon。我喜歡\n蠕蟲，蠕動，粉狀的話語，如爬行，鯨脂，尖叫，滴\n水。我喜歡竊笑，輕笑的話，比如牛仔，咕嚕聲，泡\n泡和打嗝。我比編劇更喜歡編劇這個詞，所以我決定\n辭去紐約廣告公司的工作並在好萊塢試試運氣，但在\n冒險之前我去了歐洲一年的學習，沉思和徘徊。我剛\n回來，我還是喜歡說話。我可以跟幾個人在一起嗎？\n Robert Pirosh", width/3.3, 220, width/2.5);


  } 

  var c = dist(mouseX,mouseY, 500,400);

  if (mouseIsPressed && c<50) {
  noStroke();
  fill(11,102, 35, 95);
  rect(width/4, 200, width/2, height);
  console.log("letter");

  fill(255);
  textFont(myFont);
  textSize(65);
  textAlign(CENTER, 360);
  text("親愛的，昨天我順從了取悅人民。他\n們為我歡呼，並大聲鼓掌，他們的手拍響\n起，就像海洋一樣消耗著我。但我不高興。\n感覺就像是為了取悅世界而放棄了我的心\n他們的歡呼聲空虛，海洋不再美麗。符合\n性的回報是每個人都喜歡你，但你自己。\n這就是我昨天學到的。今天我醒來後學到\n了新課。你給自己的獎勵遠大於每個人給\n你的獎勵。保持一致只是廉價零售。\n肅然，Rita Mae Brown", width/3.3, 420, width/2.5);


  } 

  var d = dist(mouseX,mouseY, 900,1200);

  if (mouseIsPressed && d<100) {
  noStroke();
  fill(17,30, 108, 95);
  rect(width/4, 200, width/2, height);
  console.log("letter");

  fill(255);
  textFont(myFont);
  textSize(65);
  textAlign(CENTER, 360);
  text("親愛的亨利，我剛剛看到了我們\n的照片 - 在TIFFANY的早餐 - 這\n次是你的分數。沒有音樂的電影有點像\n沒有燃料的飛機。無論工作如何完美，\n我們仍然在現實和現實世界中。你的音\n樂把我們全部提升了，讓我們飆升。我\n們不能用言語表達的一切或用你表達的\n行動表達給我們。你用這麼多的想像力，\n樂趣和美麗來做到這一點。你是最時髦\n的貓 - 也是最敏感的作曲家！親愛的\n漢克，謝謝你。\n滿滿的愛， Audrey Hepburn", width/3.3, 370, width/2.5);


  } 

  var e = dist(mouseX,mouseY, 1300,600);

  if (mouseIsPressed && e<85) {
  noStroke();
  fill(124,10, 2, 95);
  rect(width/4, 200, width/2, height);
  console.log("letter");

  fill(255);
  textFont(myFont);
  textSize(65);
  textAlign(CENTER, 360);
  text("親愛的 Nikki  - 感謝您的\n奉承。很高興知道我有一個忠實的粉絲，\n我相信你會做一個偉大的舞會日期（我\n沒有去我的 - 這是一個非常悲傷的故\n事）。不幸的是，我最近結婚了，我的\n妻子不允許我和可愛的16歲女孩一起\n去參加舞會。不過，問你我真的很酷。\n謝謝，祝大家晚上好。\n你的朋友，Conan", width/3.3, 430, width/2.5);


  } 

  var f = dist(mouseX,mouseY, 1600,150);

  if (mouseIsPressed && f<110) {
  noStroke();
  fill(196,145, 2, 95);
  rect(width/4, 80, width/2, height);
  console.log("letter");

  fill(255);
  textFont(myFont);
  textSize(55);
  textAlign(CENTER, 360);
  text("親愛的Nadeau先生：只要有一個正直\n的男人，只要有一個富有同情心的女人，傳染\n病就可能蔓延，而且場面並不荒涼。在一個糟\n糕的時刻，希望是留給我們的東西。我將在星\n期天早上起床，為時間和時間做出貢獻。水手\n們對天氣有一種表達：他們說，天氣是一個很\n好的虛張聲勢。我想我們的人類社會也是如此\n- 事情看起來很黑暗，然後在雲層中顯示出\n一個突破，所有的一切都有所改變，有時甚至\n是突然的。很明顯，人類在這個星球上生活了\n一團糟。但作為一個民族，我們可能擁有善良\n的種子，這些種子已經長時間等待在條件合適\n的時候發芽。男人的好奇心，他的無情，他的\n創造力，他的聰明才智使他陷入了深深的麻煩。\n我們只能希望這些相同的特質能讓他抓住自己\n的出路。繼續你的帽子。堅持你的希望。和時\n鐘一樣，明天是另一天。\n真誠的, E. B. White", width/3.3, 180, width/2.5);


  } 

  var g = dist(mouseX,mouseY, 1700,800);

  if (mouseIsPressed && g<35) {
  noStroke();
  fill(75,35, 84, 95);
  rect(width/4, 200, width/2, height);
  console.log("letter");

  fill(255);
  textFont(myFont);
  textSize(60);
  textAlign(CENTER, 360);
  text("親愛的讀者，同事，同鄉的漫畫家和朋\n友們：我一直想成為一名漫畫家，近50年來\n能夠做我喜歡的事情，我感到非常幸運。你\n們所有人都接受了史努比，查理布朗，露西\n和萊納斯以及所有其他PEANUTS角色一直是\n我的動力。對我來說，在2000年1月3日星期\n一（以及2月13日星期日發布）的每日發布後，\n我決定退出繪製PEANUTS漫畫，這對我來說\n很重要，以便專注於我的治療和結腸癌的恢復。\n雖然在最近的手術後我感覺好多了，但我希望\n能夠專注於我的健康和家庭，而不必擔心每天\n的最後期限。感謝您多年來的善意和支持，以\n及自我手術以來的美好祝福。\n真誠的，Charles M. Schulz", width/3.3, 350, width/2.5);


  } 

  var h = dist(mouseX,mouseY, 2000,250);

  if (mouseIsPressed && h<45) {
  noStroke();
  fill(114,133, 165, 95);
  rect(width/4, 200, width/2, height);
  console.log("letter");

  fill(255);
  textFont(myFont);
  textSize(70);
  textAlign(CENTER, 360);
  text("親愛的詹姆斯：在過去的十年左\n右，我一直在給剛結婚的人提出一些建\n議：不要說。要收回它太難了。我看到\n太多不必要的誠實所帶來的太多愛情。\n這些心理上的叮噹聲告訴人們要對他\n們的伴侶說出自己的想法，發洩他們的\n脾臟？他們完成了什麼？他們所生產\n的都是很多孤獨的自以為是的心靈和\n通風的脾臟。\nKen Kesey\nP.S. Faye和我已經結婚35年了。 KK", width/3.3, 340, width/2.5);


  } 
pop();
  


  }

  function lanterns(myX, myY, myVel, myXSize, myYSize){






  this.x = myX;
  this.y = myY;

  this.vel = myVel;

  this.xSize = myXSize;
  this.ySize = myYSize;

  this.move = function(){

    this.y += this.vel;

    if(this.y <= -100){


      this.y = height;
    }

   

  }

  this.display = function(){

    image(paperLantern, this.x, this.y, this.xSize, this.ySize);

  }

};

function lanterns2(myX, myY, myVel, myXSize, myYSize){






  this.x = myX;
  this.y = myY;

  this.vel = myVel;

  this.xSize = myXSize;
  this.ySize = myYSize;

  this.move = function(){

    this.y += this.vel;

  

   

  }

  this.display = function(){

    image(paperLantern, this.x, this.y, this.xSize, this.ySize);

  }

};