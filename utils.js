const randomIntFromRange = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = colors => colors[Math.floor(Math.random() * colors.length)];

const distance = (x1, y1, x2, y2) => {
  const xDist = x2 - x1;
  const yDist = y2 - y1;

  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
}

module.exports = { randomIntFromRange, randomColor, distance };