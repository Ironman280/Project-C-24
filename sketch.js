var ground,paperBall;
var LeftSideBox, RightSideBox;
var BoxGround	

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	paperBall = new Paper(200,600,25);
	//World.add(world, packageBody);
	

	//Create a Ground
	ground = new Ground(400,675,800,20);

	LeftSideBox = new Dsides(600,616,10,100);

	RightSideBox = new Dsides(700,616,10,100);

	BoxGround = new Dsides(650,665,100,10);
  
}


function draw() {
  background(0);
  Engine.update(engine);

  ground.display();	

  paperBall.display();
  
  LeftSideBox.display();
  RightSideBox.display();
  BoxGround.display();
  
  drawSprites();
 
}

function keyPressed(){
      if (keyCode === UP_ARROW){
		  Matter.Body.applyForce(paperBall.body, paperBall.body.position,{x:85, y:-85})
	  }
}



