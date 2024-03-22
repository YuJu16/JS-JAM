    // Détecte la collision entre le joueur et une flèche ennemie
    function detecterCollision(joueur, fleche) {
        // Vérifie si les coordonnées du joueur et de la flèche se superposent
        if (joueur.x == fleche.x && joueur.y == fleche.y) {
            // Le joueur touché, défaite du joueur 
            console.log("Defete"); // en français : défaite
            // Arrêter le jeu
            game.destroy();
            // Afficher un message de défaite
            alert("You have been hit by an enemy arrow. You lost !"); // en français : Vous avez été touché par une flèche ennemie. Vous avez perdu !
            // Recharger la page pour recommencer le jeu
            window.location.reload();
            // Retourne vrai pour indiquer qu'il y a eu une collision
            return true;
        }
    }
