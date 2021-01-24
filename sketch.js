//Constraints
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
//Variables
var engine, world;
var block1;
var platform;

function preload(){

}

function setup(){
//World engine
var canvas = createCanvas(1200,400);
engine = Engine.create();
world = engine.world;

//Bodies
platform1=new Platform(400,290, 200,20)
testpltfrm=new Platform(600,400,1200,50)
block1 =new Block(200,150,50,50)
block2 =new Block(200,120,50,50)
polygon=new Polygon(200,50,50,50)
slingshot = new SlingShot(polygon.body,{x:200, y:50});
}

function draw(){
background(56,44,44)
//Matter engine <UPDATE>
Engine.update(engine);
//Display
platform1.display();
testpltfrm.display();
block1.display();
block2.display();
polygon.display();
slingshot.display();
}
//MOUSE FUNCTIONS
function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}