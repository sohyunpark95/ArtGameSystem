let canvas;
let canvasWidth = 1500;
let canvasHeight = 400;
let umbrella;
let stone;
let chopstick;
let Ry;
let x;
var tooth;


function preload() {
  tooth = loadAnimation('lib/mouth_image_1.jpg','lib/mouth_image_1.jpg','lib/mouth_image_1.jpg','lib/mouth_image_2.jpg','lib/mouth_image_2.jpg','lib/mouth_image_2.jpg','lib/mouth_image_3.jpg','lib/mouth_image_3.jpg','lib/mouth_image_3.jpg');
}

function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position(windowWidth/3 - canvasWidth/3, 20);

  resetGame();
  Ry = 0;
x = 250;
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
fill(255,10,0);

fill(50,50,255);
quad(x, Ry, x+40, Ry+10, x+40, Ry+20, x, Ry+10 );
Ry = Ry + 1;
if (Ry >= 400) {
rect(0,0,200,400);
if (x <= 280, x >=280){
}
}
}
function resetGame() {

}
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    x = x-10;
  } else if (keyCode === RIGHT_ARROW) {
    x = x+10;
  }
}

function resetGame(){

x=0;
}
