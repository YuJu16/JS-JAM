class Button {
    constructor(coordonneesX, coordonneesY) {
        this.coordonnees = { x: coordonneesX, y: coordonneesY };
        this.pressed = false;
        this.radius = 1;
    }
    
    draw() {
        fill(255, 0, 0); 
        rect(this.coordonnees.x, this.coordonnees.y, 20, 20);
    }
}
