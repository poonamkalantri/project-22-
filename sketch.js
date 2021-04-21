var starImg,bgImg,fairyImg,star1Img;
var star, starBody,fairy,fairyBody,star1,star1Body;
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/starImage.png");
	bgImg = loadImage("images/starNight.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	star1Img = loadImage("images/star.png");
	star2Img = loadImage("images/star.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");
};

function setup() {
	createCanvas(800, 750);

    fairyVoice.play();

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.04;

	star1 = createSprite(700,35);
	star1.addImage(star1Img);
	star1.scale = 0.09;

	star2 = createSprite(100,50);
	star2.addImage(star2Img);
	star2.scale = 0.1;

	fairy = createSprite(320,455);
	fairy.addAnimation("fai",fairyImg);
	fairy.scale = 0.3;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);

	star1Body = Bodies.circle(700 , 35 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, star1Body);

	star2Body = Bodies.circle(100 , 50 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, star2Body);
	
	fairyBody = Bodies.circle(320 , 455 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, fairyBody);

	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  fairy.x= fairyBody.position.x 
  fairy.y= fairyBody.position.y 

  star1.x= star1Body.position.x 
  star1.y= star1Body.position.y 

  star2.x= star2Body.position.x 
  star2.y= star2Body.position.y 

//   console.log(star.y);
//   console.log(fairy.y);

  if(star.y > 420 && starBody.position.y > 420){
     Matter.Body.setStatic(starBody,true); 
  }

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

    if (keyCode === RIGHT_ARROW){
		fairyBody.x = fairyBody.x+30;
		Matter.Body.translate(fairyBody,{x:30,y:0});
	}	

	if (keyCode === LEFT_ARROW){
		fairyBody.x = fairyBody.x-30;
		Matter.Body.translate(fairyBody,{x:-30,y:0});
	}	
   
}
