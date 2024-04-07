let player;
let bot;

function setup() {
    createCanvas(1650, 800);
    player = new Character();
    bot = new Bot();
}
function draw() {
    background(220);
    bot.draw();
    player.draw();
    player.update();
    bot.update(player);
}