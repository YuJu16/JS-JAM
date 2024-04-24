class Bot {
    constructor(coordonneesX, coordonneesY) {
        this.coordonnees = { x: coordonneesX, y: coordonneesY };
        this.bullets = [];
        this.radius = 15;
        this.dead = false;
    }


    update(bot) {
        if (playerY+playerHeight/3 > this.coordonnees.y && playerY-playerHeight/3 < this.coordonnees.y && playerX > this.coordonnees.x) {
            this.shootRight();
        }
        
        if (playerY+playerHeight/3 > this.coordonnees.y && playerY-playerHeight/3 < this.coordonnees.y && playerX < this.coordonnees.x) {
            this.shootLeft();
        }

        if (playerX+playerWidth/3 > this.coordonnees.x && playerX-playerWidth/3 < this.coordonnees.x && playerY < this.coordonnees.y) {
            this.shootUp();
        }
        
        if (playerX+playerWidth/3 > this.coordonnees.x && playerX-playerWidth/3 < this.coordonnees.x && playerY > this.coordonnees.y) {
            this.shootDown();
        }
        
    
        this.bullets.forEach((bullet) => {
            bullet.update();
            if (dist(bullet.x, bullet.y, playerX, playerY) < playerX) {
                //character.destroy();
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
        image(botImage, this.coordonnees.x, this.coordonnees.y, 75, 75);
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
