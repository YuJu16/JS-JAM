var score = 0;

class Coin {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.asBeenCollected;
    }

    update() {
        if (playerX+playerWidth/3 > this.x && playerX-playerWidth/3 < this.x && playerY+playerHeight > this.y && playerY-playerHeight < this.y && button1.pressed) {
            this.asBeenCollected = true;
            score += 1;
        }
    }

    draw() {
        push();
        fill(0);
        image(coinImage, this.x, this.y, 25, 25);
        pop();
    }
}