class Bot {
    constructor(coordonneesX, coordonneesY) {
        this.coordonnees = createVector(coordonneesX, coordonneesY);
        this.bullets = [];
        this.radius = 15;
        this.dead = false;
    }

    update(character, bot) {
        if (character.coordonnees.y === this.coordonnees.y && character.coordonnees.x > this.coordonnees.x) {
            this.shootRight();
        }
        
        if (character.coordonnees.y === this.coordonnees.y && character.coordonnees.x < this.coordonnees.x) {
            this.shootLeft();
        }

        if (character.coordonnees.x === this.coordonnees.x && character.coordonnees.y < this.coordonnees.y) {
            this.shootUp();
        }
        
        if (character.coordonnees.x === this.coordonnees.x && character.coordonnees.y > this.coordonnees.y) {
            this.shootDown();
        }
        
    
        this.bullets.forEach((bullet) => {
            bullet.update();
            if (dist(bullet.x, bullet.y, character.coordonnees.x, character.coordonnees.y) < character.radius) {
                character.destroy();
            }
            if (dist(bullet.x, bullet.y, bot.coordonnees.x, bot.coordonnees.y) < bot.radius) {
                bot.dead = true;
                bot.coordonnees.y = -200;
                bot.coordonnees.x = -200;
            }
        });
        this.bullets = this.bullets.filter(bullet => bullet.x < width);
    }
    

    draw() {
        fill(255, 0, 0);
        rectMode(CENTER);
        rect(this.coordonnees.x, this.coordonnees.y, 20, 20);
        this.bullets.forEach(bullet => {
            bullet.draw();
        });
    }

    shootRight() {
        const bullet = new Bullet(this.coordonnees.x, this.coordonnees.y);
        bullet.velocityX = 10;
        this.bullets.push(bullet);
    }

    shootLeft() {
        const bullet = new Bullet(this.coordonnees.x, this.coordonnees.y);
        bullet.velocityX = -10;
        this.bullets.push(bullet);
    }

    shootDown() {
        const bullet = new Bullet(this.coordonnees.x, this.coordonnees.y);
        bullet.velocityY = 10;
        this.bullets.push(bullet);
    }
    
    shootUp() {
        const bullet = new Bullet(this.coordonnees.x, this.coordonnees.y);
        bullet.velocityY = -10;
        this.bullets.push(bullet);
    }
    
}
