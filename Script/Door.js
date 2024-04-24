class Door {
    constructor(coordonneesX, coordonneesY) {
        this.coordonnees = { x: coordonneesX, y: coordonneesY };
        this.pressed = false;
        this.radius = 1;
    }
    
    draw() {
        fill(139, 69, 19);
        rect(this.coordonnees.x, this.coordonnees.y, 80, 150);
    }

    update() {
        if (dist(this.x, this.y, playerX, playerY) < playerX) {
            pastedlvl();
        }
    }
}
