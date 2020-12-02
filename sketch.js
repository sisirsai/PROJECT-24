
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var matchMedia,Amber,hydra,theKing,paper;

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 matchMedia= new Block(1000-29,480,200,20);
	Amber = new Block(1070,440,20,100);
	hydra = new Block(880,440,20,100);
	theKing= new Block(650,500,width+100,20);
	paper= new Paper(100,200,40);
	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  theKing.display("lightblue");
 matchMedia.display("yellow");
  Amber.display("yellow");
  hydra.display("yellow");
  paper.display();
  
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
 Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}




