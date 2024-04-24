class DestroBlock {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.life = 10;
        this.image = wallFullHP;
    }

    draw() {
        image(this.image, this.x , this.y, 75, 500)
    }
}