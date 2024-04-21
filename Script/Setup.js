const canvas = document.getElementById('Canvas');
const c = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;

c.fillStyle = 'white';
c.fillRect(0, 0, canvas.width, canvas.height);

const image = new Image();
image.src = '../img/Lvl1.png';

image.onload = () => {
    const newWidth = 1024; 
    const newHeight = 576;
    c.drawImage(image, 0, 0, newWidth, newHeight);

    let player;
    let bot;
    let bot2;

    function setup() {
        player = new Character(500, 438);
        bot = new Bot(155, 188);
        bot2 = new Bot(835, 188);
    }

    function draw() {
        bot.draw();
        bot2.draw();
        player.draw();
        player.update();
        bot.update(player, bot2);
        bot2.update(player, bot);
    }

    setup();
    if (bot.alive === false && bot2.alive === false) { 
        ennemisVaincus = true;
    } // Si les deux bots sont morts, le joueur a gagné
    verifierVictoire() // appel la fonction victoire
    
    verifierLoose(player); // appel la fonction defaite

    setInterval(draw, 1000 / 60);
}
