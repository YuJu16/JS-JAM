let replayCheck = false; //variable to check if the player wants to replay
let replayCheck1 = false; //variable to check if the player wants to replay


function verifierLoose(joueur, bullet) { //function to check if the player has lost
    if (playerLife <= 0) { //if the player has no more life
        replayCheck = true; //the player can replay
        return true; //the player has lost
    }
    return false; //the player has not lost
}

function verifierVictoire1() { //function to check if the player has won
    if (score === 3){ //if the player has collected all the coins
        replayCheck1 = true; //the player can replay
        return true; //the player has won
    }
    return false; //the player has not won
}

function replay() { //function to replay the game
    score=0 //reset the score
    playerLife = 3 //reset the player's life
    replayCheck = true; //the player can replay
    replayCheck1= true; 
    
    coin1.asBeenCollected = false; //reset the coins
    coin2.asBeenCollected = false;
    coin3.asBeenCollected = false;
    coin1.x = 220; 
    coin1.y = 340;
    coin2.x = 500;
    coin2.y = 260;
    coin3.x = 670;
    coin3.y = 480;
    playerX = 400;
    playerY = 400;
    var Win = document.getElementById('win-screen'); //hide the win screen
    Win.style.display ='none'; //hide the win screen
    var Loose = document.getElementById('loose-screen'); //hide the loose screen
    Loose.style.display ='none'; //hide the loose screen
    var canvas = document.getElementById('defaultCanvas0') //show the canvas
    canvas.style.display = 'flex'; //show the canvas
}