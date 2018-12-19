function star() {
  this.x = random(-width, width);
  this.y = random(-height, height)
  this.z = random(width)
  this.pz = this.z;
}

this.update = function() {
  this.z = this.z - speed;
  if (z < 1) {
    this.z = width;
    this.x = random(-width, width);
    this.y = random(-height, height);
    this.pz = this.z;
  }
}

this.show = function() {
  fill(255);
  noStroke();
  var sx = map(x / z, 0, 1, 0, width);
  var sy = map(y / x, 0, 1, 0, height);
  var r = map(z, 0, width, 16, 0);
  ellipse(sx, sy, 8, 8);
  var px = map(this.x / this.pz, 0, 1, 0, width);
  var py = map(this.y / this.pz, 0, 1, 0, height);
  this.pz = this.z;
  stroke(255);
  line(px, py, sx, sy);
}