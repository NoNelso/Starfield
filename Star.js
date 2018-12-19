class Star {
  float x;
  float y;
  float z;

  star() {
    x = random(-width, width);
    y = random(-height, height)
    z = random(width)
  }
}

function update() {
  z = z - 1;
  x = random(-width, width);
  y = random(-height, height)
  if (z < 1) z = width
}

function show() {
  fill(255);
  noStroke();
  float sx = map(x / z, 0, 1, 0, width);
  float sy = map(y / x, 0, 1, 0, height);
  float r = map(z, 0, width, )
  ellipse(sx, sy, 8, 8);
}