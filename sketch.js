let canvas;
let canvasWidth = 1500;
let canvasHeight = 400;
let umbrella;
let stone;
let chopstick;
let Rx, Ex, Cx;
let y;
let Rain;
let Earth;
let Concent;
var tooth;


function preload() {
  tooth = loadAnimation('lib/mouth_image_1.jpg','lib/mouth_image_1.jpg','lib/mouth_image_1.jpg','lib/mouth_image_2.jpg','lib/mouth_image_2.jpg','lib/mouth_image_2.jpg','lib/mouth_image_3.jpg','lib/mouth_image_3.jpg','lib/mouth_image_3.jpg');
}

function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position(windowWidth/3 - canvasWidth/3, 20);

  // resetGame();
  y = 0;
  Ex = 600;
  Rx = 250;
  Cx = 0;

}
function draw() {
background(100,100,255,5);
fill(100,100,120);
rect(0,0,500,400);
fill(255,240,180,250);
rect(1000,0,500,400);
line(0,200,280,300);
line(0,210,280,310);
line(320,310,500,380);
line(320,320,500,390);
line(280,300,280,310);
line(320,310,320,320);
fill(50,50,255);
Rain = quad(Rx, Ry, Rx+40, Ry+10, Rx+40, Ry+20, Rx, Ry+10);
Ry = Ry + 1;
if (Ry >= 400) {
  fill(255,150,150);
triangle(500,400,750,350,1000,400);
fill(100,100,255);
rect(Ex,Ey,10,40);
Ey = Ey + 1;
if (Ey >= 350) {
  fill(0);
  rect(1450,200,50,50);
  fill(255,150,150);
rect(Cx,Cy,50,50);
// Cy = Cy + 1;
// if (x <= 280, x >=280){
// }
}
}
// function resetGame() {
}
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    Rx = Rx-10;
  } else if (keyCode === RIGHT_ARROW) {
    Rx = Rx+10;
  }
  if (keyCode === LEFT_ARROW) {
    Ex = Ex-10;
  } else if (keyCode === RIGHT_ARROW) {
    Ex = Ex+10;
  }
  if (keyCode === LEFT_ARROW) {
    Cx = Cx-10;
  } else if (keyCode === RIGHT_ARROW) {
    Cx = Cx+10;
  }
  if (keyCode === UP_ARROW) {
    Cy = Cy-10;
  } else if (keyCode === DOWN_ARROW) {
    Cy = Cy+10;
  }
}

// function resetGame(){
//
// x=0;
// }
