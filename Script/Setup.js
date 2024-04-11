let player;
let bot;
let bot2;

function setup() {
    createCanvas(1650, 800);
    player = new Character(100, 650);
    bot = new Bot(200, 200);
    bot2 = new Bot(900, 200);
}

function plan() {
    background(150, 230, 420);

    noStroke();
    fill(100, 200, 75);
    rect(width/2, 750, width, 100);

    noFill();
    stroke(0);
    strokeWeight(15);
    rect(width/2, height/2, width, height);

    stroke(0);
    strokeWeight(5);
    fill(255, 120, 0);
    rect(200, 234, 200, 40);

    stroke(0);
    strokeWeight(5);
    fill(255, 120, 0);
    rect(905, 234, 200, 40);
}

function draw() {
    plan();  
    bot.draw();
    bot2.draw();
    player.draw();
    player.update();
    bot.update(player, bot2);
    bot2.update(player, bot);
}
