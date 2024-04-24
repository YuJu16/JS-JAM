let isPaused = false;

function draw() { // Fonction draw() du sketch p5.js
    if (!isPaused) { // if (!isPaused) équivaut à if (isPaused === false)
    } else { // else équivaut à if (isPaused === true)
        // display pause screen
        fill(128, 128, 128, 150); // color grey
        rect(100, 100, width, height); // draw a grey rectangle

        fill(255); // white color for text
        textSize(50); // text size
        textAlign(CENTER, CENTER); // text alignment
        text('PAUSE', width / 2, height / 2); // display 'PAUSE' text
        textSize(31); // text size
        text('Appuyez sur la touche ECHAP pour reprendre', width / 2, height / 2 + 50); // display 'Appuyez sur la touche ECHAP pour reprendre' text
        text('Appuyez sur la touche & pour quitter', width / 2, height / 2 + 100); // display 'Appuyez sur la touche & pour quitter' text
        text('Appuyez sur la touche é pour redémarrer', width / 2, height / 2 + 150); // display 'Appuyez sur la touche é pour redémarrer' text
    }
}

function keyTyped() { // Fonction keyTyped() for p5.js
    if (key === '&') { // exit the game if the key & is pressed
        window.location.href = 'accueil.html'; // redirect to the home page
    } else if (key === 'é') { // restart the game if the key é is pressed

    }
}

function keyPressed() {
    if (key === 'p' || key === 'P') { // Pause if the key P is pressed
        isPaused = !isPaused; // Inverse la valeur de isPaused
    } else if (key === 'Escape') { // return to the game if the key Escape is pressed
        isPaused = false; // set isPaused to false
    } else if (key === 'q' || key === 'Q') { //exit the game if the key Q is pressed
        window.location.href = 'accueil.html'; // redirect to the home page
    } else if (key === 'r' || key === 'R') { // restart the game if the key R is pressed

    }
}
