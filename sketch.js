let canvas;
let canvasWidth = 1500;
let canvasHeight = 400;
let umbrella;
let stone;
let chopstick;
let Rx, Ex, Ox;
let Ry, Ey, Oy;
let Rain;
let Earth;
let Outlet;
var RainV;
var EarthV;
var OutletV;


function preload() {
  RainV = loadAnimation('lib/RainV1.png','lib/RainV1.png','lib/RainV2.png','lib/RainV2.png','lib/RainV3.png','lib/RainV3.png','lib/RainV4.png','lib/RainV4.png','lib/RainV5.png','lib/RainV5.png','lib/RainV6.png','lib/RainV6.png','lib/RainV7.png','lib/RainV7.png');
 EarthV = loadAnimation('lib/EarthV1.png','lib/EarthV1.png','lib/EarthV2.png','lib/EarthV2.png','lib/EarthV3.png','lib/EarthV3.png','lib/EarthV4.png','lib/EarthV4.png','lib/EarthV5.png','lib/EarthV5.png','lib/EarthV6.png','lib/EarthV6.png','lib/EarthV7.png','lib/EarthV7.png');
OutletV = loadAnimation('lib/OutletV1.png','lib/OutletV1.png','lib/OutletV2.png','lib/OutletV2.png','lib/OutletV3.png','lib/OutletV3.png','lib/OutletV4.png','lib/OutletV4.png','lib/OutletV5.png','lib/OutletV5.png','lib/OutletV6.png','lib/OutletV6.png','lib/OutletV7.png','lib/OutletV7.png');
}

function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position(windowWidth/3 - canvasWidth/3, 20);

  // resetGame();
  Ey = 0;
  Ry = 0;
  Oy = 0;
  Ex = 600;
  Rx = 250;
  Ox = 0;

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
rect(710,320,30,40);
  fill(0);
  rect(720,320,10,40);
  fill(255,150,150);
triangle(500,400,750,350,1000,400);
fill(255,10,10);
rect(Ex,Ey,10,40);
Ey = Ey + 1;
if (Ey >=320) {
  fill(255,255,255);
  rect(1450,0,50,400);
fill(0);
  rect(1450,100,50,50);
fill(255,255,255);
rect(Ox,Oy,400,50);
if (Ox >=1450) {
    animation(RainV,250,200);
    animation(EarthV,750,200);
animation(OutletV,1250,200);
}
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
    Ox = Ox-50;
  } else if (keyCode === RIGHT_ARROW) {
    Ox = Ox+50;
  }
  if (keyCode === UP_ARROW) {
    Oy = Oy-10;
  } else if (keyCode === DOWN_ARROW) {
    Oy = Oy+10;
  }
}

// function resetGame(){
//
// x=0;
// }
