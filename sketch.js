var fixedRect, movingRect;

function setup() {
  createCanvas(800,600);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 500,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background("white");  
  fill("red");
  text("Moving rectangle position:   ("+movingRect.x+","+movingRect.y+")",20,120);
  text("Fixed rectangle position:     ("+fixedRect.x+","+fixedRect.y+")",20,160);
  fill("black")
  text("Gap betweem them....",20,200)
  text("Horizontal:"+(movingRect.x-fixedRect.x),20,240);
  text("Vertical:"+(movingRect.y-fixedRect.y),20,280);
  text(fixedRect.width,fixedRect.x,(fixedRect.y-fixedRect.height/2-5));
  text(fixedRect.height,(fixedRect.x-fixedRect.width/2-25),fixedRect.y);

  text(movingRect.width,movingRect.x,(movingRect.y-movingRect.height/2-5));
  text(movingRect.height,(movingRect.x-movingRect.width/2-25),movingRect.y);
  if(World.frameCount<200){
    if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
       && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2) {
        movingRect.velocityX = movingRect.velocityX * (-1);
        fixedRect.velocityX = fixedRect.velocityX * (-1);
    }
    if (movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
      && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
        movingRect.velocityY = movingRect.velocityY * (-1);
        fixedRect.velocityY = fixedRect.velocityY * (-1);
    }
  }

  if(World.frameCount===200){
    fixedRect.x=10;
    fixedRect.y=300;
    movingRect.x=590;
    movingRect.y=300;
    movingRect.velocityX = -5;
    fixedRect.velocityX = +5;
    movingRect.velocityY = 0;
    fixedRect.velocityY = 0;
  }
  if(World.frameCount>200){
    if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
      && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2) {
      movingRect.velocityX = movingRect.velocityX * (-1);
      fixedRect.velocityX = fixedRect.velocityX * (-1);
    }
    if (movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
      && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
      movingRect.velocityY = movingRect.velocityY * (-1);
      fixedRect.velocityY = fixedRect.velocityY * (-1);
    }
  }
  drawSprites();
}