function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        player.move('left'); // Déplace le personnage vers la gauche
    } else if (keyCode === RIGHT_ARROW) {
        player.move('right'); // Déplace le personnage vers la droite
    }
}