var moving_rectangle, rectange;

function setup() {
  createCanvas(800,400);
  moving_rectangle = createSprite(200,200,50,50);
  moving_rectangle.velocityY=3;

  rectangle = createSprite(200,300,50,50);
 rectangle.velocityY=-3;
  moving_rectangle2 = createSprite(300,200,50,50);
  moving_rectangle2.velocityY=3;

  rectangle2 = createSprite(300,300,50,50);

  moving_rectangle3 = createSprite(400,200,50,50);
  moving_rectangle3.velocityY=3;

  rectangle3 = createSprite(400,300,50,50);


  moving_rectangle4 = createSprite(100,200,50,50);
  moving_rectangle4.velocityY=3;

  rectangle4 = createSprite(100,300,50,50);

  rectangle.shapeColor="green";
  moving_rectangle.shapeColor="green";
  rectangle2.shapeColor="green";
  moving_rectangle2.shapeColor="green";
  rectangle3.shapeColor="green";
  moving_rectangle3.shapeColor="green";
  rectangle4.shapeColor="green";
  moving_rectangle4.shapeColor="green";
}

function draw() {
  background(0,0,0);  
bounce(moving_rectangle,rectangle);
bounceOff(moving_rectangle2,rectangle2);
collide(moving_rectangle3,rectangle2);
displace(moving_rectangle4,rectangle4);
  drawSprites();

}
