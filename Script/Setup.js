let circleX = 200;
let circleSpeed = 2;
let player;

function setup() {
    createCanvas(400, 400);
    player = new Character(); // Crée un nouveau personnage
}

function draw() {
    background(220);
    circleX += circleSpeed;

    // Inverser la direction si le cercle atteint les bords
    if (circleX > width || circleX < 0) {
        circleSpeed *= -1;
    }

    ellipse(circleX, 200, 50, 50); // Dessine le cercle (vous pouvez le supprimer)
    player.display(); // Affiche le personnage
}
