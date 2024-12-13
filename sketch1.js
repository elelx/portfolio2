function setup() {
  let myCanvas = createCanvas(400, 400)
  myCanvas.parent("sketchbox");
}

//Fluffy, 3 feet 11 inches tall and white, is a very common animal but isn’t alive.I always sleep with he.

function draw() {
  background(67, 84, 90);
  noStroke();
  fill (230);
  //ground
  push();
  fill (25)
  rect(50, 290, 300,80)
  pop();
  
  //body
  ellipse (200, 210, 140,220); //xywh
  ellipse ( 200, 270, 130, 95 ); //fluff
    ellipse ( 200, 240, 140, 95 );
      ellipse ( 200, 210, 150, 95 );
     ellipse ( 200, 180, 145, 95 );
    ellipse ( 200, 160, 135, 95 );
      ellipse ( 200, 140, 110, 95 );

  //legs
  ellipse (160, 300, 40, 70);
  ellipse (240, 300, 40, 70);
  
  
  //belly
  push();
  fill ( 245)
  ellipse ( 200, 230, 120, 165);
  pop();
  
  //arms
  push();
  rotate(0.1); 
  translate (-1, 0) //the position x y

  ellipse (150, 160, 40, 30);
  ellipse (260, 160, 40, 30);
  pop();
  
   //ears
  ellipse (170, 60, 30, 30);
  ellipse (230, 60, 30, 30);
  
  //ears 2
  push();
  blendMode(OVERLAY); //faint white
  ellipse ( 170, 60, 20, 20);
  ellipse ( 230, 60, 20, 20);
  pop();
  
  //head
  circle (200, 100, 90);
  
   push();
  //snout
  fill ( 200 )
  ellipse ( 200, 100, 65, 50)
  pop()
    
  push();
  //nose nose
  fill (80);
  ellipse (200, 90, 30, 20)
  pop();
  
  //eyes
  push();
  fill (20);
  circle (170, 85, 8);
  circle (230, 85, 8);
  pop();

   //scarf
  push ();
  fill(139,0,10);
 arc ( 200,112, 100, 30, TWO_PI, PI ); // x y w h / x and y is location/ w and his width and height 
  rect (160, 120, 30, 100);
  pop();
   
  
  //z head
  push ();
  fill (210, 180,140)
  circle ( 285, 190, 30);
  pop();
  
  //eyes
  push ();
  fill (20)
  ellipse ( 278, 190,5, 10);
  ellipse ( 286, 190,5, 10);
  pop();
  
  //neck
  push ();
  fill (210, 180,140)
  rect (280, 200, 10, 20);
  pop();
  
  //body
  push ();
  fill (185, 216, 260);
  square ( 275, 210, 30)
  pop ();
  
  
  //arms
  push ();
  fill (210, 180,140)
  ellipse (260, 220, 60, 15);
  circle ( 230, 220, 20); //hand
  pop();
  
  //shirt arm
  push ();
  fill (110, 175, 255);
  rect ( 275, 212, 14, 15)
  pop ();
    
  //shoes
  push ();
  fill ( 200, 170, 0);
  ellipse ( 283, 285, 30, 20);
  fill ( 255, 235, 0);
  ellipse ( 293, 285, 30, 20);
  pop();
  
  //pants
  push ();
  fill (23);
  rect (275, 239, 20, 40);
  fill (50);
  rect (285, 239, 20, 40);
  pop();


 
}