//player size
const playerWidth = 70;
const playerHeight = 90;

const playerSpeed = 3;

var jumping = false;

function drawPlayer(x, y) {
    stroke(0);
    fill(150, 0, 170); //purple
    image(characterImage, x, y, playerWidth, playerHeight);
}

function keyPressed() {
    //up
    if (keyIsDown(90)) { //z
        jumping = true;
    }

    //down
    if (keyIsDown(83)) { //s
        if (isOnAGround() == false) {
            playerY = playerY + playerSpeed*3;
        }
    }

    //right
    if (keyIsDown(68)) { //d
        if (playerX < windowWidth-playerWidth/2-30) {
            playerX = playerX + playerSpeed;
        }
    }

    //left
    if (keyIsDown(81)) { //q
        if (playerX > playerWidth/2+18) {
            playerX = playerX - playerSpeed;
        }
    }

    //to know coordonates (make map more easly)
    if (keyIsDown(67)) { //c
        console.log(playerX, playerY);
    }
}