// let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');

// // context.fillRect(x, y, width, height);
// c.fillStyle = 'red';
// c.fillRect(100, 100, 100, 100);
// c.fillStyle = 'blue';
// c.fillRect(400, 100, 100, 100);
// c.fillStyle = 'green';
// c.fillRect(300, 300, 100, 100);


// //Line Drawing
// c.beginPath();
// // c.moveTo(x,y)
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(400, 300);
// c.strokeStyle = 'blue'
// c.stroke();

// // Arc / Circle
// for (let i = 0; i < 2; i++) {
//   let x = Math.random() * window.innerWidth;
//   let y = Math.random() * window.innerHeight;


//   c.beginPath();
//   c.arc(x, y, 30, 0, Math.PI * 2, false); // just an outline for the circle
//   c.strokeStyle = `black`;
//   c.stroke();
// }


function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;

  this.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false); // just an outline for the circle
    c.strokeStyle = `black`;
    c.stroke();
    c.fill();
  }

  this.update = function () {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    this.x += this.dx;

    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
    this.y += this.dy;
    this.draw()
  }
}


let circleArray = [];

for (let i = 0; i < 100; i++) {
  let radius = 15;
  let x = Math.random() * (innerWidth - radius * 2) + radius;
  let y = Math.random() * (innerHeight - radius * 2) + radius;
  let dx = Math.random() - 0.5; //direction x velocity
  let dy = Math.random() - 0.5; // y velocity
  circleArray.push(new Circle(x, y, dx, dy, radius))
}

console.log(circleArray)

const animate = () => {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight)//choose how much of the canvas to clear

  for (let i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }

}

animate();