// Définir une variable pour suivre le nombre d'ennemis restants
let ennemisVaincus = false; // Mettez ici le nombre total d'ennemis initialement présents

// Fonction pour vérifier la victoire du joueur
function verifierVictoire() {
    if (ennemisVaincus === true){
        console.log("Victoire !");
        // Afficher un message de victoire
        alert("Vous avez vaincu tous les ennemis. Vous avez gagné !");
        // Recharge la page pour recommencer le jeu
        window.location.reload();
    }

    // Retourner false pour indiquer qu'il n'y a pas eu de victoire
    return false;
}