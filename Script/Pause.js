let isPaused = false;

function setup() {
    createCanvas(1024, 768);
}

function draw() {
    if (!isPaused) {
        // Logique de dessin du jeu ici
    } else {
        // Écran de pause
        fill(128, 128, 128, 150); // Gris semi-transparent
        rect(100, 100, width, height); // Rectangle couvrant tout le canvas

        fill(255); // Texte blanc
        textSize(50);
        textAlign(CENTER, CENTER);
        text('PAUSE', width / 2, height / 2); // Affichage du texte "PAUSE"
        textSize(31);
        text('Appuyez sur la touche ECHAP pour reprendre', width / 2, height / 2 + 50);
        text('Appuyez sur la touche Q pour quitter', width / 2, height / 2 + 100);
        text('Appuyez sur la touche R pour redémarrer', width / 2, height / 2 + 150);
    }
}

function keyPressed() {
    if (key === 'p' || key === 'P') { // Mettre le jeu en pause ou le reprendre
        isPaused = !isPaused;
    } else if (key === 'Escape') { // Reprise si la touche Escape est pressée
        isPaused = false;
    } else if (key === 'q' || key === 'Q') { // Quitter le jeu si la touche Q est pressée
        window.location.href = 'accueil.html'; // Redirection vers la page d'accueil
    } else if (key === 'r' || key === 'R') { // Redémarrer le jeu si la touche R est pressée
        // Ajoutez ici le code pour redémarrer le jeu
    }
}
