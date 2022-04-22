var ground, groundMove
var trex ,trex_running;
function preload(){
trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")

 groundMove=loadImage("ground2.png")

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex=createSprite(100,150,2,2)
  trex.addAnimation("running",trex_running)
  trex.scale=0.5
  ground=createSprite(700,180)
  ground.addImage(groundMove)
}

function draw(){
  background("white")
  if (keyDown("space")){
  trex.velocityY=-8
  }
  trex.velocityY+=0.5
  trex.collide(ground)
  ground.velocityX=-8
  if (ground.x<=0) {
    ground.x=600
  }
  
  drawSprites()
}
