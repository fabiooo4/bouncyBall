class Ball {
  constructor(x, y, size, ySpeed, xSpeed) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.xSpeed = ySpeed;
    this.ySpeed = xSpeed;
  }

  draw() {
    fill(255);
    stroke(255);
    ellipse(this.x, this.y, this.size);
  }

  move() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }

  bounce() {
    if (this.x > width || this.x < 0) {
      this.xSpeed *= -1;
    }
    if (this.y > height || this.y < 0) {
      this.ySpeed *= -1;
    }
  }
} 