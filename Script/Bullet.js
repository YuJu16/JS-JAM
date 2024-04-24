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
      this.touched = false

    }

  update() {
      this.x += this.speed * this.velocityX; // this.x = this.x + this.speed * this.velocityX
      this.y += this.speed * this.velocityY; // this.y = this.y + this.speed * this.velocityY
      if ((this.x + this.imageWidth >= playerX && // bullet is on the right of the player
          this.x <= playerX + playerWidth  && // bullet is on the left of the player
          this.y <= playerY + playerHeight && // bullet is above the player
          this.y + this.imageHeight >= playerY // bullet is below the player
      )) {
        console.log("touched");
        playerLife -= 1;
        console.log(playerLife)
        this.touched = true

      }
  }

  draw() {
    fill(255, 0, 0);
    image(this.image, this.x, this.y, this.imageHeight, this.imageWidth);
  }

  
}
