let canvas;
let canvasWidth = 1500;
let canvasHeight = 400;
let umbrella;
let x, y;
var tooth;


function preload() {
  tooth = loadAnimation('lib/mouth_image_1.jpg','lib/mouth_image_1.jpg','lib/mouth_image_1.jpg','lib/mouth_image_2.jpg','lib/mouth_image_2.jpg','lib/mouth_image_2.jpg','lib/mouth_image_3.jpg','lib/mouth_image_3.jpg','lib/mouth_image_3.jpg');
}

function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position(windowWidth/3 - canvasWidth/3, 20);
  x = 280;
  y = 0;

}

function draw() {
//  rect(mouseX, mouseY,40,200);
//stroke(50);
background(100,100,255,10);
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
  animation(tooth,200,200);
}
}
