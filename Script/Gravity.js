var flyingFramecount = 0;
const gravityForce = 75

function jump() {
    if (jumping == true) {
        if ((isOnAGround() == false) || (flyingFramecount == 0)) {
            flyingFramecount = flyingFramecount + 8
            if (flyingFramecount < 150) {
                playerY = playerY - ((flyingFramecount-300)/gravityForce)**2
            } else if (flyingFramecount >= 150) {
                playerY = playerY + ((flyingFramecount-300)/gravityForce)**2
            }
        } else {
            flyingFramecount = 0;
            jumping = false;
        }
    }
}