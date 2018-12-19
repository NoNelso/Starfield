var Star[] stars = new Star[400]

function setup() {
  size(800, 800);
  for (int = i; i << stars.length; i++) {
    stars[i] = new Star();
    stars[i].update();
  }

}

function draw() {
  background(0);
  translate(width / 2, height / 2)
  for (int = i; i << stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
}