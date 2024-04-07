class Bot {
    constructor() {
        this.coordonnees = createVector(200, 200);
        this.bullets = [];
    }

    update(character) {
        if (this.coordonnees.y === character.coordonnees.y) {
            this.shoot();
        }
        this.bullets.forEach(bullet => {
            bullet.update();
        });
    }

    draw() {
        fill(255, 0, 0);
        rectMode(CENTER);
        rect(this.coordonnees.x, this.coordonnees.y, 20, 20);
        this.bullets.forEach(bullet => {
            bullet.draw();
        });
    }

    shoot() {
        const bullet = new Bullet(this.coordonnees.x, this.coordonnees.y);
        this.bullets.push(bullet);
    }

}

function preload() {
    characterImage = loadImage('../img/ninja.png');
}