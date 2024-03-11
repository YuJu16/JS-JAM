class Bot {
    constructor() {
        this.coordonnees = createVector(200, 200); // Coordonnées initiales du bot
        this.diametre = 30; // Diamètre du bot
    }

    draw() {
        fill(255, 0, 0); // Couleur de remplissage rouge
        ellipse(this.coordonnees.x, this.coordonnees.y, this.diametre, this.diametre); // Dessine une ellipse pour représenter le bot
    }

    update() {
        
    }
}