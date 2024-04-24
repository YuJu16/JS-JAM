class DestroBlock {
    constructor(coordonneesX, coordonneesY) {
        this.coordonnees = { x: coordonneesX, y: coordonneesY };
        this.life = 1000;
        this.radius = 1;
        this.image = wallFullHP;
        this.image2 = wallMidHP;
        this.image3 = wall1HP;
        this.GetIt = 0;
    }

    draw() {
        image(this.image, this.coordonnees.x , this.coordonnees.y, 75, 500);
    }

    hited() {
        this.life--;
        if (this.life <= 200) {
            this.image = this.image3;
        }
        if (this.life == 600) {
            this.image = this.image2;
        }
    }
}