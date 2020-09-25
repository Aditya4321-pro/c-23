const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var box1 ,box2,ground;
function setup() {
  var canvas=createCanvas(400,400);
 engine=Engine.create();
world=engine.world;
box1=new Box(200,80,10,30);
ground=new Ground(50,390,400,20);
box2=new Box(200,50,10,30);
}

function draw() {
  background("red");  
  Engine.update(engine);
  box1.display();
  box2.display();
  ground.display();
}