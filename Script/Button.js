class Button {
    constructor(coordonneesX, coordonneesY) {
        this.coordonnees = { x: coordonneesX, y: coordonneesY };
        this.pressed = false;
        this.radius = 1;
    }
    
    draw() {
        image(button, this.coordonnees.x, this.coordonnees.y, 20, 20);
    }

    update() {
        if (playerX+playerWidth/3 > this.coordonnees.x && playerX-playerWidth/3 < this.coordonnees.x && playerY+playerHeight > this.coordonnees.y && playerY-playerHeight < this.coordonnees.y) {
            this.pressed = true;
            score += 1;
        }
    }
}
