let canvas;
let canvasWidth = 400;
let canvasHeight = 400;
<<<<<<< HEAD
let squid;
let x, y,q;
var tooth;
var a;
var b;


function preload() {
  tooth = loadAnimation('lib/mouth_image_1.jpg','lib/mouth_image_1.jpg','lib/mouth_image_1.jpg','lib/mouth_image_2.jpg','lib/mouth_image_2.jpg','lib/mouth_image_2.jpg','lib/mouth_image_3.jpg','lib/mouth_image_3.jpg','lib/mouth_image_3.jpg');
}
=======
let frog;
let dream1;
let goal;
>>>>>>> My_Frog

function setup() {
  background(255,255,255);
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position(windowWidth/2 - canvasWidth/2, 20);
<<<<<<< HEAD
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
=======
  noCursor();
  resetGame();
}

function draw() {
  background(220);


  if (dream1.position.x >= width) {
    dream1.position.x = 0;
    dream1.setVelocity(random(3, 10), 0);
  }


  if (frog.overlap(goal)) {
    nextLevel();
  }

  drawSprites();
  //checkGameOver();

}


function resetGame() {
  frog = createSprite(width/2, height-30, 20, 40);
  goal = createSprite(width/2, 0, width, 4);
  dream1 = createSprite(0, height/2, 60, 30);
  dream1.setVelocity(random(3, 10), 0);
}


function keyPressed() {
  if (keyCode == UP_ARROW) {
    frog.position.y -= 10;
  }
  if (keyCode == DOWN_ARROW) {
    frog.position.y -= -10;
  }
  if (keyCode == LEFT_ARROW) {
    frog.position.x -= 10;
  }
  if (keyCode == RIGHT_ARROW) {
    frog.position.x -= -10;
  }
}







function nextLevel() {
  frog.position.x = width/2;
  frog.position.y = height-30;
>>>>>>> My_Frog
}
