let offset=0;

function setup(){
  let myCanvas = createCanvas(400, 400)
  myCanvas.parent("sketchbox");
}

function draw() {
  background(255);
   
  drawBunny();
  drawCat();
  

  blendMode(MULTIPLY);
  noStroke();
  
  let spacing=width/20; //this is between the 

  
  
  for ( let i = 0; i< 70; i++){
    let remainder = i % 2 
    
    if ( remainder === 0 ){
      fill('cyan');
    }
    else {
      fill('red')
    }

    rect(i*width/10, 0, width/20, height);
  }
}

function mousePressed(){
  
  
}
function drawBunny(){
   beginShape();
  noFill();
  strokeWeight(5)
  stroke('red')
  //bunny oiollusion
  //head
  vertex(160, 155)
  vertex(130, 160);
  vertex(125, 170)
  vertex(120, 180);
  vertex(120, 190);
  vertex(120, 200);
  vertex(140, 210);
  vertex(160, 210);
  //body
 
  vertex(140, 280);
  vertex(120, 280);
  vertex(120, 290);
  vertex(160, 290);
  vertex(165, 260);
  vertex(190, 280);
  vertex(175, 280);
  vertex(175, 290);
  vertex(240, 290);
  vertex(255, 270);
  vertex(255, 250);
  vertex(220, 200);
  vertex(200, 180);
  vertex(240, 160);
  vertex(260, 130);
  vertex(230, 140)
  vertex(190, 170);
  vertex(200, 140);
  vertex(190, 110);
  vertex(180, 140);
  vertex(180, 170);
  // Stop drawing the shape.
  endShape(CLOSE);
  
    beginShape();
  noFill();
  strokeWeight(5)
  stroke('red')
// tail
  vertex(240, 230);
  vertex(235, 220);
  vertex(250, 210);
  vertex (270, 210);
  vertex(280, 220);
  vertex(270, 225)
  vertex(285, 230);
  vertex(290, 250)
  vertex(280, 255)
  vertex(290, 260)
  vertex(285, 290);
  vertex(280, 294);
  vertex(260, 294)
  vertex(240, 290);
  vertex(255, 270);
  vertex(255, 250);
  
  //eyes
  endShape(CLOSE);
  strokeWeight(5)
  stroke('red' )
  line(150, 180, 150, 190);

}

function drawCat() {
   beginShape();
  noFill();
  strokeWeight(5)
  stroke('cyan');
// head
  vertex(155, 190)
  vertex(135, 180)
  vertex(130, 160)
  vertex(150, 140)
  vertex(160, 110)
  vertex(170, 120)
  vertex(210, 120)
  vertex(220, 110)
  vertex(230, 140)
  vertex(250, 160)
  vertex(245, 180)
  vertex(220, 190)
  
  endShape(CLOSE);
  
     beginShape();
  noFill();
  strokeWeight(5)
  stroke('cyan');
// body
  vertex(220, 190)
  vertex( 280, 210)  
  vertex(290, 220)
  vertex(290, 230)
  vertex(280, 240)
  vertex(240, 235)
  vertex(270, 290)
  vertex(265, 300)
  vertex(220, 300)
  vertex(220, 270)
  vertex(170, 270)
  vertex(170, 300)
  vertex(120, 300)
  vertex(115, 290)
  vertex(140, 235)
  vertex(100, 240)
  vertex(90, 230)
  vertex(90, 220)
  vertex(100, 210)
  vertex(150, 190)
  endShape(CLOSE);
  
  //eyes
   strokeWeight(5)
  stroke('cyan' )
  line(170, 150, 170, 160);
  line(210, 150, 210, 160)

}

