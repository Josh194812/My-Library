var moving_rectangle, rectange, collision, box1, box2, box3, box4;

function setup() {
  createCanvas(800,400);
  moving_rectangle = createSprite(200,200,50,50);
  rectangle = createSprite(200,240,50,50);
  box1 = createSprite(300,260,50,50);
  box2 = createSprite(200,140,50,50);
  box3 = createSprite(300,140,50,50);
  box4 =createSprite(100,150,50,50);
  collision=false;

  rectangle.shapeColor="green";
  moving_rectangle.shapeColor="green";
}

function draw() {
  background(0,0,0);  
  moving_rectangle.x=mouseX;
  moving_rectangle.y=mouseY;

  if(isTouching(moving_rectangle, box2)){
    moving_rectangle.shapeColor="red";
    box2.shapeColor="red";
  }
  else {
      box2.shapeColor="green";
      moving_rectangle.shapeColor="green";
  }
    
  
  drawSprites();

}

