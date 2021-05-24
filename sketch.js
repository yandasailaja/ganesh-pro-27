var roof,rope1,bobObject1,bobObject2,bobObject3,bobObject4,bobObject5,bobDiameter;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(400,40,500,30);

	bobObject1 = new Bob(200,470,30);
	bobObject2 = new Bob(300,470,30);
	bobObject3 = new Bob(400,470,30);
	bobObject4 = new Bob(500,470,30);
	bobObject5 = new Bob(600,470,30);


	rope1 = new Rope(bobObject1.body, roof.body, -100*2, 0);

	rope2 = new Rope(bobObject2.body, roof.body, -50*2, 0);

	rope3 = new Rope(bobObject3.body, roof.body, -0*2, 0);

	rope4 = new Rope(bobObject4.body, roof.body, 50*2, 0);

	rope5 = new Rope(bobObject5.body, roof.body, 100*2, 0);


	Engine.run(engine);
  
}


function draw() {
  
  background("white");
  Engine.update(engine);

  roof.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprite();
}

function keyPressed(){
	if(keyCode===LEFT_ARROW){
		Matter.Body.applyForce(bobObject1.body, bobObject1.body.position,{x:-50, y:-10});
	}
}
