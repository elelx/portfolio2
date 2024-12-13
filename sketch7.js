let img;
let brushShape = "square"; 
let brushColor = [0, 0, 0]; 
const brushSize = 10; 
const size1 = 45; 
const size2 = 45;
function preload() {
  img = loadImage('img/dino.png'); 
}

function setup() {
  let myCanvas = createCanvas(400, 500);
myCanvas.parent ("sketchbox");
  background(255);
  rectMode(CORNER); 
  noStroke();

  imageMode(CENTER); 
  image(img, width / 2, height / 2, 300, 250);
}

function draw() {
  if (mouseIsPressed) {
    drawShape(mouseX, mouseY, pmouseX, pmouseY, brushShape);
  }

  push();
  fill('#fe6076');
  rect(0, 0, 400, 110);
  rect(0, 400, 800, 110);
  pop();

    fill(0);
  textSize(16);
    textFont('Courier New', 10);
  text("click to draw, space to clear", 120, 390);
   
  drawPalette();
}

function drawShape(x, y, px, py, type) {
  fill(brushColor); 

  if (type === "square") {
    for (let i = 0; i < 1; i += 0.1) {
      let interpX = lerp(px, x, i);
      let interpY = lerp(py, y, i);
      square(interpX, interpY, brushSize);
    }
  } else if (type === "circle") {
    for (let i = 0; i < 1; i += 0.1) {
      let interpX = lerp(px, x, i);
      let interpY = lerp(py, y, i);
      circle(interpX, interpY, brushSize);
    }
  }
}

function drawPalette() {
  push();
  noStroke();

  // White
  fill(255);
  rect(30, 50, size1, size2);

  // Black
  fill(0);
  rect(90, 50, size1, size2);

  // Green
  fill(100, 255, 100);
  rect(150, 50, size1, size2);

  // Blue
  fill(130, 226, 237);
  rect(210, 50, size1, size2);

  // Purple
  fill(207, 130, 237);
  rect(270, 50, size1, size2);

  // Pink
  fill('pink');
  rect(330, 50, size1, size2);

  pop();
}

function setShape(shape) {
  brushShape = shape;
}

function resetCanvas() {
  background(255);
}

function keyPressed() {
  if (key === "s") {
    setShape("square");
  }
  if (key === "c") {
    setShape("circle");
  }
  if (key === " ") {
    resetCanvas();
  }
}

function mousePressed() {
  console.log(`MousePressed: (${mouseX}, ${mouseY})`); 

  if (mouseX > 30 && mouseX < 30 + size1 && mouseY > 50 && mouseY < 50 + size2) { 
    brushColor = [255, 255, 255]; // White
  } 
  else if (mouseX > 90 && mouseX < 90 + size1 && mouseY > 50 && mouseY < 50 + size2) { 
    brushColor = [0, 0, 0]; // Black
  } 
  else if (mouseX > 150 && mouseX < 150 + size1 && mouseY > 50 && mouseY < 50 + size2) { 
    brushColor = [100, 255, 100]; // Green
  } 
  else if (mouseX > 210 && mouseX < 210 + size1 && mouseY > 50 && mouseY < 50 + size2) { 
    brushColor = [130, 226, 237]; // Blue
  } 
  else if (mouseX > 270 && mouseX < 270 + size1 && mouseY > 50 && mouseY < 50 + size2) { 
    brushColor = [207, 130, 237]; // Purple
  } 
  else if (mouseX > 330 && mouseX < 330 + size1 && mouseY > 50 && mouseY < 50 + size2) { 
    brushColor = [255, 192, 203]; // Pink
  }
}
