class Bullet {
  constructor(x, y, image, imageHeight, imageWidth) {
      this.x = x;
      this.y = y;
      this.speed = 0.5;
      this.velocityX = 0;
      this.velocityY = 0;
      this.image = image;
      this.imageHeight = imageHeight;
      this.imageWidth = imageWidth;
      this.dead = false;
    }

  update() {
    this.x += this.speed * this.velocityX;
    this.y += this.speed * this.velocityY;
  }

  draw() {
    fill(255, 0, 0);
    image(this.image, this.x, this.y, this.imageHeight, this.imageWidth);
  }
}
