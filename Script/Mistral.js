//game stage
var stage = 0;

//function that setup the canvas
function setup() {
    //create 
    //createCanvas(windowWidth, windowHeight);
    createCanvas(800, 500);
    rectMode(CENTER);
    textAlign(CENTER);
}

//function that draw the page
function draw() {
    if (stage == 0) {
        map1();
    }

    //up
    if (keyIsDown(90) && playerY == floorHeight) {
        lastJumpTime = millis();
        playerVelocityY = -jumpPower;
    }

    //down
    if (keyIsDown(83)) {
        playerY = playerY + playerSpeed;
    }

    //right
    if (keyIsDown(68)) {
        playerX = playerX + playerSpeed;
    }

    //left
    if (keyIsDown(81)) {
        playerX = playerX - playerSpeed;
    }
}

//player size
const playerWidth = 30;
const playerHeight = 70;

const playerSpeed = 5;
const gravityForce = 1;
const velocity = 2; 
const jumpPower = 10;

var jump = false;
var lastJumpTime = 0;
var playerVelocityY = 0;

function drawPlayer(x, y) {
    stroke(0);
    fill(150, 0, 170); //purple
    rect(x, y, playerWidth, playerHeight);
}

function gravity(minHeight) {
    var deltaTime = millis() - lastJumpTime;
    if (playerY < minHeight) {
        playerY = playerY + playerVelocityY + 0.5 * gravityForce * velocity * deltaTime * deltaTime;
        playerVelocityY = playerVelocityY + gravityForce * velocity * deltaTime;
    } else {
        playerY = minHeight
        playerVelocityY = 0;
        lastJumpTime = millis();
    }
}

//player spawn point
var playerX = 400;
var playerY = 400;

//floor height
const floorHeight = 375

//boxs coords
const box1X = 200;
const box1Y = 300;
const box1Width = 200;
const box1Height = 40;

function map1() {
    //game looking
    background(150, 230, 240);  //blue (sky)
    noStroke(); //outline
    fill(100, 200, 75); //green
    rect(width/2, 450, width, 100); //floor

    //first platforme
    stroke(0); //black outline
    strokeWeight(5); //outline
    fill(255,120,0); //orange
    rect(box1X, box1Y, box1Width, box1Height);

    //spawn player
    drawPlayer(playerX, playerY);

    //apply gravity
    gravity(floorHeight);
}