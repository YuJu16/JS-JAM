let player;

function setup() {
    createCanvas(1650, 800);
    player = new Character();
}

function draw() {
    background(220);
    player.draw();
    player.update()
}
