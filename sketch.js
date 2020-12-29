var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score,ground;
var obstacle;
var background0,background0IMG;
function preload(){  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 background0IMG = loadImage("jungle.jpg")
}



function setup() {
                     
createCanvas(400,400)
   
  background0 = createSprite(200,200,10,10)
  background0.addImage(background0IMG)
  background0.velocityX = -4
  
  
  ground = createSprite(0,360,10000,10)

  monkey =  createSprite(30,280 ,20,20)
  monkey.addAnimation("monkey",monkey_running)
  monkey.scale =0.07    ;
foodGroup = new Group();

  ground.visible = false;

}

function draw() {  
 background("white")
if(keyDown("space")&& monkey.y>=250){
  monkey.velocityY =-12;
}
    
     if (background0.x < 0){
      background0.x = background0.width/2;
    }

    monkey.velocityY  = monkey.velocityY + 0.8
  monkey.collide(ground)
   if(frameCount % 80 === 0 ){
    
    
    banana = createSprite(390,120,20,20)
    banana.y = Math.round(random(140,250))  
    banana.scale = 0.09;
    banana.velocityX = -4;
    banana.lifetime = 100;
   banana.addImage(bananaImage);
  }
   if(frameCount % 300 === 0 ){
    
    
    obstacle = createSprite(390,325,20,20)
    obstacle.scale = 0.09;
    obstacle.velocityX = -4;
    obstacle.lifetime = 100;
   obstacle.addImage(obstacleImage);
  }

  drawSprites();
 fill("white")
 
}

function spawnObstacle(){
   
}

function createBanana(){
 
}


