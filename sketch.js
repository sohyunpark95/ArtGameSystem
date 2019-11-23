let canvas;
let canvasWidth = 400;
let canvasHeight = 400;
let frog;
let dream1;
let goal;

function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position(windowWidth/2 - canvasWidth/2, 20);
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
}
