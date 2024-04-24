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
      this.x += this.speed * this.velocityX;
      this.y += this.speed * this.velocityY;
      if ((this.x + this.imageWidth >= playerX && 
          this.x <= playerX + playerWidth  && 
          this.y <= playerY + playerHeight && 
          this.y + this.imageHeight >= playerY
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
