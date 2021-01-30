
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var hammer;
var stone;
var iron;
var rubber;
var sand1, sand2, sand3, sand4, sand5;
var sand6, sand7, sand8, sand9, sand10;


function setup() {
	var canvas = createCanvas(800, 600);

	engine = Engine.create();
	world = engine.world;
	
	  hammer = new Hammer(100,20);
    ground = new Ground(400,590,800,20);
    stone = new Stone(350,580,100,100);
    iron = new Iron(490,580,50,50);
    rubber = new Rubber(600,580,50,PI/2);
    sand1 = new Sand(200,580,10,PI/2);
    sand2 = new Sand(205,580,10,PI/2);
    sand3 = new Sand(210,580,10,PI/2);
    sand4 = new Sand(215,580,10,PI/2);
    sand5 = new Sand(220,580,10,PI/2);
    sand6 = new Sand(225,580,10,PI/2);
    sand7 = new Sand(230,580,10,PI/2);
    sand8 = new Sand(235,580,10,PI/2);
    sand9 = new Sand(240,580,10,PI/2);
    sand10 = new Sand(245,580,10,PI/2);
}


function draw() {
  background("lightblue");
  Engine.update(engine);
  hammer.display();
  ground.display();
  stone.display();
  iron.display();
  rubber.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
  sand9.display();
  sand10.display();
}
