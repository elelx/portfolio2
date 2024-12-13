//----
//THE FISH REPRESENTS THE HEART BEAT

//fish sizes
let fishWidth;
let fishHeight;

//fin sizes
let finLeftTopX;
let finLeftTopY;
let finLeftBottomX;
let finLeftBottomY;
let finRightTopX;
let finRightTopY;
let finRightBottomX;
let finRightBottomY;

//HEARTBEAT
let heartbeat = 0;

//seconds circle random places 
let circleX = 200;
let circleY = 300;

//anxious circles
let circleX1 = 275;
let circleY1 =300;

let circleX2 =300;
let circleY2 = 200;

const timeIncerement = 1.1; //const means cant change
const incrementAmt =10;
//timeIncere. means every 10 seconds its changing because deltaTime / 1000 is 1 second

//---------------------------


function setup() {


  let myCanvas = createCanvas(600, 600)
  myCanvas.parent("sketchbox");

  angleMode(DEGREES); //this helps so its in degrees and not radians so I am able to just wrtie 90, 180, 270, eetc.
      
  //inital sizes
  //body
  fishWidth = 18; 
  fishHeight = 10 ; 
  
  //fins
  finLeftTopX = 200;
  finLeftTopY = 155 ;
  
  finLeftBottomX =200;
  finLeftBottomY = 145;
  
  finRightTopX = 225 ;
  finRightTopY = 145;
  
  finRightBottomX = 225;
  finRightBottomY = 155;
  
  heartbeat = 0; 
  
}

function draw() {
  background(22);
  noStroke();
  
//clock code-------------
  
  let s = second();
  let m = minute();
  let h = hour();
  
  heartbeat += deltaTime/1000; //this is for seconds not miliseconds
  
  
  
//HEARTBEATCODE-------------------
  
  //if statements
  if (heartbeat>=timeIncerement){
    //if the timer is greater than 10 seconds
      fishWidth += 5;
      fishHeight += 5;
    
    //fins
    
  finLeftTopX += 5;
  finLeftTopY -= 5; //decrease Y subtract it so it can move up the graph rather than down
    
  finLeftBottomX += 5;
  finLeftBottomY += 5;
    
  finRightTopX += 5;
  finRightTopY -= 5;
    
  finRightBottomX += 5;
  finRightBottomY += 5;
    
    heartbeat = 0; //resets after adding 5 after 10 seconds
    
    if (fishWidth && fishHeight >= 20){
      
      fishWidth = 18; 
     fishHeight = 10 ; 

                   
     finLeftTopX = 200;
  finLeftTopY = 155 ;
  
  finLeftBottomX =200;
  finLeftBottomY = 145;
  
  finRightTopX = 225 ;
  finRightTopY = 145;
  
  finRightBottomX = 225;
  finRightBottomY = 155;
    }   
  } 
  
//----------------------------
  //clock body
  
//anxious clocks
  
  // circleX1 = random (280, 335);
  // circleY1 = random (265, 330);
  
  // circleX2 = random (280, 335);
  // circleY2 = random (265, 300);

//WHITE EYE BALL -------------------------------------
  push();
  
  circleX1 = random(290, 310);
  circleY1 = random(310, 290);
  
  fill(255);
  circle (circleX1, circleY1, 350);
  
  // stroke(100, 0, 0);
  // strokeWeight(10);
  // //(x1, y1, x2, y2)
  // line (125, 290, 160, 270);
  // line (135, 280, 150, 240);
  // line (142, 260, 155, 250);
  
  pop();
  
// BIG LIGHT BLUE CIRCLE -------------------
  //hour 
  push ();
  fill ('lightBlue');
  circle (300, 300, h*18)
  pop();
  
  
//seconds SHAKING CLOCK-------------------------
  circleX = random(290, 300);
  circleY = random(290, 300);
  
  push();
  stroke(51);
  strokeWeight(5);
  fill (255);
  circle( circleX, circleY, s*3)
  
  fill('navy')
    circle( circleX, circleY, s*2)

  pop();
  
//minute, TRANS. BLUE -----------------
  push();
  fill (30,0, 100, 90);
  translate(width/2,height/2); // center
  rotate(-90);
  arc(0, 0, 200, 200, 0, m*6)  
  pop();
  
//----------------------------
//FISH BODY
  push();
  fill ('white');
  ellipse ( 290, 300, fishWidth*3, fishHeight*3);
  pop();
  
//FISH eye blue --------------------------- 
  push();
  fill (0,0, 138);
  ellipse ( 275, 300, 5, 8);
  pop();
  

//fish fins-------------------------
  push();
  
  fill(255);
    //fins
  //quad ( x1, y1, x2 right top, y2 right bottom, x3,  y3, x4 left bottom,y4)
  //x1 left top y1 x4, y4 is left side, 

  quad(finLeftTopX*1.5,finLeftTopY*2,finRightTopX*1.5, finRightTopY*2, finRightBottomX*1.5, finRightBottomY*2, finLeftBottomX*1.5, finLeftBottomY*2) ;

  pop(); 
  
//text ---------------------
  circleX = random(290, 300);
  circleY = random(540, 550);
  
  circleX1 = random(80, 400);
  circleY1 = random(100, 200);
  
  circleX2 = random (100, 300);
  circleY2 = random (400, 600);
    //text 
  fill('red');
  textStyle(BOLD);
  textSize(40);
  text('DO I STINK?', circleX, 100);
  text('DO I STINK?', circleX1, circleY1);

  text('DO I STINK...?',50, circleY);
  text('DO I STINK...?',circleX1, circleY1);
  
  text('DO I STINK?', circleX2, 200);
  text('DO I STINK?', circleX2, circleY2);

}