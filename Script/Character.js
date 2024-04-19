/*let characterImage;

class Character {
    constructor(coordonneesX, coordonneesY) {
        this.coordonnees = createVector(coordonneesX, coordonneesY);
        this.speed = 8;
        this.radius = 15;
    }

    draw() {
        fill(125, 145, 43); 
        //translate(this.coordonnees.x, this.coordonnees.y)
        image(characterImage, this.coordonnees.x, this.coordonnees.y, 50, 50);
    }

    update() {
        this.move(2)

        if (mouseIsPressed && mouseButton === LEFT && this.dashCooldown <= 0) {
            console.log("Dash bb")
            this.move(100);
            this.dashCooldown = 100;
        }

        if (this.dashCooldown > 0) {
            this.dashCooldown--;
        }
    }
    
    move(speed) {
        let xSpeed = 0;
        let ySpeed = 0;

        if (keyIsDown(90)) {
            ySpeed = -speed;
        }

        if (keyIsDown(83)) {
            ySpeed = speed;
        }

        if (keyIsDown(68)) {
            xSpeed = speed;
        }

        if (keyIsDown(81)) {
            xSpeed = -speed;
        }

        this.coordonnees.add(xSpeed, ySpeed);
    }
}

function preload() {
    characterImage = loadImage('../img/ninja.png');
}
*/
class Character {
    constructor(coordonneesX, coordonneesY) {
        this.coordonnees = { x: coordonneesX, y: coordonneesY };
        this.speed = 8;
        this.radius = 15;
        this.xSpeed = 0;
        this.ySpeed = 0;
    }

    update() {
    }

    draw() {
        c.fillStyle = 'rgb(0, 255, 0)';
        c.beginPath();
        c.arc(this.coordonnees.x, this.coordonnees.y, 15, 0, Math.PI * 2);
        c.fill();
    }
}