
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	ball = new Ball(50,345,70);
	World.add(world,ball);
	
	ground = new Ground(400,350,800,20);
	World.add(world,ground);

	dustbin1 = new Dustbin(700,260,150,20);
	World.add(world,dustbin1);
	
	dustbin2 = new Dustbin(650,260,20,120);
	World.add(world,dustbin2);

	dustbin3 = new Dustbin(730,260,20,120);
	World.add(world,dustbin3);

	Engine.run(engine);
  
}


function draw(){
  rectMode(CENTER);
  background("grey");

  ball.display();
  ground.display();
  
  dustbin2.display();
  dustbin3.display();
  dustbin1.display();
  
  
 
}                                                                                       
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:100,y:-90});
	}
}



