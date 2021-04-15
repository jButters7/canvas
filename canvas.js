let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');

// context.fillRect(x, y, width, height);
c.fillStyle = 'red';
c.fillRect(100, 100, 100, 100);
c.fillStyle = 'blue';
c.fillRect(400, 100, 100, 100);
c.fillStyle = 'green';
c.fillRect(300, 300, 100, 100);


//Line Drawing
c.beginPath();
// c.moveTo(x,y)
c.moveTo(50, 300);
c.lineTo(300, 100);
c.lineTo(400, 300);
c.strokeStyle = 'blue'
c.stroke();

// Arc / Circle
for (let i = 0; i < 2; i++) {
  let x = Math.random() * window.innerWidth;
  let y = Math.random() * window.innerHeight;


  c.beginPath();
  c.arc(x, y, 30, 0, Math.PI * 2, false); // just an outline for the circle
  c.strokeStyle = `black`;
  c.stroke();
}
