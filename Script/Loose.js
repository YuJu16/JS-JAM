// Détecter la collision entre le joueur et une flèche ennemie
function verifierLoose(joueur ) {
    // Vérifie si les coordonnées du joueur et de la flèche se superposent
    if (joueur.alive === false){
        // Le joueur touché, défaite du joueur 
        console.log("Défaite !");
        // Afficher un message de défaite
        alert("Vous avez été touché par une flèche ennemie. Vous avez perdu !");
        // Retourne vrai pour indiquer qu'il y a eu une collision
        return true;
    }
    // Retourne faux pour indiquer qu'il n'y a pas eu de collision
    return false;
}