
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, ground, dustbin1, dustbin2, dustbin3; 
function preload()
{
	
}

function setup() {
	createCanvas(1000, 300);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,290,8000,20);
	dustbin1 = new trash(610,280, 100, 20);
    dustbin2 = new  trash(550,240,20,100);
    dustbin3 = new trash(670,240,20,100)

	paper = new crump (100,200, 30 );
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  paper.display();
ground.display()
  drawSprites();
 
}

function keyPressed(){
    if (keyCode === UP_ARROW ) {
		Matter.Body.applyForce(paper.body, paper.body.position, {x: 33,y: -105})}
  }


