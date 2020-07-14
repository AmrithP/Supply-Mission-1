var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var background1, backgroundIMG;
var text1, text1Image, text2, text2Image;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
	backgroundIMG = loadImage("AcZacvL.jpg");
	text1Image = loadImage("text.png");
	text2Image = loadImage("text2.png");

}

function setup() {

	createCanvas(800, 700);
	rectMode(CENTER);
	
	background1 = createSprite(400,350,800,700);
	background1.addImage(backgroundIMG);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	text1 = createSprite(660,140,50,50);
	text1.addImage(text1Image);
	text1.scale = 0.2;

	text2 = createSprite(660,340,50,50);
	text2.addImage(text2Image);
	text2.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);

	
  
}


function draw() {
  rectMode(CENTER);
  background(0);


  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
  console.log(packageBody);
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody, false);
  }
}


