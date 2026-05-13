var ballx = 300;
var bally = 300;
var ballSize = 40;
var score = 0;
var cursor, ball, ball2, ball3, ball4;
var gameState = "L1";

function preload() {
  cursor = loadImage('https://nickw0417.github.io/images/hand_open.png'); //target
  ball = loadImage('https://nickw0417.github.io/images/IMG_8834.png'); //user
  ball2 = loadImage('https://nickw0417.github.io/images/IMG_8835.png');
  ball3 = loadImage('https://nickw0417.github.io/images/IMG_8836.png');
  ball4 = loadImage('https://nickw0417.github.io/images/IMG_8837.png');
}

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);
}

function draw() {
  background(150);
  if (gameState == "L1"){
    levelOne(); 
  } else if (gameState == "L2"){
    background(160);
    levelTwo();
  } else if (gameState == "L3"){
    background(170);
    levelThree();
  } else if (gameState == "L4"){
    background(180);
    levelFour();
  } else if (gameState == "L5"){
    background(190);
    levelFive();
  } else if (gameState == "WIN"){
    text("Score: " + score + "!!", width/2, height/2);
    background(200);  
  }
  text("Score: " + score, width/2, 40);
  text("YOU GRABBED THE FRUIT!");
  text("HOORAY");
}

// LEVELS--------------------------------------------------

function levelOne(){
  text("level1", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  
  if (distToBall < ballSize/2 && mouseIsPressed === true) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  if (score > 5){
    gameState = "L2";
  }
  line(ballx, bally, mouseX, mouseY);
  image(ball, ballx-20, bally-20, 40, 40);
  if (mouseIsPressed === true){
    image(cursor, mouseX-30, mouseY-30, 150, 150);
  } else {
    image(cursor, mouseX-25, mouseY-25, 150, 150);
  }
  
} 

function levelTwo(){
  text("level2", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize/2 && mouseIsPressed === true) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  if (score > 10){
    gameState = "L3";
  }
  image(ball2, ballx-20, bally-20, 40, 40);
  if (mouseIsPressed === true){
    image(cursor, mouseX-30, mouseY-30, 150, 150);
  } else {
    image(cursor, mouseX-25, mouseY-25, 150, 150);
  }
} 

function levelThree(){
  text("level3", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize/2 && mouseIsPressed === true) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  if (score > 15){
    gameState = "L4";    
  }
  image(ball3, ballx-20, bally-20, 40, 40);
  if (mouseIsPressed === true){
    image(cursor, mouseX-30, mouseY-30, 150, 150);
  } else {
    image(cursor, mouseX-25, mouseY-25, 150, 150);
  }
} 

function levelFour(){
  text("level4", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize/2 && mouseIsPressed === true) {
    ballx = random(20, width-20);
    bally = random(20, height-20);
    score = score + 1;
  }
  ballx += random(-5,5);
  
  if (score > 20){
    gameState = "L5";
  }
  image(ball4, ballx-20, bally-20, 40, 40);
  if (mouseIsPressed === true){
    image(cursor, mouseX-30, mouseY-30, 150, 150);
  } else {
    image(cursor, mouseX-25, mouseY-25, 150, 150);
  }
    if (score = 25){
    gameState = "WIN";
  }
} 
