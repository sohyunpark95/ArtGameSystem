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
background(100,100,255,5);
fill(100,100,120);
rect(0,0,500,400);
fill(255,240,180,250);
rect(1000,0,500,400);
line(30, 20, 85, 20);
stroke(126);
rect(x, y, 40, 100);

x = x ;
y = y + 1;

// Reset to the bottom
if (y >= 300) {
  y = 300;
  rect(0,0,200,400);
}
}
