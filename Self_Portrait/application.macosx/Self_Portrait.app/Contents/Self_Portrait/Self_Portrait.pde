size(800, 900);
background(2,85,95);




//circles
noStroke();
fill(12,133,144,95);
ellipse(400,100, 800,800);
fill(35,213,201,95);
ellipse(400,100, 500,500);
fill(118, 89, 111,95);
ellipse(400,100, 330,330);
fill(187,93,94);
ellipse(400,100, 210,210);
fill(129,226,225);
ellipse(400,100, 130,130);
fill(221, 92, 87);
ellipse(400,100, 80,80);
fill(255,255,255);
ellipse(400,100, 50,50);


//sharp path shape
noStroke();
beginShape();
fill(239,112,93);
vertex(400,390);
vertex(400,440);
vertex(640, 350);
vertex(640, 300);
endShape();

noStroke();
beginShape();
fill(249,172,94);
vertex(134,390);
vertex(134,440);
vertex(420, 650);
vertex(420, 600);

endShape();

noStroke();
beginShape();
fill(246,227,150);
vertex(100,800);
vertex(532,800);
vertex(732, 600);
vertex(400, 390);
vertex(640, 300);
vertex(450, 300);
vertex(134, 390);
vertex(420, 600);
vertex(100,800);
endShape();

noStroke();
beginShape();
fill(249,172,94);
vertex(100,800);
vertex(532,800);
vertex(532, 850);
vertex(100, 850);

endShape();

noStroke();
beginShape();
fill(239,112,93);
vertex(532,800);
vertex(532, 850);
vertex(732, 650);
vertex(732, 600);

endShape();




//soft path shape
fill(255,255,255,80);
noStroke();
beginShape();
curveVertex(100,800);
curveVertex(532,800);
curveVertex(732, 600);
curveVertex(400, 390);
curveVertex(640, 300);
curveVertex(450, 300);
curveVertex(134, 390);
curveVertex(420, 600);
curveVertex(100,800);
curveVertex(532,800);
endShape();



//legs
fill(76,48,47);
triangle(500, 300, 505, 230, 495, 230);
triangle(515, 300, 520, 230, 510, 230);

//nonvisible arm
fill(255,255,255);
triangle(504,150, 502, 160, 410, 140);

//body
fill(255,255,255);
beginShape();
curveVertex(470,250);
curveVertex(580,230);
curveVertex(507,130);
curveVertex(470,250);
curveVertex(580,230);
endShape();

//visible arm
fill(76,48,47);
triangle(504,158, 502, 167, 410, 150);

//head
fill(255,255,255);
ellipse(507, 110, 60,60);

//hair
//head
fill(76,48,47);
beginShape();
curveVertex(487, 80);
curveVertex( 540, 85);
curveVertex(535, 130);
curveVertex(487, 80);
curveVertex( 540, 85);
curveVertex(535, 130);
endShape();

//ponytail
fill(76,48,47);
beginShape();
curveVertex(540, 85);
curveVertex(563, 70);
curveVertex(590, 90);
curveVertex(570, 150);
curveVertex(558, 100);
curveVertex(540, 85);
curveVertex(563, 70);
curveVertex(590, 90);
curveVertex(570, 150);
curveVertex(558, 100);
endShape();

//ballet shoe
fill(245,168,188);
ellipse(410, 100, 30, 60);
fill(255,255,255);
ellipse(410, 93, 20, 35);

stroke(245,168,188);
strokeWeight(4);
line(399, 100, 421, 90);
line(399, 90, 417, 100);

rotate(radians(13));
fill(245,168,188);
ellipse(400, 30, 30, 60);
fill(255,255,255);
ellipse(400, 23, 25, 40);

stroke(245,168,188);
strokeWeight(4);
line(389, 30, 411, 20);
line(389, 20, 409, 30);

//heart
rotate(radians(-13));
fill(274,200,200);
noStroke();
beginShape();
curveVertex(505,180);
curveVertex(520,200);
curveVertex(535, 180);
curveVertex(527.5, 170);
curveVertex(520, 183);
curveVertex(512.5, 170);
curveVertex(505,180);
curveVertex(520,200);
curveVertex(535, 180);
curveVertex(527.5, 170);
curveVertex(520, 183);
curveVertex(512.5, 170);
endShape();

//squares
fill(248,236,183);
beginShape();
vertex(320,250);
vertex(350,250);
vertex(360,235);
vertex(330,235);
endShape();

beginShape();
vertex(120,550);
vertex(150,550);
vertex(160,535);
vertex(130,535);
endShape();

beginShape();
vertex(730,800);
vertex(760,800);
vertex(770,790);
vertex(740,790);
endShape();

beginShape();
vertex(680,170);
vertex(710,170);
vertex(720,150);
vertex(690, 150);
endShape();

beginShape();
vertex(630,100);
vertex(645,100);
vertex(650,90);
vertex(635, 90);
endShape();


beginShape();
vertex(550,440);
vertex(565,440);
vertex(570,430);
vertex(555, 430);
endShape();

beginShape();
vertex(700,500);
vertex(715,500);
vertex(720,490);
vertex(705, 490);
endShape();


beginShape();
vertex(100,200);
vertex(110,200);
vertex(115,195);
vertex(105, 195);
endShape();


beginShape();
vertex(200,150);
vertex(215,150);
vertex(220,140);
vertex(205, 140);
endShape();

beginShape();
vertex(240,650);
vertex(250,650);
vertex(255,645);
vertex(245, 645);
endShape();
