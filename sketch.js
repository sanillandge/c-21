
var fixedRect, movingRect;
var gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);
 
 gameObject1 = createSprite(950,450,70,30)
 gameObject1.shapeColor ="yellow";
 gameObject2 = createSprite(950,100,70,30)
 gameObject2.shapeColor ="cyan";

  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";
  
  gameObject1.velocityY =-3
  gameObject2.velocityY =3
  
  gameObject1.velocityX =0
  gameObject2.velocityX =0
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect, gameObject1)){
    movingRect.shapeColor = "blue";
    gameObject1.shapeColor = "blue";
  }
  
  else {
    movingRect.shapeColor = "green";
  
    gameObject1.shapeColor = "yellow"
  }
 
bounceOff(gameObject1, gameObject2)
//bounceOff(movingRect,fixedRect)
  drawSprites();
}


