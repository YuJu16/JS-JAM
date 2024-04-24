var flyingFramecount = 0;
const gravityForce = 65;

function jump() {
    if (jumping == true) {
        if ((isOnAGround() == false) || (flyingFramecount == 0)) {
            flyingFramecount = flyingFramecount + 8
            if (flyingFramecount < 120) {
                playerY = playerY - ((flyingFramecount-300)/gravityForce)**2
            } else if (flyingFramecount >= 180) {
                playerY = playerY + ((flyingFramecount-300)/gravityForce)**2
            } else if (flyingFramecount > 120 && flyingFramecount < 180) {
                flyingFramecount = 180
            }
        } else {
            flyingFramecount = 0;
            jumping = false;
        }
    }
}