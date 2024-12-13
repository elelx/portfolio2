// these are kinda like what u intially see, the initals points
let randomY;
let randomX;
let size = 250; //the orginal circle size
let size1 = 150;
let size2 = 250;
let size3 = 200;
let eyesizewidth = 30;
let eyesizeheight = 40;
let mouthsizeleft = 160;
let mouthsizeright = 240;
let eyebrowheight = 170;
let eyebrowheight2= 170;
let redcolor = 255;
let bluecolor= 255;
let greencolor = 255;

function setup() { //runs once 

  let myCanvas = createCanvas(400, 400)
  myCanvas.parent("sketchbox");

}

function draw()  { //draws continously
  background(220);
  let faceHeight = mouseX/1+20;
  let faceWidth = mouseY/2 +30;

  //text 
  textSize(20);
  text("press the screen to disfigure his face", 40, 50);
 // textFont(font);

 // circle (mouseX, mouseY, size);
  
  //nose 
   randomX = random(200);
  randomY = random(60);
  
  //fcae
  
   rectMode(CENTER); //so the orgiin isnt the top conrer but in the middle
  push();
   noStroke();

   fill (220,170,140);
   circle (width/2, height/2, size);
  pop();
  
  
  
    //rect(width/2, height/2, faceWidth -30);
    // triangle(200, 200, 180, 240, 220, 240);
  
  //nose
  push();
   noStroke();
  fill (245, 83, 73);
    triangle (200, size3, size1,240, size2, 240);
  pop();

  //eyes
  push();
   noStroke();
  fill(25);
  ellipse (130, 190, eyesizewidth, eyesizeheight);
  ellipse (270, 190,   eyesizewidth,   eyesizeheight);
  pop();
  
  //  ellipse ( randomX, randomY, 20);
  
  //eyebrpws
  push();
   noStroke();
  fill(25);
  rect(130, eyebrowheight, 50, 20); //x y z h
  rect(270, eyebrowheight2, 50, 20); //x y z h
  pop();
  
  //mouth
  push();
   strokeWeight(5); 
   line(  mouthsizeleft, 270,  mouthsizeright, 270); //x1, y1, x2, y2
  pop();
  
  //cursor 
  textSize(50);
  fill (  redcolor,  greencolor,  bluecolor );
  text('⭑.ᐟ', mouseX, mouseY); 
  
}

function mousePressed(){
  
  // for noses
  size = random(100, 300); 
  size1 = random(130,180);
  size2 = random (230, 270)
  size3 = random (130, 200);
  
  //for eyes
  eyesizewidth = random( 10, 30);
  eyesizeheight = random( 10, 40);
  
  
  //for mouth points
  mouthsizeleft = random (190, 180);
  mouthsizeright = random (200, 260);
  
  //eyebrows
  eyebrowheight = random (90, 170);
  eyebrowheight2 = random ( 130, 170);
  
  //random text cursor clolrs
  redcolor= random(0,200);
  greencolor=random(0,200);
  bluecolor=random(0,150);
}