// import utils from './utils';

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2
};

const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66'];

//Event Listeners

// addEventListener('mousemove', (event) => {
//   mouse.x = event.clientX
//   mouse.y = event.clientY
// });

// addEventListener('resize', () => {
//   canvas.width = innerWidth;
//   canvas.height = innerHeight;

//   init();
// });

const distance = (x1, y1, x2, y2) => {
  const xDist = x2 - x1;
  const yDist = y2 - y1;

  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
}

//Objects
function Particle(x, y, radius, color) {
  this.x = x
  this.y = y
  this.radius = radius
  this.color = color

  this.update = () => {
    this.draw();
  }

  this.draw = () => {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.strokeStyle = this.color;
    c.stroke();
    c.closePath();
  };
}

//Implementation

let particles;

const init = () => {
  particles = [];
  for (let i = 0; i < 4; i++) {
    const radius = 100;
    let x = Math.random() * (innerWidth - radius * 2) + radius;
    let y = Math.random() * (innerHeight - radius * 2) + radius;
    const color = 'blue';
    // let dx = Math.random() - 0.5; //direction x velocity
    // let dy = Math.random() - 0.5; // y velocity
    // if (i !== 0) {
    //   for (let j = 0; j < particles.length; j++) {
    //     if (distance(x, y, particles[j].x, particles[j].y) - radius * 2 < 0) {
    //       x = Math.random() * (innerWidth - radius * 2) + radius;
    //       y = Math.random() * (innerHeight - radius * 2) + radius;

    //       j -= 1;
    //     }
    //   }
    // }

    particles.push(new Particle(x, y, radius, color));
  }
}

console.log(particles)

// Animation Loop
const animate = () => {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(particle => {
    particle.update();
  })
}

init();
animate();