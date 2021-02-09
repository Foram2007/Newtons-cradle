
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1,bob2,bob3,bob4,bob5,ground1,sling1,sling2,sling3,sling4,sling5;
var Bob

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 =new Bob(300,350,50)
	bob2 =new Bob(350,350,50)
	bob3 =new Bob(400,350,50)
	bob4 =new Bob(350,350,50)
	bob5 =new Bob(500,350,50)

	ground1 = new Ground (400,100,300,10)
	sling1 = new Suspender (bob1,body,ground1.body,50*2,0)
	sling2 = new Suspender (bob2,body,ground1.body,-25*2,0)
	sling3 = new Suspender (bob3,body,ground1.body,-0*2,0)
	sling4 = new Suspender (bob4,body,ground1.body,25*2,0)
	sling5 = new Suspender (bob5,body,ground1.body,50*2,0)




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(bob1.body,{x:mouseX,y:mouseY})
}



