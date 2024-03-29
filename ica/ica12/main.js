const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// function to generate random number

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

// function to generate random color

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

class Ball {
    constructor(x, y, velX, velY, color, size) {
      this.x = x; 
      this.y = y; 
      this.velX = velX;
      this.velY = velY;
      this.color = color;
      this.size = size;
      
    }

    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
      }

      update() {
        if ((this.x + this.size) >= width) {
          this.velX = -(this.velX);
        }
      
        if ((this.x - this.size) <= 0) {
          this.velX = -(this.velX);
        }
      
        if ((this.y + this.size) >= height) {
          this.velY = -(this.velY);
        }
      
        if ((this.y - this.size) <= 0) {
          this.velY = -(this.velY);
        }
      
        this.x += this.velX;
        this.y += this.velY;
      }

      collisionDetect() {
        for (const ball of balls) {
          if (this !== ball) {
            const dx = this.x - ball.x;
            const dy = this.y - ball.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
      
            if (distance < this.size + ball.size) {
              ball.color = this.color = randomRGB();
            }
          }
        }
      }

  }

  const testBall = new Ball(100, 100, 2, 2, "purple", 50);
  //const testBall1 = new Ball(400, 300, 2, 2, "pink", 100);
  //const testBall2 = new Ball(800, 200, 2, 2, "aquamarine", 75);

testBall.x;
testBall.size;
testBall.color;
testBall.draw();
//testBall1.draw();
//testBall2.draw();

const balls = [];

while (balls.length < 30) {
  const size = random(50, 10);
  const ball = new Ball(
    // ball position always drawn at least one ball width
    // away from the edge of the canvas, to avoid drawing errors
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-10, 10),
    random(-10, 10),
    randomRGB(),
    size
  );

  balls.push(ball);
}

function loop() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
    ctx.fillRect(0, 0, width, height);
  
    for (const ball of balls) {
      ball.draw();
      ball.update();

      function loop() {
        ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
        ctx.fillRect(0, 0, width, height);
      
        for (const ball of balls) {
          ball.draw();
          ball.update();
          ball.collisionDetect();
        }
      
        requestAnimationFrame(loop);
      }
    }
  
    requestAnimationFrame(loop);
  }

  loop();