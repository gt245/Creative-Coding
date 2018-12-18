let timer = 31536000 
var seeletter = new Boolean(true);
var movingLanterns = new Boolean(false);


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
var myFont2;

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

	background = loadImage("assets/japan.jpg") 
  myFont = loadFont("assets/japanese.otf")
  paperLantern = loadImage("assets/blossom.png")
  hands = loadImage("assets/hands.png")
  
}

function setup() {
 



  createCanvas(2200, 1400);

  myLantern1 = new lanterns(100,  - 200, 2, 70, 70);
  myLantern2 = new lanterns(500,  - 300, 1, 50, 50);
  myLantern3 = new lanterns(1450, - 330, 2, 170, 170);
  myLantern4 = new lanterns(900, - 300, 1.5, 130, 130);
  myLantern5 = new lanterns(1200,  - 360, 2.5, 150, 150);
  myLantern6 = new lanterns(1800, - 110, 0.5, 75, 75);
  myLantern7 = new lanterns(1950, - 210, 1, 120, 120);
  myLantern8 = new lanterns(330,  - 150, 0.8, 60, 60);
  
  myLantern9 = new lanterns2(width/2.06, 130, 1.5, 270, 270);


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


    image(background,0,0, width, height);

      
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
  textAlign(CENTER);
  textSize(80);
  text("あなたの将来の自己に手紙を書く...", width/4, 70, width/2, height);
  fill(0);
  textSize(40);
  text("右矢印キーを押してあなたのレターサクラを送ります。", width/4, height - 130, width/2, height);


  
  fill(254,127,156);
  textFont(myFont);
  textSize(70);
  text(myString, width/3.5, 360, width/2.4);

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

  image(hands, width/2.3, -100, 450, 350);

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

    
    if(this.y<=0 || this.y >=height){
    

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

    fill(255, 255, 255, 70);
    noStroke();

    ellipse(170, 900, 80,80);
    image(paperLantern,142,865, 60, 60);
    ellipse(300, 200, 150,150);
    image(paperLantern,245,130, 120, 120);
    ellipse(500, 400, 100,100);
    image(paperLantern,465,355, 75, 75);
    ellipse(900, 1200, 200,200);
    image(paperLantern,830,1110, 150, 150);
    ellipse(1300, 600, 170,170);
    image(paperLantern,1240,520, 130, 130);
    ellipse(1600, 150, 220,220);
    image(paperLantern,1525,50, 170, 170);
    ellipse(1700, 800, 70,70);
    image(paperLantern,1677,770, 50, 50);
    ellipse(2000, 250, 95,95);
    image(paperLantern,1970,210, 70, 70);



    
push();
fill(255);
  textFont(myFont);
textAlign(CENTER, CENTER);
  
  textSize(500);
  text(timer, width/2, height/2);
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
  textSize(43);
  textAlign(CENTER, 360);
  text("親愛なるトッド、あなたの手紙をありが\nとう。 ここに私が進歩のすべてのレベルで人\n々に役立つようにした一般的なコミックストリ\nップの漫画のヒントがあります。私はこれらが\nあなたの仕事に当てはまることを願っています。\nあなたの仕事が再現し明確に減少する限り、素\n材は重要ではありません。それはあなたが重要\nな材料を使って何をするのかです。私は文字が\nジョークよりも重要だと思う。どの漫画家も面\n白いギャグを思いつくことができなければなり\nませんが、最良のストリップは丸みを帯びた複\n雑な文字で、読者が気にすることができます。\n漫画のキャラクターは、冗談を伝えるために立\nっている小道具以上のものでなければならない\n他のストリップを模倣しないでください。編集\n者は何か新しいものとオリジナルを探していま\nす。最も重要なことは、あなたの仕事を楽しく\nし、書くことと練習を練習することです。\n 幸運にも、W.B. Watterson", width/3.3, 330, width/2.5);


  } 
  var b = dist(mouseX,mouseY, 300,200);

  if (mouseIsPressed && b<75) {
  noStroke();
  fill(74,74, 125, 95);
  rect(width/5, 80, width/1.7, height);
  console.log("letter");

  fill(255);
  textFont(myFont);
  textSize(40);
  textAlign(CENTER, 360);
  text("拝啓：私は言葉が好きです。私は、泡立つようなバターのよ\nうな言葉が好きです。私は、厳しい、カンタン、ペチュニア、\nバレーディックなど、厳粛で角張った独特の言葉が好きで\nす。私は葬儀官、清算人、トンソン、デミモンデのような\n偽の、黒白の言葉が好きです。私はSvengali、\nsvelte、bravura、verveのような という言葉を好\nきです。私はクランチー、脆い、割れ目のような言葉が、枝\n打ち、グラップル、ジョギング、地殻のようなものが好き\nです。私はすくいが好きで、ひそめになったり、ひそかに\n言葉を出したりします。私はああ、天国が好きです。私の\n優雅な土地の言葉、トリッキー、タッカー、優しさ、恐ろし\nいものなど。私は、estivate、peregrinate、\nelysium、halcyonなどのエレガントで花のような言葉\nが好きです。私はワイルド、スクワミ、ミレーのような言葉\nが好きです。例えば、クロール、脂肪、鳴き声、ドリップな\nど。私はsniggly、カウリク、グルグル、バブル、おしゃ\nぶりのような言葉を笑うのが好きです。私はコピーライタ\nーよりも脚本家の方が好きなので、ニューヨークの広告代\n理店で仕事をやめ、ハリウッドで私の運を試してみることに\nしましたが、飛び降りる前に私は研究、熟考、馬鹿げた1年\n間ヨーロッパに行きました。私は戻ってきましたが、私は\nまだ言葉が好きです。私はあなたといくつか持っていても\nいいですか？\nRobert Pirosh", width/3.3, 185,width/2.5);


  } 

  var c = dist(mouseX,mouseY, 500,400);

  if (mouseIsPressed && c<50) {
  noStroke();
  fill(11,102, 35, 95);
  rect(width/4, 200, width/2, height);
  console.log("letter");

  fill(255);
  textFont(myFont);
  textSize(47);
  textAlign(CENTER, 360);
  text("私の親愛なる、昨日私は人々を喜ば\nせるために順応した。彼らは私のために応\n援し、彼らの手の拍手が私を消費しようと\nする海のように聞こえるほど拍手をかけま\nした。しかし、私は幸せではなかった。私\nは世界を喜ばせるために私の心を捨てたよ\nうな気がしました。彼らの歓声は空にな\nり、海はもはや美しくはありませんでした。\n適合の報酬は、誰もが自分を好きであると\nいうことです。それは私が昨日学んだこと\nです。今日私は新しいレッスンを学んだこ\nとを知りました。あなたが与えた報酬は、\n誰もがあなたに与えた報酬よりもはるかに\n大きいということです。適合性を放置する\nことは安価な小売に過ぎない。\n 本当にあなたのもの,\n Rita Mae Brown", width/3.3, 360, width/2.5);


  } 

  var d = dist(mouseX,mouseY, 900,1200);

  if (mouseIsPressed && d<100) {
  noStroke();
  fill(17,30, 108, 95);
  rect(width/4, 200, width/2, height);
  console.log("letter");

  fill(255);
  textFont(myFont);
  textSize(47);
  textAlign(CENTER, 360);
  text("親愛なるヘンリー、私はちょうど私\n達の写真を見ました- ティファニーの\n朝 - あなたのスコアでこの時間。音楽\nのない映画は、燃料がない飛行機のよう\nなものです。しかし、美しくは仕事は終わ\nりましたが、私たちはまだ地上にあり、現\n実の世界にあります。あなたの音楽は私\nたちをすべて持ち上げ、私たちを急上昇さ\nせました。あなたが私たちのために表現し\nた行動で言葉で表現することはできません。\nこれほど多くの想像力、楽しみ、そして美\nしさでこれをやったことがあります。あな\nたは猫の一番のヒップホップであり、最も\n敏感な作曲家です！ハンク、ありがとう、\nありがとう。\nたくさんの愛, Audrey Hepburn", width/3.3, 350, width/2.5);


  } 

  var e = dist(mouseX,mouseY, 1300,600);

  if (mouseIsPressed && e<85) {
  noStroke();
  fill(124,10, 2, 95);
  rect(width/4, 200, width/2, height);
  console.log("letter");

  fill(255);
  textFont(myFont);
  textSize(50);
  textAlign(CENTER, 360);
  text("親愛なるNikki  - あなたの非常\nにお世辞なオファーに感謝します。私は\nそんなに献身的なファンを知っているこ\nとを知ってうれしいです。そして、私は\nあなたが素晴らしいお祝いの日を作るこ\nとを確信しています（私は私のところに\n行かなかった - それは非常に悲しい話\nです）。残念ながら、私は最近結婚して\nしまい、妻は私が可愛い16歳の女の子\nと一緒にプロムに行くことを許可してい\nません。それでも、私に尋ねるのはとて\nも涼しかったです。ありがとう、素晴ら\nしい夜を過ごす。\nあなたの友達、, Conan", width/3.3, 360, width/2.5);


  } 

  var f = dist(mouseX,mouseY, 1600,150);

  if (mouseIsPressed && f<110) {
  noStroke();
  fill(196,145, 2, 95);
  rect(width/4, 200,width/2, height);
  console.log("letter");

  fill(255);
  textFont(myFont);
  textSize(41);
  textAlign(CENTER, 360);
  text("親愛なるナデアウ：正直な人が1人いる\n限り、思いやりのある女性が1人いる限り、そ\nの伝染は広がり、場面は荒れ果てていません。\n悪い時に、私たちに残されているものが希望\nです。私は日曜日の朝起きて、秩序と堅実に\n貢献するために時計を巻くでしょう。船員は\n天気を表現しています。彼らは天気が素晴ら\nしいと信じています。私たち人間社会にも同\nじことが起こると思います。物事は暗く見え、\nその後雲の中に壊れ目が現れ、すべてが変わ\nります。人類がこの惑星で人生の奇妙な混乱\nを起こしていることは明らかです。しかし、\n人としては、条件が正しい時に芽吹くために\n待っている、長生きしている善の種をおそら\nく抱えているでしょう。人間の好奇心、執拗\nさ、独創性、独創性は彼を深刻な問題に導い\nた。私たちは、これらの同じ特性が彼の脱出\nを可能にすることを願っているに過ぎません。\nあなたの帽子に乗せてください。あなたの希望\nに気をつけてください。明日はもう一日ですか\nら、時計を巻いてください。\n敬具, E. B. White", width/3.3, 300, width/2.5);


  } 

  var g = dist(mouseX,mouseY, 1700,800);

  if (mouseIsPressed && g<35) {
  noStroke();
  fill(75,35, 84, 95);
  rect(width/4, 200, width/2, height);
  console.log("letter");

  fill(255);
  textFont(myFont);
  textSize(46);
  textAlign(CENTER, 360);
  text("近くの読者、同僚、仲間の漫画家や友\n人たち：私はいつも漫画家になりたいと思\nっていました。私が愛していることを50年\n近くやっていることができて非常に恵まれ\nています。スヌーピー、チャーリーブラウ\nン、ルーシー、リヌス、そして他のすべて\nのPEANUTSのキャラクターを抱きしめて\nきた皆さんは私にとって常に動機付けられ\nています。 2000年1月3日月曜日（そし\nて2月13日の日曜日）の毎日のリリース\nの後、私がPEANUTS漫画を描くことか\nら引退することを決定したことを個人的\nに伝えることが重要です。結腸癌からの\n回復。私は最近の手術後に気分は良くな\nりますが、毎日の締め切りの心配なしに私\nの健康と家族に集中したいと思います。長\n年のご愛顧とご支援、ありがとうございま\nした。\n 敬具, Charles M. Schulz", width/3.3, 300, width/2.5);


  } 

  var h = dist(mouseX,mouseY, 2000,250);

  if (mouseIsPressed && h<45) {
  noStroke();
  fill(114,133, 165, 95);
  rect(width/4, 200, width/2, height);
  console.log("letter");

  fill(255);
  textFont(myFont);
  textSize(54);
  textAlign(CENTER, 360);
  text("親愛なるジェームス：ここ10年\nほど前に私がちょうど結婚してきたア\nドバイスがあります：それを言っては\nいけません。それを取り戻すのは難し\nいです。私は、あまりにも多くの無駄\nな正直さによってあまりにも多くの愛\nが惑わされているのを見ました。人々\nが心を仲間に話し、脾臓を通気するよ\nうに伝える心理学的な鼎洞？彼らは\n何を達成しますか？彼らが生み出すの\nは、孤独な独善的な心や換気された脾\n臓です。\nKen Kesey \nP.S.フェイ＆私は35年結婚していま\nす。 KK", width/3.3, 330, width/2.5);


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

    if(this.y >= height + 100){


      this.y = -100;
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