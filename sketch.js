const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,iron,stone,rubber;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    iron= new Iron(600,450);
  stone= new Stone(820,450);
rubber = new Rubber(400,450);

}

function draw(){
    background("lime");
    Engine.update(engine);


    plane.display();
    hammer.display();
iron.display();
stone.display();    
rubber.display();
}