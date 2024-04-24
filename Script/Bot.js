class Bot {
    constructor(coordonneesX, coordonneesY) {
        this.coordonnees = { x: coordonneesX, y: coordonneesY };
        this.bullets = [];
        this.radius = 15;
        this.dead = false;
        this.shootCooldown = 0;
    }

    update(bot, button) {
        // If the player is on the right
        if (playerY + playerHeight / 3 > this.coordonnees.y && playerY - playerHeight / 3 < this.coordonnees.y && playerX > this.coordonnees.x) {
            this.shootRight();
        }
        // If the player is on the left
        if (playerY + playerHeight / 3 > this.coordonnees.y && playerY - playerHeight / 3 < this.coordonnees.y && playerX < this.coordonnees.x) {
            this.shootLeft();
        }
        // If the player is on top
        if (playerX + playerWidth / 3 > this.coordonnees.x && playerX - playerWidth / 3 < this.coordonnees.x && playerY < this.coordonnees.y) {
            this.shootUp();
        }
    
        this.bullets.forEach((bullet) => {
            bullet.update();
            console.log(bullet.x);
            console.log(bullet.y);
            // If the bullet touch the player
            if (dist(bullet.x, bullet.y, playerX, playerY) < playerX) {
                //character.destroy();
            }
            // If the bullet touch the bot
            if (dist(bullet.x, bullet.y, bot.coordonnees.x, bot.coordonnees.y) < bot.radius) {
                bot.dead = true;
                bot.coordonnees.y = -200;
                bot.coordonnees.x = -200;
            }
            // If the bullet is close to the button
            if (dist(bullet.x, bullet.y, button.coordonnees.x, button.coordonnees.y) < button.radius) {
                button.pressed = true;
                console.log("pressed");
            }
        });
        this.bullets = this.bullets.filter(bullet => bullet.x < width);
        // Add a cooldown
        if (this.shootCooldown > 0) {
            this.shootCooldown--;
        }
    }
    

    draw() {
        // Draw the bot
        image(botImage, this.coordonnees.x, this.coordonnees.y, 75, 75);
        // Draw each bullet
        this.bullets.forEach(bullet => {
            bullet.draw();
        });
    }

    shootRight() {
        if (this.shootCooldown == 0) {
            // Create a bullet
            const bullet = new Bullet(this.coordonnees.x, this.coordonnees.y, rightkniffe, 30, 10);
            // Add speed
            bullet.velocityX = 10;
            // Shoot
            this.bullets.push(bullet);
            this.shootCooldown = 75;
        }
    }

    shootLeft() {
        if (this.shootCooldown == 0) {
            // Create a bullet
            const bullet = new Bullet(this.coordonnees.x, this.coordonnees.y, leftkniffe, 30, 10);
            // Add speed
            bullet.velocityX = -10;
            // Shoot
            this.bullets.push(bullet);
            this.shootCooldown = 75;
        }
    }

    // shootDown() {
    //     const bullet = new Bullet(this.coordonnees.x, this.coordonnees.y);
    //     bullet.velocityY = 10;
    //     this.bullets.push(bullet);
    // }
    
    shootUp() {
        if (this.shootCooldown == 0) {
            // Create a bullet
            const bullet = new Bullet(this.coordonnees.x, this.coordonnees.y, upkniffe, 10, 30);
            // Add speed
            bullet.velocityY = -10;
            // Shoot
            this.bullets.push(bullet);
            this.shootCooldown = 75;
        }
    }
}
