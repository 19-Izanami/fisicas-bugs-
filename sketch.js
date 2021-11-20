const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies; 

var engine , world, ground,ball;

function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;

  var  options = {isStatic:true}

  ground = Bodies.rectangle(400,380,50,20,options);
  World.add(world,ground);

    var balloptions = {restitution: 1.5}
  ball = Bodies.circle(200,100,20, balloptions);
  World.add(world,ball);
}

function draw() {
  background(0);  

  Engine.update(engine);

  rectMode(CENTER);
  rect(ground.position.x, ground.position.y,800,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y,20,20);
}