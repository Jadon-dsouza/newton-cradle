
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;
var backgroundImage;
function preload() {
 backgroundImage=loadImage("sprites/bg.png")   
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)
    platform= new Ground(150,305,300,170)

    ball1 = new Ball(700,320,70,70);
    ball2 = new Ball(920,320,70,70);
    ball3 = new Ball(700,320,70,70)
   top = new Box(810,160,70,70);
    
    ball4 = new Ball(100,100);

}

function draw(){
    background(backgroundImage);
    Engine.update(engine);
    ball1.display();
    ball2.display();
    ground.display();
    
    ball3.display();
    ball4.display();

    bird.display();
}
