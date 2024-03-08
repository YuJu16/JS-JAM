class Character {
    constructor() {
        this.x = width / 2; // Position horizontale initiale
        this.y = height - 50; // Position verticale au bas du canvas
        this.speed = 5; // Vitesse de déplacement
    }

    display() {
        fill(255); // Couleur du personnage (blanc)
        ellipse(this.x, this.y, 30, 30); // Dessine un cercle pour le personnage
    }

    move(direction) {
        if (direction === 'left') {
            this.x -= this.speed; // Déplace le personnage vers la gauche
        } else if (direction === 'right') {
            this.x += this.speed; // Déplace le personnage vers la droite
        }
    }
}
