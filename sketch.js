var fixingrect,movingrect

function setup() {

 createCanvas(1200,800)
  fixingrect=createSprite(600,400,60,80)
  fixingrect.shapeColor="green"
 movingrect=createSprite(400,200,80,30)
 movingrect.shapeColor="green"
}

function draw() {

  background(255,255,255);  
  movingrect.x=World.mouseX
  movingrect.y=World.mouseY
  if(movingrect.x-fixingrect.x<fixingrect.width/2+movingrect.width/2
    &&  fixingrect.x-movingrect.x<fixingrect.width/2+movingrect.width/2
    && movingrect.y-fixingrect.y<fixingrect.width/2+movingrect.width/2
    && fixingrect.y-movingrect.y<fixingrect.width/2+movingrect.width/2 ){
  fixingrect.shapeColor="red"
  movingrect.shapeColor="red"
    }else{
      fixingrect.shapeColor="green"
    
      movingrect.shapeColor="green"
    }
  drawSprites();
}