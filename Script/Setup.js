let player;
let bot;
let bot2;

function setup() {
    createCanvas(1650, 800);
    player = new Character(100, 100);
    bot = new Bot(200, 200);
    bot2 = new Bot(900, 200);
}
function draw() {
    background(220);
    bot.draw();
    bot2.draw();
    player.draw();
    player.update();
    bot.update(player, bot2);
    bot2.update(player, bot);
}
