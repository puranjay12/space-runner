

var ground, ground2, pl, plimg, obsimg1, obsimg2, obsimg3, backgroundimg, coinimg,
 coin, obstacle, reset, obsGroup, resetimg, coinGroup, crashsound, count, ground3

var gameState = 0

count = 0

function preload() {
     plimg = loadImage("shuttle.png");
     obsimg1 = loadImage("sat1.png");
     obsimg2 = loadImage("sat2.png");
     obsimg3 = loadImage("sat3.png");
    backgroundimg = loadImage("earth.jpg")
    coinimg = loadImage("untitled.png")
    resetimg = loadImage("reset.jpg")
    crashsound = loadSound("crash.m4a")
}

function setup(){
    var canvas = createCanvas(displayWidth,displayHeight);
   
    ground = createSprite(displayWidth/2,displayHeight-10,displayWidth,10)
    ground.visible = false

    ground2 = createSprite(displayWidth/2,0,displayWidth,10)
    ground2.visible = false

    
   
    
    pl = createSprite(20,400,10,10)
    pl.addImage("pl",plimg);
    pl.scale = 0.1

    obsGroup = new Group()
    coinGroup = new Group()


}

function draw(){
    background(0);
    backgroundimg = loadImage("earth.jpg")
    ground3 = createSprite(displayWidth,displayHeight/2,displayWidth,displayHeight)
    ground3.lifetime = displayWidth/1
    ground3.addImage(backgroundimg)
 ground3.velocityX = -1
  if(frameCount>1000){
    backgroundimg = loadImage("moon.jpg")
    ground3 = createSprite(displayWidth,displayHeight/2,displayWidth,displayHeight)
    ground3.lifetime = displayWidth/2
    ground3.addImage(backgroundimg)
    ground3.velocityX = -2
  }

  if(frameCount>2000){
    backgroundimg = loadImage("mars.jpg")
    ground3 = createSprite(displayWidth,displayHeight/2,displayWidth,displayHeight)
    ground3.lifetime = displayWidth/2
    ground3.addImage(backgroundimg)
    ground3.velocityX = -2
  }

  if(frameCount>3000){
    backgroundimg = loadImage("jupiter.jpg")
    ground3 = createSprite(displayWidth,displayHeight/2,displayWidth,displayHeight)
    ground3.lifetime = displayWidth/2
    ground3.addImage(backgroundimg)
    ground3.velocityX = -2
  }

  if(frameCount>4000){
    backgroundimg = loadImage("saturn.jpg")
    ground3 = createSprite(displayWidth,displayHeight/2,displayWidth,displayHeight)
    ground3.lifetime = displayWidth/2
    ground3.addImage(backgroundimg)
    ground3.velocityX = -2
  }

  if(frameCount>5000){
    backgroundimg = loadImage("uranus.jpg")
    ground3 = createSprite(displayWidth,displayHeight/2,displayWidth,displayHeight)
    ground3.lifetime = displayWidth/2
    ground3.addImage(backgroundimg)
    ground3.velocityX = -2
  }

  if(frameCount>6000){
    backgroundimg = loadImage("neptune.jpg")
    ground3 = createSprite(displayWidth,displayHeight/2,displayWidth,displayHeight)
    ground3.lifetime = displayWidth/2
    ground3.addImage(backgroundimg)
    ground3.velocityX = -2
  }

  if(frameCount>7000){
    backgroundimg = loadImage("edge.jpg")
    ground3 = createSprite(displayWidth,displayHeight/2,displayWidth,displayHeight)
    ground3.lifetime = displayWidth/2
    ground3.addImage(backgroundimg)
    ground3.velocityX = -2
  }
  ground3.depth = pl.depth;
    pl.depth = pl.depth + 1;
    spawnImg()
  

   pl.setCollider("rectangle",30,30,30,30) 
  

    if(gameState===0){
      

      pl.collide(ground)
      pl.collide(ground2)
      

      if(keyDown(UP_ARROW)){
        pl.y = pl.y-5
    }
    if(keyDown(DOWN_ARROW)){
        pl.y = pl.y+5
    }

    spawnObstacles()
    spawnCoins()

    if(obsGroup.isTouching(pl)){
      gameState = 1
      crashsound.play()
    }

    if(coinGroup.collide(pl)){
      coin.destroy()
      coin.lifetime = 0
      count=count+1
    }

    }
  

    else if(gameState===1){
      reset = createSprite(displayWidth/2,displayHeight/2,800,800)
      reset.addImage("reset",resetimg)
    reset.scale = 2
    ground3.velocityx = 0
  
       if(mousePressedOver(reset)) {
     
        resetGame()
      }
    }
    
  
    console.log(count)
    textSize(35)
    fill("white")
    text("score: "+count,displayWidth/2,displayHeight-displayHeight+30)
    


    
    
 drawSprites() 

}
function spawnObstacles() {
    if(frameCount % 40 === 0) {

      var randy = random(10,displayHeight-10)
      
       obstacle = createSprite(displayWidth,randy,5,5);
      obstacle.addImage("obstacle",obsimg3);
      obstacle.scale = 0.1
      obstacle.velocityX = -6;
      obstacle.lifetime = displayWidth/6;
//obstacle.collide(pl)
   obsGroup.add(obstacle)
   ground3.depth = obstacle.depth;
    obstacle.depth = obstacle.depth + 1;
   
    }
    
  }
  function spawnCoins() {
    if(frameCount % 20 === 0) {

      var rand = random(10,displayHeight-10)
      
       coin = createSprite(displayWidth,rand,5,5);
      coin.addImage("coin",coinimg);
      coin.scale = 0.05
      coin.velocityX = -6;
      coin.lifetime = displayWidth/6;
      //coin.collide(pl)
      coinGroup.add(coin)
      ground3.depth = coin.depth;
    coin.depth = coin.depth + 1;
    
    }
  }
  
 
 function resetGame(){

  reset.visible = false
  obsGroup.destroyEach()
        gameState = 0
        count = 0
}

function spawnImg(){
  
    
}