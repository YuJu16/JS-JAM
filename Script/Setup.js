//game stage
var stage = 0;

//canva
let canvas;

var platform;
var characterImage;
var backgroundImage;
var botImage;
var coinImage;
var leftkniffe;
var rightkniffe;
var upkniffe;
var wall1HP;
var wallMidHP;
var wallFullHP;
var button;

//function that setup the canvas
function setup() {
    //createCanvas(windowWidth-35, windowHeight-35);
    createCanvas(1400, 750);
    rectMode(CENTER);
    textAlign(CENTER);
    imageMode(CENTER);
    loadMap1();
}

//function that draw the page
function draw() {
    if (stage == 1) {
        drawMap1();
    }
    keyPressed();
    if (isOnAGround() == false && jumping == false) {
        jumping = true;
        flyingFramecount = 175;
    }

    if (!playerState) {
        alert('Vous êtes mort, f5 pour ressayer')
    }
}

function preload() {
    characterImage = loadImage('src/img/ninja2D.png');
    platform = loadImage('src/img/platform.png');
    backgroundImage = loadImage('src/img/background.png');
    botImage = loadImage('src/img/ninjaMechant.png');
    coinImage = loadImage('src/img/coin.png');
    leftkniffe = loadImage('src/img/leftkn.png');
    rightkniffe = loadImage('src/img/rightkn.png');
    upkniffe = loadImage('src/img/upkn.png');
    wall1HP = loadImage('src/img/wall1HP.png');
    wallMidHP = loadImage('src/img/wallMidHP.png');
    wallFullHP = loadImage('src/img/wallFullHP.png');
    button = loadImage('src/img/button.png');
}

function pastedlvl() {
    stage++;
}
