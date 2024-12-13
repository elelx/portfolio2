function setup() {

  let myCanvas = createCanvas(400, 600)
  myCanvas.parent("sketchbox");
}

function draw() {
  background(220);
  rectMode(CENTER);
  angleMode(DEGREES);
  noStroke();
  
//seperators---------------------------
  push();
  noStroke();
  //layer1
  fill(255);
  rect(200, 100, 400, 200);
  //layer 2
  fill(200);
  rect(200, 300, 400, 200);
  //layer 3
  fill(150);
  rect(200, 500, 400, 200);
  pop();
//---------------------------------------


//body-----------------------------------------------
  push();
  fill(60)
  ellipse(220, 290, 160, 230)
  rect( 220, 345, 160, 135)
  //scarf
  
  push();
  noFill();
  strokeWeight(20);
  fill(25)
  arc(200, 200, 180, 180, 0, PI + QUARTER_PI);
  pop();
  
//arms-------------
  fill(80); 
  
    //left arm
  circle (170,260, 30);
  rect (170, 290, 30, 60);
  
  //right arm
  circle(270, 260, 30);
  rect (270, 290, 30, 60);
  
  //left paw
  drawPawLeft(170,320, 30);
  
  //right paw
  drawPawRight(270, 320, 30);
  



  pop();

  
//legs-----------------------------------------------

  push();
  fill(40)
  quad(140, 400, 120, 460, 320, 460, 300, 400); //top squid
//"fins"
  triangle(140, 400, 90, 510, 240, 400);//left 1
  triangle(300, 400, 350, 520, 180, 400);//far right
  triangle(140, 400, 140, 560, 280, 400);//left 2
  triangle(300, 400, 290, 560, 170, 400);//right 2
  triangle(150, 400, 220, 580, 280, 400); //middle
  
//belly circle thing
  fill(20);
  circle( 220, 430, 40);
  
  fill(50);
  circle(200, 450, 20);
  
  fill(80);
  circle (215, 450, 10);
  
  arc(200, 470, 60, 5, -5, -160);

  pop();
  

//head-----------------------------------------------------
  push();
//back ear---------------------------
  push();
  fill(89);
  rotate(28);
  ellipse(250,0, 70,110)
  pop();
  
// //neck
  fill(100);
  rect(220, 180, 100, 40);
  
//back wiskers-----------------------
  push();
  stroke(25);
  strokeWeight(3);
  line(40, 140, 145, 160);
  line(35, 160, 150, 166);
  pop();
  
//head--------------------------
  fill (100);
  ellipse(220, 156, 140, 90)
  triangle(90, 182, 200, 200, 183, 118);
  
//crown------------------------
  push();
  rectMode(CENTER);
  fill(130);
  translate(20,-55 )
  rotate(15)
  rect(250,70, 50, 50)
  pop();
  
  //crown tops
  push();
  fill(130);
  triangle(223, 56, 260, 100, 230, 20);//left
  triangle(220, 70, 290, 100, 265, 25);//middle
  triangle(240, 100, 280, 100, 300, 30 );//right
  pop();
  
//crown gen
  push();
  translate(20,-55 )
  rotate(15)
  fill(25);
  ellipse( 260, 70, 10, 40);
  pop();
  
//front ear---------------------
  push();
  fill(100);
  rotate(35);
  ellipse(290,-50, 80,110)
  pop();
  
//front whiskers----------------
  push();
  stroke(25);
  strokeWeight(3);
  line(260, 170, 365, 145);
  line(255, 180, 370, 186);
  pop();

//nose--------------------------------
  fill(125)
  ellipse(100, 178, 30, 20);
  
//eye-------------------------------------
  quad(210, 180, 245, 175, 250, 150, 200, 170)
  
  //pupil
  fill(25)
  ellipse(230, 164, 10, 20)
  
// scar
  fill(190,81,81)
  quad(195, 195, 165, 140, 170, 140, 190, 160);
  pop();
   

}
//paws-------------------------------------
function drawPawLeft(posX, posY, size){
  
  circle(posX-10, posY +5, 20);
  circle(posX -5, posY +10, 20);
  circle(posX +5, posY +10, 20);
  circle(posX +15, posY -5, 20);
  
//paw beans
  push();
  fill(102)
  circle(posX-12, posY +4, 8);
  circle(posX-6, posY +11, 8);
  circle(posX+6, posY +11, 8);
  circle(posX+15, posY -5, 8);
  circle(posX+2, posY-3, 15)
  pop();
  
}

function drawPawRight(posX, posY, size){
  
  circle(posX +10, posY +5, 20);
  circle(posX +5, posY +10, 20);
  circle(posX -5, posY +10, 20);
  circle(posX -15, posY -5, 20);

}

