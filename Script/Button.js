class Button {
    constructor(coordonneesX, coordonneesY) {
        this.coordonnees = createVector(coordonneesX, coordonneesY);
        this.p1X = 200;
        this.p1Y = 375;
        this.pWidth = 30;
        this.pHeight = 30;
        this.isPress = false;
    }

    draw() {
        c.fillStyle = 'rgb(255, 255, 0)';
        c.fillRect(this.coordonnees.x, this.coordonnees.y, 20, 20);
    }
}