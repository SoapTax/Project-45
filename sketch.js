// https://www.pixilart.com/art/lives-b33dc72c4fd7499
var START = 0
var PLAY = 1
var END = 2
var gameState = START
var level = 0
var lives = 3

function preload(){
bgImg = loadImage("Space background.jpeg")
startImg = loadImage("startImg.png")
titleImg = loadImage("titleImage.png")
storyImg = loadImage("storyImage.png")
playButtonImg = loadImage("startButton.png")
lifeImg = loadImage("life.gif")
playerStandingImg = loadImage("playerImage.png")
platform1Img = loadImage("platform1.png")
barOutlineImg = loadImage("bar1.png")
lifeBarImg1 = loadAnimation("barFull.png")
lifeBarImg2 = loadAnimation("bar2Full.png")
lifeBarImg3 = loadAnimation("bar3Full.png")
}

function setup(){
  createCanvas(windowWidth, windowHeight)
  bg = createSprite(width/2, height/2)
  bg.addImage(bgImg)
  bg.scale = 0.8
  bg.visible = false

  startbg = createSprite(width/2, height/2)
  startbg.addImage(startImg)
  startbg.scale = 1.7

  title = createSprite(width/2, height/2 -100)
  title.addImage(titleImg)
  title.scale = 1

  story = createSprite(width/2 - 30, height/2 + 230)
  story.addImage(storyImg)
  story.scale = 4

  playButton = createSprite(width/2, height/2 + 230)
  playButton.addImage(playButtonImg)
  playButton.scale = 7

  lifeIndicator = createSprite(width - 270, 90)
  lifeIndicator.addImage(lifeImg)
  lifeIndicator.scale = 2

  player = createSprite(width/2, height/2)
  player.addImage(playerStandingImg)
  player.scale = 1
  player.visible = false

  barOutline = createSprite(width - 200, 100)
  barOutline.addImage(barOutlineImg)
  barOutline.scale = 2.5

  platformGroup = new Group()

  lifeBar = createSprite(width - 190, 92)
  lifeBar.addAnimation("full life", lifeBarImg1)
  lifeBar.addAnimation("2/3 life", lifeBarImg2)
  lifeBar.addAnimation("1/3 life", lifeBarImg3)
  lifeBar.changeAnimation("full life")
  lifeBar.scale = 1.1
}

function draw() {
background(0)
if(gameState === START){
    if(mousePressedOver(playButton)){
        gameState = PLAY
    }
}

if(gameState === PLAY){
    startbg.visible = false
    playButton.visible = false
    title.visible = false
    story.visible = false
    bg.visible = true
    player.visible = true

    if(keyIsDown(LEFT_ARROW)){
        player.x -= 15
    }
    if(keyIsDown(RIGHT_ARROW)){
        player.x += 15
    }
}

drawSprites()

fill("white")
textSize(40)
text(lives, width - 170, 110)
}

function blink(){
    if(frameCount % 300 === 0){

    }
}

function spawnPlatforms(){

}