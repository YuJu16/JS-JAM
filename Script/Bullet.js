class Bullet {
  constructor(x, y) {
      this.x = x;
      this.y = y;
      this.radius = 5;
      this.speed = 5;
  }

  update() {
      this.x += this.speed;
  }

  draw() {
      fill(255, 0, 0);
      ellipse(this.x, this.y, this.radius * 2);
  }
}