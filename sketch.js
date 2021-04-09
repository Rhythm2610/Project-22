const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;


var engine , world;
var ball;
var ball2;
var ground;

function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
 
  var ball_options={
 
    restitution:1.0
  }

  var ball2_options={
     restitution:2.0
  }

  var ground_options={
    isStatic:true
  }

ball=Bodies.rectangle(200,200,50,50,ball_options);
World.add(world,ball);
 
ball2=Bodies.circle(100,200,30,ball2_options);
World.add(world,ball2);


ground=Bodies.rectangle(200,390,200,20,ground_options);
World.add(world,ground)

}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ball.position.x,ball.position.y,50,50);
  fill("green");
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS)
  ellipse(ball2.position.x,ball2.position.y,30);
  
 
}
