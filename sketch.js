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
block1 =new Block(200,100,50,50)
poly=new Poly(200,50,100,100)
rope = new SlingShot(poly.body,{x:200, y:50});
}

function draw(){
background(56,44,44)
//Display
platform1.display();
block1.display();
poly.display();
rope.display();
}

