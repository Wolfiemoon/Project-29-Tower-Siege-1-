//Constraints
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
//Variables
var engine, world;
var block1;
var platform;
//Gamestate
var gameState ="Onsling"
function preload(){

}

function setup(){
//World engine
var canvas = createCanvas(1200,400);
engine = Engine.create();
world = engine.world;

//Bodies

//Platforms
platform1=new Platform(390,290, 250,15)
platform2=new Platform(700,220,200,15)

//Blocks

//Level1

//Platform 1
block1 =new blueBlock(300,210,30,40)
block2 =new blueBlock(330,210,30,40)
block3 =new blueBlock(360, 210, 30, 40)
block4 =new blueBlock(390, 210, 30, 40)
block5 =new blueBlock(420, 210, 30, 40)
block6 =new blueBlock(450, 210, 30, 40)
block7 =new blueBlock(480, 210, 30, 40)
//Platform 2
block8 =new blueBlock(640, 200, 30, 40)
block9 =new blueBlock(670, 200, 30, 40)
block10=new blueBlock(700, 200, 30, 40)
block11=new blueBlock(730, 200, 30, 40)
block12=new blueBlock(760, 200, 30, 40)

//Level2
block13 =new pinkBlock(330, 190, 30, 40)
block14 =new pinkBlock(360, 190 ,30 ,40)
block15=new pinkBlock(390, 190, 30, 40)
block16=new pinkBlock(420, 190, 30, 40)
block17=new pinkBlock(450, 190, 30, 40)
//Level3
block18=new aquaBlock(360, 160, 30, 40)
block19=new aquaBlock(390, 160, 30, 40)
block20=new aquaBlock(420, 160, 30, 40)
//Platform 2
block21=new aquaBlock(670, 100, 30, 40)
block22=new aquaBlock(700, 100, 30, 40)
block23=new aquaBlock(730, 100, 30, 40)
//Level4
block24=new greyBlock(390, 100, 30, 40)
//Platform 2 Final Lvl
block25=new pinkBlock(700, 10, 30, 40)
//PolyStone
polygon=new Polygon(50,200,50,50)
slingshot = new SlingShot(polygon.body,{x:100, y:200});
}

function draw(){
background(56,44,44)
//Matter engine <UPDATE>
Engine.update(engine);

//Display

//Platform Display
platform1.display();
platform2.display();

//Blocks Display
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();
block16.display();
block17.display();
block18.display();
block19.display();
block20.display();
block21.display();
block22.display();
block23.display();
block24.display();
block25.display();
//Polystone Display
polygon.display();
slingshot.display();
}
//MOUSE FUNCTIONS
function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
  //  gameState = "launched";
}

//function keyPressed(){
//    if(keyCode === 32){
//    }
//}