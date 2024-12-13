let clickedOnce = false;
let buttonClicked = "";


let biteHours = [3, 5, 6, 3, 1, 3, 1]; // data set of the amount of hours I played animal crossing

//let vertexPoints = []; //to build out the animal crossing leaf shape :3

let dayNames = []; // Mon, Tues, etc..

let leafVertexes = [ [380, 220], [340, 200], [270, 200], [220, 220], [180, 250], [150, 300], [125, 310], [130, 320], [135, 322], [ 160, 335], [200, 355], [300, 370], [400, 355], [425, 330], [445, 270], [440, 240], [440, 240], [410, 225], [380, 220]
];

let leafStem = [ [380, 220], [420, 200], [400, 180], [390, 175], [370, 220]
];

let leafTriangle = [ [380, 220], [350, 260], [280, 300], [250, 300], [280, 290], [350, 240], [370, 220]
  
];

let spacing =10

let a = 'pink';

//-----------------------------------------------------

function setup() {
  let myCanvas = createCanvas(600, 600)
  myCanvas.parent("sketchbox");
  
}

function draw() {
  background(250,250,190);

  dayNames = ['  Thursday  ','  Friday  ', '  Saturday  ', '  Sunday  ','  Monday  ', '  Tuesday  ', '  Wednsday  '];
  
//animal crossing leaf diagram
  
  drawLeaf(); //function to draw my leaf
  
  drawCircles(); //function to draw my circlesssss
  

}

function drawLeaf(){
  push();
   fill(116,224,170);
    stroke('white')
  strokeWeight(5)
  
  beginShape();
  
  for ( let i = 0; i < leafVertexes.length; i++){ //basically i is grabbing the numebrs from leaf vertexes and it will keep going up by one, after its takes the x and y vertexes
    vertex(leafVertexes[i][0], leafVertexes[i][1]);
  
  }
    endShape();

  beginShape();
  
  for ( let j = 0; j < leafStem.length; j++){
    vertex(leafStem[j][0], leafStem[j][1]);
  }
  
  endShape();
  
  beginShape();
  for (let h = 0; h <leafTriangle.length; h++){
    vertex( leafTriangle[h][0], leafTriangle[h][1]);
  }
  endShape();
  

  noStroke(); //------ these are the 7 rectangles for the datees
  
  fill('pink');
  rect(30, 450, 83, 20)
  
  fill(116,224,170)
  rect(113, 450, 60, 20)
  
  fill(190,232,147)
  rect(173, 450, 80, 20)
  
  fill(219,191,158)
  rect(253, 450, 75, 20)
  
  fill(196,217,169)
  rect(328, 450, 75, 20)
  
  fill(12,198,184)
  rect(403, 450, 75, 20)
  
  fill(139,157,242);
  rect(478, 450, 90, 20)
pop();
 //----------- these are the texts that i have 
  push();
  fill('black');
  textSize(15)
  text(dayNames , 30, 465); // the day names
  
  textSize(25);
  rectMode(CENTER);
  fill(86,186,90);
  stroke(30);
  text('how many hours did I play animal crossing?', 65, 50)
  
  textSize(20);
  text('Each "bite" aka circle counts for an hour', 125, 100);
  
  textSize(25);
  text('press me ! the rectangles! ', 160, 550);
  pop();
}

// function mousedPressed(){
  
//   if ( mouseX>200 && mouseX<300 ){
//     a = 20;
//   }
  
  
// //   for (let a = 0; a < 7; a++){
    
// //     let x = random(200, 400)
// //     circle (x, i * spacing +100, biteHours[i]);
// //   } 
// }

function drawCircles() { //==---- these ddraw my circles for me
  push();
      fill (250,250,190)
    noStroke();
  if (buttonClicked === "1") {

        circle(310, 240, 30);
        circle(200, 300, 20);
        circle(370, 320, 40);

  }
  if (buttonClicked === "2") {
    
    circle(290, 240, 50);
    circle(310, 210, 30);
    circle(200, 350, 30);
    circle(290, 330, 50);
    circle(400, 250, 60);
 
  }
  
    if (buttonClicked === "3") {
    
    circle(290, 240, 30);
    circle(310, 210, 20);
    circle(270, 200, 40);
    circle(340, 300, 50);
    circle(440, 260, 30);
    circle(410, 310, 60);

    }
      if (buttonClicked === "4") {
    
    circle(410, 300, 30);
    circle(290, 230, 50);
    circle(180, 330, 40);
  
    }
      if (buttonClicked === "5") {
    
    circle(340, 340, 70);
  
    }
      if (buttonClicked === "6") {
    
    circle(230, 260, 60);
    circle(280, 210, 30);
    circle(360, 330, 90);

    }
      if (buttonClicked === "7") {
    
    circle(210, 240, 70);
 
    }
     pop();
}



function mousePressed() {
    if ( mouseX>30 && mouseX<83 && mouseY>450 && mouseY<470 ){
   // a = 0;
    buttonClicked = "1";

    console.log(buttonClicked);
  }
   if( mouseX>113 && mouseX<173 && mouseY>450 && mouseY<470 ){
  //  a = 250;
     buttonClicked = "2";
   }
  if (mouseX>173 && mouseX<253 &&mouseY>450 && mouseY<470){
    
    buttonClicked = "3";
  }
  
    if (mouseX>253 && mouseX<253+75 &&mouseY>450 && mouseY<470){
    
    buttonClicked = "4";

    }
  
  if (mouseX>328 && mouseX<328+75 && mouseY>450 && mouseY<470 ){
    
    buttonClicked = "5";

  }
  
  if (mouseX>403 && mouseX<403+75 && mouseY>450 && mouseY<470 ){
    buttonClicked = "6";   
  }
    if (mouseX>478 && mouseX<568 && mouseY>450 && mouseY<470 ){
      
    buttonClicked = "7";    
  }

  
}