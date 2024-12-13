//cahnging scense that swithces when mouse pressed

  //first u need varibel to store what scene ur in so u need scense counter
let bugSpray, flySwatter, man, manMan, manSpray, manSwat, cockroach, roach, blood, intro, shocktext, shock, manTalking, okay, roomtext, squishSound , bgmusic, buttonClick, winScene, kissSound, ewSound, Dressup, done;

//deco images----
let titleText, GoBack, IGiveUp, Lose, Mwah, RoachKiss, SmoochedText, TryAgain, Win, Yes, Yes2, You, Next, playAgain, goback;
let roachImage;
//scenemanager
let currentScene = 0;

//timer/popups
let timer = 0;
let timedImage, timedText = false;

let weapons = ''; 
let selectWeapon = false;

let countDown = 2;
let timeLeft = countDown;
let TrackTimer = 0;
let TimerActive = false;

let killRoaches = 6;
let roaches = [];

let myVideo;
let videoInitialized = false; //plays afters cene is loaded


//---------------- dress up game

let angry, bangs, cape, knife, questionEyebrow, shorts, smirk, starDress, starShirt, tubeTop, angryEyebrows, buckTeeth, chefHat, cry, ermFinger, ermMouth, lipGloss, thickEeyebrows, knifeLeft, frontCape, spikeHair, clownHair;


let shapeMove,shapeMove1, shapeMove2,shapeMove3,shapeMove4,shapeMove5,shapeMove6,shapeMove7,shapeMove8,shapeMove9, shapeMove10, shapeMove11,shapeMove12,shapeMove13,shapeMove14,shapeMove15,shapeMove16,shapeMove17,shapeMove18,shapeMove19 = false;

// me variables
let shapeX = 200; 
let shapeY = 120; 
let shapeWidth = 110;
let shapeHeight = 60; 

let shapeX2 = 210;
let shapeY2 = 180;
let shapeWidth2 = 28;
let shapeHeight2 = 40; 

let shapeX3 = 300;
let shapeY3 = 100;
let shapeWidth3 = 120;
let shapeHeight3 = 100; 

let shapeX4 = 295;
let shapeY4 = 200;
let shapeWidth4 = 50;
let shapeHeight4 = 60;

let shapeX5 = 450
let shapeY5 = 130;
let shapeWidth5 = 90;
let shapeHeight5 = 40;

let shapeX6 = 450
let shapeY6 = 300;
let shapeWidth6 = 95;
let shapeHeight6 = 48;

let shapeX7 = 220
let shapeY7 = 300;
let shapeWidth7 = 60;
let shapeHeight7 = 25;

let shapeX8 = 400;
let shapeY8 = 300;
let shapeWidth8 = 40;
let shapeHeight8 = 90;


let shapeX9 = 350;
let shapeY9 = 300;
let shapeWidth9 = 40;
let shapeHeight9 = 90;


//stardress
let shapeX10 = 200;
let shapeY10 = 5;
let shapeWidth10 = 120;
let shapeHeight10 = 120;
//starshirt
let shapeX11 = 320;
let shapeY11 = 5;
let shapeWidth11 = 110;
let shapeHeight11 = 90;
//tubetop
let shapeX12 = 350;
let shapeY12 = 240;
let shapeWidth12 = 90;
let shapeHeight12 = 55;


//lipglose
let shapeX13 = 250;
let shapeY13 = 180;
let shapeWidth13 = 35;
let shapeHeight13 = 35;
//angry
let shapeX14 = 200;
let shapeY14 = 340;
let shapeWidth14 = 35;
let shapeHeight14 = 35;


//chefhat
let shapeX15 = 280;
let shapeY15 = 300;
let shapeWidth15 = 60;
let shapeHeight15 = 65;
//cry
let shapeX16 = 260;
let shapeY16 = 230;
let shapeWidth16 = 30;
let shapeHeight16 = 50;

//bangs
let shapeX17 = 220;
let shapeY17 = 250;
let shapeWidth17 = 30;
let shapeHeight17 = 30;
//spike
let shapeX18 = 420;
let shapeY18 = 160;
let shapeWidth18 = 190;
let shapeHeight18 = 150;
//clown
let shapeX19 = 430;
let shapeY19 = 10;
let shapeWidth19 = 170;
let shapeHeight19 = 120;

//eyebrow
let shapeX20= 450;
let shapeY20 = 350;
let shapeWidth20 = 100;
let shapeHeight20 = 40;

function preload(){
  bugSpray = loadImage('Images/BugSpray.png');
  flySwatter = loadImage('Images/FlySwatter.png');
  man = loadImage('Images/Man.png');
  manMan = loadImage('Images/ManMan.png');
  manSpray = loadImage('Images/ManSpray.png');
  manSwat = loadImage('Images/ManSwat.png');
  cockraoch = loadImage('Images/CockRoach.png');
  roach = loadImage('Images/Roach.png'); 
  roachImage = loadImage('Images/Roach.png');
  blood = loadImage('Images/blood.png');
  intro = loadImage('Images/intro.jpg');
  shocktext = loadImage('Images/ShockBubble.png');
  shock = loadImage('Images/Shock.png');
  manTalking = loadImage('Images/Talking.png');
  okay = loadImage('Images/OK.png');
  roomtext = loadImage('Images/FirstText.png');
  //-----------
  titleText = loadImage('text/TitleText.png');
  GoBack = loadImage('text/goBack.png');
  IGiveUp = loadImage('text/iGiveUp.png');
  Lose = loadImage('text/lose.png');
  Mwah = loadImage('text/mwah.png');
  RoachKiss = loadImage('text/roachKiss.png');
  SmoochedText = loadImage('text/smoochedText.png');
  TryAgain = loadImage('text/tryAgain.png');
  Win = loadImage('text/win.png');
  Yes = loadImage('text/yes.png');
  Yes2 = loadImage('text/yes2.png');
  You = loadImage('text/you.png');
  Next = loadImage ('text/next.png');
  whatdoido = loadImage('text/whatDoIDo.png');
  Dressup = loadImage('text/dressup.png');
  done = loadImage('text/Done.png');
  playAgain = loadImage('text/playAgain.png');
  goback = loadImage('text/goBack.png');
 //-- clothes
  
  angry = loadImage('Clothes/Angry.png');
  bangs = loadImage('Clothes/Bangs.png')
  cape = loadImage('Clothes/Cape.png')
  knife = loadImage('Clothes/Knife.png')
  knifeLeft = loadImage('Clothes/Knife left.png')
  questionEyebrow = loadImage('Clothes/QuestionEyebrow.png')
  roach = loadImage('Clothes/Roach.png')
  shorts = loadImage('Clothes/Shorts.png')
  starDress = loadImage('Clothes/StarDress.png')
  starShirt = loadImage('Clothes/StarShirt.png')
  tubeTop = loadImage('Clothes/TubeTop.png')
  angryEyebrows = loadImage('Clothes/angryEyebrows.png')
  buckTeeth = loadImage('Clothes/buckTeeth.png')
  chefHat = loadImage('Clothes/chefHat.png')
  cry = loadImage('Clothes/cry.png')
  ermFinger = loadImage('Clothes/ermFinger.png')
  ermMouth = loadImage('Clothes/ermMouth.png')
  lipGloss = loadImage('Clothes/lipGloss.png')
  thickEeyebrows = loadImage('Clothes/thickEyebrows.png')
  frontCape = loadImage('Clothes/FRONTcapr.png')
  spikeHair= loadImage('Clothes/Spikehair.png')
  clownHair = loadImage('Clothes/clownHair.png')

  //-------- music
 squishSound = loadSound('Audio/cartoon-slap-2-189831.mp3');
bgmusic = loadSound('Audio/Rugrats Theme.mp3');
  buttonClick = loadSound('Audio/button-124476.mp3');
  winScene = loadSound('Audio/CartoonSound.wav');
  ewSound = loadSound('Audio/Crowd of Children Saying Eww.mp3')
  kissSound = loadSound('Audio/kisspop3wav-14505.mp3')
}

class Roach{
  constructor(x,y){
    // now it needs to be stored so we make properteries aka this. porperty =  then we make a instance let =
    this.x = x; //my ingredients aka propeortes
    this.y = y;
    this.alive = true; // aka on
  }
  
  display(){  //visual management
    if (this.alive){
      image(roachImage, this.x, this.y, 30, 40);
    }
  }
  kill(){ //DISAPPEPAER aka off
    this.alive = false;
  }
}


function startTimer(){
  timer = millis(); //milliseconds timer is in milli
  timeLeft = countDown;
  TrackTimer = millis();
  }


function setup() {
  let myCanvas = createCanvas(600, 400)
  myCanvas.parent("sketchbox");
   
  
  
 bgmusic.loop(); 
  bgmusic.setVolume(0.5);
  
  roaches.push(new Roach(10,350));
    roaches.push(new Roach(180,50));
  roaches.push(new Roach(250,300));
  roaches.push(new Roach(350,150));
  roaches.push(new Roach(450,250));
  roaches.push(new Roach(550,20));

}

function draw() {
  background(220);

 // image(bugSpray, 100, 100, 120, 180);
  
  switch(currentScene){ 
    case 0: //THE BEGINNING TITLE PAGE
    push();
    background(120, 150, 255);
    image(titleText, 50, 30, 500, 210)
    image(Yes, 80, 250, 180, 120);
    image(Yes2, 350, 250, 180, 120);
    pop();

    break;
    
    case 1: //STILL BEGINNING 
    // room intro scene 'press okay to move on'
    background(240, 137, 137)
    image(roomtext, 150, 30, 400, 200 );
    image(manTalking, 10, 200, 200, 180);
    image(okay, 350, 250, 200, 130);

    break;
    
    case 2: // STILL BEGINNING
    //bedroom scene with roaches + shock of player
      background(222,184,135);
    rect(250, 0, 200, 100)  //table
    rect(300, 110, 100, 20) //chair
    rect(450, 0, 80, 50)  //bookshelf 
    circle(150, 250, 200) //rug
    rect(0, 0, 150, 250)  //bed
    rect(400, 380, 100, 20)//door
    rect(580, 200, 20, 100)  

  // bug spawn
    image(cockraoch, 10, 350, 30, 40)
    image(cockraoch, 180, 50, 30, 40)
    image(cockraoch, 250, 300, 30, 40)
    image(cockraoch, 350, 150, 30, 40)
    image(cockraoch, 450, 250, 30, 40)
    image(cockraoch, 550, 20, 30, 40 )

    // this is so delayed image will pop up so u can see the roaches first aka dramatic effect heh------------------
    if ( millis() - timer > 500){ 
      timedImage = true
    }
      
    if (timedImage){
      image(shocktext,100, 0, 500, 300 )
      image(shock,0, 200, 250, 250)
      push();
        fill( 'white' )
      triangle(320, 330, 320, 355, 340, 343)
      textSize(25);
      image(whatdoido, 340, 290, 200, 100)
      pop();
    }
    break;
    
    case 3: //MIDDLE SOTRY LINE
      //bedroom with roaches + selection of weapon
    background(222,184,135);
    rect(250, 0, 200, 100)  
    rect(300, 110, 100, 20) 
    rect(450, 0, 80, 50)
    circle(150, 250, 200) 
    rect(0, 0, 150, 250)
    rect(400, 380, 100, 20)
    rect(580, 200, 20, 100)  

    if(!selectWeapon){
      
    push();
    noStroke();
    fill('white')
    rect(10, 10, 580, 370);
    fill('black')
    textSize(25)
    text('choose your weapon to slap these roaches', 60, 50);
    text(' click to kill before time is up', 150, 350)
    pop();
      
    image(bugSpray, 30, 90, 150, 230)
    image(flySwatter,220, 90, 110, 230)
    image(man, 360, 90, 230, 230)
      
      //curose weaospon depending on what u click the scene woudl cahnge 
      
      if(weapons === 'bugSpray'){
        image(manSpray, mouseX -50, mouseY -50, 100, 100);
      }
      else if( weapons === 'flySwatter'){
        image(manSwat, mouseX - 50, mouseY - 50, 100, 100);
      }
      else if (weapons === 'man'){
        image(manMan, mouseX - 50, mouseY - 50,100, 100)
      }
    }

      break;
      
      case 4: //MIDDLE STORY LINE
      // slapping/killing roaches scene, i put it in a second one so i am able to restart it/ go back to this scene
         background(222,184,135);
    rect(250, 0, 200, 100)  
    rect(300, 110, 100, 20) 
    rect(450, 0, 80, 50)
    circle(150, 250, 200) 
    rect(0, 0, 150, 250)
    rect(400, 380, 100, 20)
    rect(580, 200, 20, 100)  

      roaches.forEach(roach =>{
     roach.display();
    });
      
      push();
       textSize(32);
       fill('red');
       text('Timer '+ timeLeft, 20, 40);
    
    if (millis() - TrackTimer > 1500){
      TrackTimer = millis();
      if( timeLeft > 0){
        timeLeft --;
      }
    }
      if(timeLeft <= 0){ //when the timer hits 0 and u didnt kill all dem bugs, you swirc to th kissing roach scene
        
        currentScene = 6;
        kissSound.play();
            ewSound.play();
      }
    pop();
      break;
    
    
    case 5: //WIN CONDITION
      //you WIN scene ------------------
      background ('pink');
      image(Dressup, 100, 100, 400, 150)
      // image (manTalking, 10, 250, 200, 170)
      image(You, 60, 10, 200, 100)
      image(Win, 300, 10, 250, 110);
      image(okay, 350, 250, 200, 130);
      image(goback, 10, 260, 250, 80 ) // if u want to play the roach game again
      
    break;
    
    case 6: //LOSE SCENE
      //you LOSE scene ------------------
    //   if (bgmusic.isPlaying()) {
    // bgmusic.stop();
    //   }
    background ('red');
    image(RoachKiss, 50, 10, 500, 400)
    image(TryAgain, 200, 340, 200, 60)
       
    break;
    
   case 7: //dress up game MIDDLE
 
  background('pink');
  textSize(15);
  fill('white');
  noStroke();
  text('click and drag the clothes', 6, 50);
  //closet
  rect(180, 0, 420, 400)
  
//behind clothes 
  image(cape, shapeX3, shapeY3, shapeWidth3, shapeHeight3);

//roach
  image (roach, 0, 100, 165, 204);

  textSize(15)
  text('my roach looks beautiful', 10, 300);
  
//clothes
  image(shorts, shapeX, shapeY, shapeWidth, shapeHeight);
  image(frontCape, shapeX3, shapeY3, shapeWidth3, shapeHeight3)
  image(starDress, shapeX10, shapeY10, shapeWidth10, shapeHeight10)
  image(starShirt,shapeX11, shapeY11, shapeWidth11, shapeHeight11)
  image(tubeTop, shapeX12, shapeY12, shapeWidth12, shapeHeight12
       )
//mouths 
  image (ermMouth, shapeX2, shapeY2, shapeWidth2, shapeHeight2);
  image(buckTeeth, shapeX7, shapeY7, shapeWidth7, shapeHeight7);
  image(lipGloss, shapeX13, shapeY13, shapeWidth13, shapeHeight13)
  image(angry, shapeX14, shapeY14, shapeWidth14, shapeHeight14)
  
//accesroories
  image(ermFinger, shapeX4, shapeY4, shapeWidth4, shapeHeight4);
  image(knife, shapeX8, shapeY8, shapeWidth8, shapeHeight8);
  image(knifeLeft,shapeX9, shapeY9, shapeWidth9, shapeHeight9);
  image(chefHat, shapeX15, shapeY15, shapeWidth15, shapeHeight15)
  image(cry, shapeX16, shapeY16, shapeWidth16, shapeHeight16)

//hair 
  image(bangs, shapeX17, shapeY17, shapeWidth17, shapeHeight17);
  image(spikeHair, shapeX18, shapeY18, shapeWidth18, shapeHeight18); 
  image(clownHair, shapeX19, shapeY19, shapeWidth19, shapeHeight19);
  
//eyebrows
  image(questionEyebrow, shapeX5 , shapeY5, shapeWidth5, shapeHeight5);
  image(angryEyebrows, shapeX6 , shapeY6, shapeWidth6, shapeHeight6);
  image(thickEeyebrows, shapeX20 , shapeY20, shapeWidth20, shapeHeight20)

image(done,0, 300, 150, 90) //next scene button

     break;
     
    case 8://END SCENE
      // you dance music !!===================
  if (bgmusic.isPlaying()) {
    bgmusic.stop();
  }
     if (!videoInitialized) { 
//createCanvas(600, 100)
       noCanvas();
myVideo = createVideo('cockroachDance.mp4');
   // myVideo.showControls();
    myVideo.size(600, 400);
    myVideo.loop();
    videoInitialized = true;
     }
    
   // image(playAgain, 130, 0, 350, 90);

  break;
  }
}
  
function mousePressed(){
  
  switch(currentScene){

    case 0: // if press yes button, change scene to 1
// this is both yes buttons 
            console.log("Mouse pressed at: ", mouseX, mouseY); // Debugging

      if((mouseX > 80 && mouseX< 80 + 180 && mouseY > 250 && mouseY< 250 + 120 ) || (mouseX > 350 && mouseX< 350+180 && mouseY > 250 && mouseY< 250 + 120)){
      //mouse X1 is left mouseX2 is right so u add the width , mouseY1 is top mouse Y2 is bottom u add the height
    buttonClick.play();
    currentScene = 1;
  }
  break;
  
  case 1: // of press okay button, change scene to 2
//this is this OKAY button
  if(mouseX >350 && mouseX< 350+200 && mouseY > 200 && mouseY < 200+130){
    buttonClick.play();

    currentScene = 2;
    timer = millis();
    timedImage = false;
    timedText = false;
  }
      break;
  
      case 2: //if press what do i do, change to scene 3
    //      rect(310, 324, 210, 35) this is thw "what do i do button"

if (mouseX > 310 && mouseX < 310 + 210 && mouseY > 324 && mouseY < 324 + 35) {
  currentScene = 3;
}
   break;
   
   case 3: // if u get roach change to scene4
    //// image(flySwatter,220, 90, 110, 230)
   // image(man, 360, 90, 230, 230)
  if ( currentScene === 3){
    
  if(!selectWeapon){
    if(mouseX > 30 && mouseX < 30 +150 && mouseY >90 && mouseY < 90 +230){
      weapons = 'bugSpray';
      selectWeapon = true;
      buttonClick.play();
      currentScene = 4;
      startTimer();
    }
    else if (mouseX > 220 && mouseX< 220+110 && mouseY>90 && mouseY < 90 +230){
      weapons = 'manSwat';
      selectWeapon = true;
      buttonClick.play();
      currentScene = 4;
      startTimer();

    }
    else if(mouseX>360 &&mouseX< 360+230 && mouseY>90 &&mouseY<90+230){
      weapons = 'manMan';
      selectWeapon = true;
      buttonClick.play();
      currentScene = 4;

      startTimer();

    }
         
   }
  }
      break;
      case 4:
     TimerActive = true; // the timer starts/is playing...
   if (currentScene === 4 && TimerActive && timeLeft > 0) 
 { 
    roaches.forEach(roach => { if (mouseX >roach.x && mouseX< roach.x +30 &&mouseY>roach.y &&mouseY< roach.y+40) {
      roach.kill();
            // roach.alive = false; // Roach disappears/die
            killRoaches --;
            squishSound.play();
          } 
        });
          if(killRoaches === 0){
            winScene.play();
            currentScene = 5; //you winnnn scene 
          }
        }
         
      break;
      
      case 5: // win scene to the dress up game + go back to roach game
      if(mouseX >350 && mouseX< 350+200 && mouseY > 200 && mouseY < 200+130){
        currentScene = 7
      }
      
      //      image(goback, 10, 260, 250, 80 )
      if(mouseX> 10 && mouseX < 10 + 250 && mouseY> 260 && mouseY < 260 + 80){
              //resets the roachessss images
      killRoaches = 0;
      roaches = [];
          roaches.push(new Roach(10,350));
           roaches.push(new Roach(180,50));
         roaches.push(new Roach(250,300));
        roaches.push(new Roach(350,150));
        roaches.push(new Roach(450,250));
     roaches.push(new Roach(550,20));

      
        timeLeft = countDown;
        selectWeapon = false;
        currentScene = 3;
      }
      break;
      
      case 6:
      //  image(TryAgain, 200, 340, 200, 60)
    if( mouseX> 200 &&mouseX<200+200 &&mouseY >340 && mouseY<340 +60){
buttonClick.play();
      //resets the roachessss images
      killRoaches = 0;
      roaches = [];
          roaches.push(new Roach(10,350));
           roaches.push(new Roach(180,50));
         roaches.push(new Roach(250,300));
        roaches.push(new Roach(350,150));
        roaches.push(new Roach(450,250));
     roaches.push(new Roach(550,20));

      
        timeLeft = countDown;
        selectWeapon = false;
        currentScene = 3;
    }
      break;
      case 7: //dress up game mocemetn ---------------------
       if( mouseX > shapeX && mouseX < shapeX + shapeWidth && mouseY > shapeY && mouseY < shapeY + shapeHeight){
    shapeMove = true;
  } 
   else {
    shapeMove = false;
   }
   if( mouseX > shapeX2 && mouseX < shapeX2 + shapeWidth2 && mouseY > shapeY2 && mouseY < shapeY2 + shapeHeight2){
    shapeMove1 = true;
  } 
  else {
    shapeMove1 = false;
  }
  
   if( mouseX > shapeX3 && mouseX < shapeX3 + shapeWidth3 && mouseY > shapeY3 && mouseY < shapeY3 + shapeHeight3){
    shapeMove2 = true;
  } 
  else {
    shapeMove2 = false;
  }
  if( mouseX > shapeX4 && mouseX < shapeX4 + shapeWidth4 && mouseY > shapeY4 && mouseY < shapeY4 + shapeHeight4){
    shapeMove3 = true;
  } 
  else {
    shapeMove3 = false;
  }
  if(mouseX > shapeX5 && mouseX< shapeX5 + shapeWidth5 && mouseY>shapeY5 && mouseY<shapeY5 + shapeHeight5 ){
  shapeMove4 = true;
  }
  else{
        shapeMove4 = false;
  }
if(mouseX > shapeX6 && mouseX< shapeX6 + shapeWidth6 &&  mouseY>shapeY6 && mouseY<shapeY6 + shapeHeight5 ){
  shapeMove5 = true;
  }
  else{
  shapeMove5= false;
  }
  
  if(mouseX > shapeX7 && mouseX< shapeX7 + shapeWidth7 &&  mouseY>shapeY7 && mouseY<shapeY7 + shapeHeight7 ){
  shapeMove6 = true;
  }
  else{
  shapeMove6= false;
  }
  if(mouseX > shapeX8 && mouseX< shapeX8 +shapeWidth8 &&mouseY>shapeY8 &&mouseY<shapeY8 + shapeHeight8){
    shapeMove7 = true;
  } 
  else{
    shapeMove7= false;
  }
  if(mouseX > shapeX9 && mouseX< shapeX9 +shapeWidth9 &&mouseY>shapeY9 &&mouseY<shapeY9 + shapeHeight9){
    shapeMove8 = true;
  } 
  else{
    shapeMove8= false;
  }
  if(mouseX > shapeX10 && mouseX< shapeX10 +shapeWidth10 &&mouseY>shapeY10 &&mouseY<shapeY10 + shapeHeight10){
    shapeMove9 = true;
  } 
  else{
    shapeMove9= false;
  }
  if(mouseX > shapeX11 && mouseX< shapeX11 +shapeWidth11 &&mouseY>shapeY11 &&mouseY<shapeY11 + shapeHeight11){
    shapeMove10 = true;
  } 
  else{
    shapeMove10= false;
  }
  if(mouseX > shapeX12 && mouseX< shapeX12 +shapeWidth12 &&mouseY>shapeY12 &&mouseY<shapeY12 + shapeHeight12){
    shapeMove11= true;
  } 
  else{
    shapeMove11 = false;
  }
    if(mouseX > shapeX13 && mouseX< shapeX13 +shapeWidth13 &&mouseY>shapeY13 &&mouseY<shapeY13 + shapeHeight13){
    shapeMove12 = true;
  } 
  else{
    shapeMove12= false;
  }
   if(mouseX > shapeX14 && mouseX< shapeX14 +shapeWidth14 &&mouseY>shapeY14 &&mouseY<shapeY14 + shapeHeight14){
    shapeMove13 = true;
  } 
  else{
    shapeMove13= false;
  }
   if(mouseX > shapeX15 && mouseX< shapeX15 +shapeWidth15 &&mouseY>shapeY15 &&mouseY<shapeY15 + shapeHeight15){
    shapeMove14 = true;
  } 
  else{
    shapeMove14 = false;
  }
   if(mouseX > shapeX16 && mouseX< shapeX16 +shapeWidth16 &&mouseY>shapeY16 &&mouseY<shapeY16 + shapeHeight16){
    shapeMove15 = true;
  } 
  else{
    shapeMove15 = false;
  }
   if(mouseX > shapeX17 && mouseX< shapeX17 +shapeWidth17 &&mouseY>shapeY17 &&mouseY<shapeY17 + shapeHeight17){
    shapeMove16 = true;
  } 
  else{
    shapeMove16 = false;
  }
   if(mouseX > shapeX18 && mouseX< shapeX18 +shapeWidth18 &&mouseY>shapeY18 &&mouseY<shapeY18 + shapeHeight18){
    shapeMove17 = true;
  } 
  else{
    shapeMove17 = false;
  }
     if(mouseX > shapeX19 && mouseX< shapeX19 +shapeWidth19 &&mouseY>shapeY19 &&mouseY<shapeY19 + shapeHeight19){
    shapeMove18 = true;
  } 
  else{
    shapeMove18 = false;
  }
     if(mouseX > shapeX20 && mouseX< shapeX20 +shapeWidth20 &&mouseY>shapeY20 &&mouseY<shapeY20 + shapeHeight20){
    shapeMove19 = true;
  } 
  else{
    shapeMove19 = false;
  }
if(mouseX >0 && mouseX< 0+90 && mouseY>300 && mouseY< 300+90){
  currentScene = 8
}
      break;
      
//       case 8:
//       //   image(playAgain, 130, 0, 350, 90);
// if(mouseX> 130 && mouseX< 130+350 &&mouseY>0 &&mouseY< 0+90){
//   currentScene = 0
// }
//       break;
  }  
}


function mouseDragged(){ //dragging the shape
  if(shapeMove){
     shapeX = mouseX - shapeWidth / 2; 
   shapeY = mouseY - shapeHeight / 2;
  }
    if(shapeMove1){
  shapeX2 = mouseX - shapeWidth2 / 2; 
    shapeY2 = mouseY - shapeHeight2 / 2;
    }
  if(shapeMove2){
     shapeX3 = mouseX - shapeWidth3 / 2; 
    shapeY3 = mouseY - shapeHeight3 / 2; 
    }
  
     if(shapeMove3){
     shapeX4 = mouseX - shapeWidth4 / 2; 
    shapeY4 = mouseY - shapeHeight4 / 2;
     }
  
  if(shapeMove4){
     shapeX5 = mouseX - shapeWidth5 / 2;
    shapeY5 = mouseY - shapeHeight5 / 2;
     }
    if(shapeMove5){
  shapeX6 = mouseX - shapeWidth6 / 2; 
    shapeY6 = mouseY - shapeHeight6 / 2;
     }
   if(shapeMove6){
     shapeX7 = mouseX - shapeWidth7 / 2;
    shapeY7 = mouseY - shapeHeight7 / 2;
     }
  
    if(shapeMove7){
     shapeX8 = mouseX - shapeWidth8 / 2; 
    shapeY8 = mouseY - shapeHeight8 / 2;
     }
  if(shapeMove8){
   shapeX9 = mouseX - shapeWidth9 / 2; 
    shapeY9 = mouseY - shapeHeight9 / 2;
     }
  if(shapeMove9){
     shapeX10 = mouseX - shapeWidth10 / 2; 
    shapeY10 = mouseY - shapeHeight10 / 2;
     }
    if(shapeMove10){
  shapeX11 = mouseX - shapeWidth11 / 2; 
    shapeY11 = mouseY - shapeHeight11 / 2;
     }
    if(shapeMove11){
     shapeX12 = mouseX - shapeWidth12 / 2; 
    shapeY12 = mouseY - shapeHeight12 / 2;
     }
    if(shapeMove12){
     shapeX13 = mouseX - shapeWidth13 / 2; 
     shapeY13 = mouseY - shapeHeight13 / 2;
     }
    if(shapeMove13){
  shapeX14 = mouseX - shapeWidth14 / 2; 
    shapeY14 = mouseY - shapeHeight14 / 2;
     }
    if(shapeMove14){
 shapeX15 = mouseX - shapeWidth15 / 2; 
    shapeY15 = mouseY - shapeHeight15 / 2;
     }
  if(shapeMove15){
     shapeX16 = mouseX - shapeWidth16 / 2; 
    shapeY16 = mouseY - shapeHeight16 / 2;
     }
    if(shapeMove16){
    shapeX17 = mouseX - shapeWidth17 / 2; 
    shapeY17 = mouseY - shapeHeight17 / 2;
     }
    if(shapeMove17){
 shapeX18 = mouseX - shapeWidth18 / 2; 
    shapeY18 = mouseY - shapeHeight18 / 2;
     }
    if(shapeMove18){
   shapeX19 = mouseX - shapeWidth19 / 2; 
    shapeY19 = mouseY - shapeHeight19 / 2;
     }
    if(shapeMove19){
    shapeX20 = mouseX - shapeWidth20 / 2; 
    shapeY20 = mouseY - shapeHeight20 / 2;
     }
}