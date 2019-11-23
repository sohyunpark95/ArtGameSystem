let canvas;
let canvasWidth = 400;
let canvasHeight = 400;
let frog;
let car1;
let goal;

function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position(windowWidth/2 - canvasWidth/2, 20);
  noCursor();
  resetGame();
}

function draw() {
  background(220);


  if (car1.position.x >= width) {
    car1.position.x = 0;
    car1.setVelocity(random(3, 10), 0);
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
  car1 = createSprite(0, height/2, 60, 30);
  car1.setVelocity(random(3, 10), 0);
}


function keyPressed() {
  if (keyCode == UP_ARROW) {
    frog.position.y -= 10;
  }
}







function nextLevel() {
  frog.position.x = width/2;
  frog.position.y = height-30;
}
