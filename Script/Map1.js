//player spawn point
var playerX = 400;
var playerY = 400;

//floor height
const floorHeight = 460

//boxs coords
const box1X = 200;
const box1Y = 380;
const box1Width = 200;
const box1Height = 40;

//boxs coords
const box2X = 550;
const box2Y = 300;
const box2Width = 300;
const box2Height = 40;

function map1() {
    //background
    image(backgroundImage, windowWidth/2, windowHeight/2, windowWidth-35, windowHeight-35)

    //first platforme
    image(platform, box1X, box1Y, box1Width, box1Height);

    //second platforme
    image(platform, box2X, box2Y, box2Width, box2Height);

    //spawn player
    drawPlayer(playerX, playerY);

    //apply gravity
    jump();
}

//isOnAGround is the function where we are going to define all collisions 
function isOnAGround() {
    //global floor
    if (playerY >= floorHeight) {
        return true;
    }

    //first box
    if (playerX >= box1X-box1Width/2 && playerX <= box1X+box1Width/2 && playerY + playerHeight/2 >= box1Y-box1Height/2 && playerY + playerHeight/2 <= box1Y+box1Height/2) {
        return true;
    }

    //second box
    if (playerX >= box2X-box2Width/2 && playerX <= box2X+box2Width/2 && playerY + playerHeight/2 >= box2Y-box2Height/2 && playerY + playerHeight/2 <= box2Y+box2Height/2) {
        return true;
    }
    return false;
}