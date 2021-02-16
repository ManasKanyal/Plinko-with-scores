const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body=Matter.Body;
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;
var particle;
var turns = 0;

var gameState = "play";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
 
    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);

 textSize(28)
 text("500",17,540);

 
 textSize(28)
 text("500",97,540);

 
 textSize(28)
 text("500",97 + 80,540);

 
 textSize(28)
 text("500",97+ 160,540);

 textSize(28)
 text("100",97+ 160 + 80,540);

 textSize(28)
 text("100",97+ 160 + 160,540);

 textSize(28)
 text("100",97+ 160+240,540);

 textSize(28)
 text("200",97+ 160+480,540);

 textSize(28)
 text("200",97+ 160+320,540);

 textSize(28)
 text("200",97+ 160+400,540);

 textSize(20)
 text("Turns :" + turns,690,30);


  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if(turns >= 5){

   gameState = "end"
   textSize(100);
   text("GameOver", 150, 250);
   
  }

   if(particle != null){

    particle.display();

    if(particle.body.position.y > 760){

      if(particle.body.position.x < 300 ){
      
        score = score + 500;
        particle = null;
      
       
      
      }
      
      }

   }

   if(particle != null){

    particle.display();

    if(particle.body.position.y > 760){

      if(particle.body.position.x > 301 && particle.body.position.x < 600 ){
      
        score = score + 100;
        particle = null;
      
             
      }
      
      }

   }

   if(particle != null){

    particle.display();

    if(particle.body.position.y > 760){

      if(particle.body.position.x > 601 && particle.body.position.x < 900 ){
      
        score = score + 200;
        particle = null;
      
       
      
      }
      
      }

   }

}

function mousePressed(){

if(gameState !== "end"){

  turns++
  particle = new Particle(mouseX,10,10,10);


}


}