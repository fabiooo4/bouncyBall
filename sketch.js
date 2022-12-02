class Ball {
  constructor(pos, vel, size) {
    this.pos = pos;
    this.size = size;
    this.vel = vel;
  }

  draw() {
    color = {
      r: 255,
      g: 255,
      b: 255
    };

    fill(color.r, color.g, color.b);
    stroke(color.r, color.g, color.b);
    ellipse(this.pos.x, this.pos.y, this.size);
  }

  move() {
    this.pos.add(this.vel);
  }

  bounce() {
    if (this.pos.x > width - this.size || this.pos.x < 0 + this.size) {
      this.vel.x *= -1;
    }
    if (this.pos.y > height - this.size || this.pos.y < 0 + this.size) {
      this.vel.y *= -1;
    }
  }
} 

let balls = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  let pos = createVector(random(width), random(height));
  let vel = createVector(random(5, 10), random(5, 10));

  balls.push(new Ball(pos, vel, 25)); 
}

function draw() {
  background(0, 25);

  for (let i = 0; i < balls.length; i++) {
    balls[i].draw();
    balls[i].move();
    balls[i].bounce();
  }
}