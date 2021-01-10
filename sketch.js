var ball,side1,side2,side3,ground,paper,binImg,bin,dustbin;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){

	binImg=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1400, 600);

	engine = Engine.create();
	world = engine.world;
	
	fill("yellow");
	
    

	ground= Bodies.rectangle(700,560,1400,20, {isStatic:true});
	World.add(world,ground);

	
	
	

	side1= new Box(1100,540,120,20);
	side2= new Box(1050,470,20,160);
	side3= new Box(1150,470,20,160);

	
	dustbin= new Dustbin(1100,470,140,165);

    paper=new Paper();



	Engine.run(engine);
  
}


function draw() {
  
  background("lightgrey");
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,1400,20);
 


  side1.display();
  side2.display();
  side3.display();

  dustbin.display();
  
  paper.display();
  
  drawSprites();
 
}
function keyPressed(){
	
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-80})
	}
}





