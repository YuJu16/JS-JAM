class Bullet {
  constructor(x, y) {
      this.x = x;
      this.y = y;
      this.radius = 5;
      this.speed = 1;
      this.velocityX = 0;
      this.velocityY = 0;
  }

  update() {
    this.x += this.speed * this.velocityX;
    this.y += this.speed * this.velocityY;
  }

  draw() {
    fill(255, 0, 0);
    ellipse(this.x, this.y, this.radius * 2);
  }
}
