//game stage
var stage = 0;

var platform;
var characterImage;
var backgroundImage;
var botImage;
var coinImage;

//function that setup the canvas
function setup() {
    createCanvas(windowWidth-35, windowHeight-35);
    //createCanvas(800, 500);
    rectMode(CENTER);
    textAlign(CENTER);
    imageMode(CENTER);

    loadMap1();
}

//function that draw the page
function draw() {
    if (stage == 0) {
        drawMap1();
    }
    keyPressed();
    if (isOnAGround() == false && jumping == false) {
        jumping = true;
        flyingFramecount = 175;
    }
}

function preload() {
    characterImage = loadImage('src/img/ninja2D.png');
    platform = loadImage('src/img/platform.png');
    backgroundImage = loadImage('src/img/background.png');
    botImage = loadImage('src/img/ninjaMechant.png');
    coinImage = loadImage('src/img/coin.png');
}