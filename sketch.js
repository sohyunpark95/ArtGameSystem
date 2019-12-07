let canvas;
let canvasWidth = 600;
let canvasHeight = 400;
let squid;
let x, y,q;
var tooth;
var a;
var b;


function preload() {
  tooth = loadAnimation('lib/mouth_image_1.jpg','lib/mouth_image_1.jpg','lib/mouth_image_1.jpg','lib/mouth_image_2.jpg','lib/mouth_image_2.jpg','lib/mouth_image_2.jpg','lib/mouth_image_3.jpg','lib/mouth_image_3.jpg','lib/mouth_image_3.jpg');
}

function setup() {
  background(255,255,255);
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position(windowWidth/2 - canvasWidth/2, 20);
  x = 280;
  y = 0;
  q = 300;

//  noCursor();
//  resetGame();
}

function draw() {
//  rect(mouseX, mouseY,40,200);
//stroke(50);
fill(255,255,255);
rect(0,0,600,400);
rect(0,300,140,100);
rect(460,300,140,100);
fill(255,240,180,250);
rect(320,300,140,100);
rect(140,300,140,100);
fill(255,255,255);
rect(x, y, 40, 100);

x = x ;
// Moving up at a constant speed
y = y + 1;

// Reset to the bottom
if (y >= 300) {
  y = 300;
  animation(tooth,300,200);
}
}
