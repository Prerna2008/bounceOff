var movingRect, fixRect,ball1,ball2,ball3,ball4;
function setup() {
  createCanvas(800,400);
  
  fixRect=createSprite(200,300,50,80);
  fixRect.shapeColor="green";
  movingRect = createSprite(400,300,50,80);
  movingRect.shapeColor="green";
  ball1=createSprite(100,100,20,20);
  ball1.velocityX=3;
  ball2=createSprite(300,100,20,20);
  ball2.velocityX=-4;
  ball3=createSprite(100,300,20,20);
  ball4=createSprite(100,400,20,20);

}

function draw() {
  background(255,255,255);  
  movingRect.x = mouseX;
  movingRect.y=mouseY;
  if(isTouching(ball2,movingRect)){
    ball2.shapeColor="yellow";
    movingRect.shapeColor="orange";
  }
  else{
    ball2.shapeColor="green";
    movingRect.shapeColor="green";
  }
 bounceOff(ball1,ball2)
  console.log(movingRect.x-fixRect.x);
  drawSprites();
}
//function with argument
