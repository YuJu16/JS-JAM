//game stage
var stage = 0;

var platform;
var characterImage;
var backgroundImage;
var botImage;
var coinImage;
var leftkniffe;
var rightkniffe;
var upkniffe;

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
    if (stage == 1) {
        checkWin = verifierVictoire1();
        checkLoose = verifierLoose();
        if (checkLoose===false && checkWin === false) {
            replayCheck = false; 
            replayCheck1 = false;
            drawMap1();
        } else {
            if (replayCheck === false) {
                var Win = document.getElementById('win-screen');
                Win.style.display ='flex';
                var canvas = document.getElementById('defaultCanvas0')
                canvas.style.display = 'none';
                var Loose = document.getElementById('loose-screen');
                Loose.style.display ='none';
            } else {
            if (replayCheck1 === false) {
                var Loose = document.getElementById('loose-screen');
                Loose.style.display ='flex';
                var Win = document.getElementById('win-screen');
                Win.style.display ='none';
                var canvas = document.getElementById('defaultCanvas0')
                canvas.style.display = 'none';
            } }
        }
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
    leftkniffe = loadImage('src/img/leftkn.png');
    rightkniffe = loadImage('src/img/rightkn.png');
    upkniffe = loadImage('src/img/upkn.png');
}

function home() {
    stage = 0;
}