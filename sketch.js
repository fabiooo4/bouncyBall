class Ball {
  constructor(x, y, size, ySpeed, xSpeed) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.xSpeed = ySpeed;
    this.ySpeed = xSpeed;
  }

  draw() {
    color = {
      r: random(255),
      g: random(255),
      b: random(255)
    };

    fill(color.r, color.g, color.b);
    stroke(color.r, color.g, color.b);
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

let balls = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 1000; i++) {
    balls.push(new Ball(random(width), random(height), random(10, 50), random(-5, 5), random(-5, 5)));
  }
}

function draw() {
  background(0);

  for (let i = 0; i < balls.length; i++) {
    balls[i].draw();
    balls[i].move();
    balls[i].bounce();
  }
}