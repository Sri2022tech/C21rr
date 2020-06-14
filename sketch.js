var fixedRect, movingRect, wall, car;

function setup() {
  createCanvas(1200,800);
  car = createSprite(600,600,30,30);
  car.shapeColor="white";
  wall = createSprite(600,200,150,30);
  wall.shapeColor="blue";
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  car.velocityY=-5;
}

function draw() {
  background(0,0,0);  

 if(isTouching(car,wall)){
     car.shapeColor="yellow";
     console.log("rr");
 }
  isTouching(fixedRect,movingRect);
  Bo(car,wall);
  Bo(fixedRect,movingRect);
  drawSprites();
}

