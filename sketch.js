var bchead, bcbody, bctail;
var bullhead, bullbody, bulltail;
var germanhead, germanbody, germantail;
var goldenhead, goldenbody, goldentail;
var pughead, pugbody, pugtail;

var head;
var body;
var tail;


function preload() {
    bchead = loadImage('images/bchead.png');
    bcbody = loadImage('images/bcbody.png');
    bctail = loadImage('images/bctail.png');

    bullhead = loadImage('images/bullhead.png');
    bullbody = loadImage('images/bullbody.png');
    bulltail = loadImage('images/bulltail.png');

    germanhead = loadImage('images/germanhead.png');
    germanbody = loadImage('images/germanbody.png');
    germantail = loadImage('images/germantail.png');

    goldenhead = loadImage('images/goldenhead.png');
    goldenbody = loadImage('images/goldenbody.png');
    goldentail = loadImage('images/goldentail.png');

    pughead = loadImage('images/pughead.png');
    pugbody = loadImage('images/pugbody.png');
    pugtail = loadImage('images/pugtail.png');
}

function setup() {
    createCanvas(1200,800);
    background(255);
    imageMode(CENTER);

}

function mouseReleased() {
    creature();
  }

function creature() {
  background(255);

  head = random(0, 5);
  body = random(0, 5);
  tail = random(0, 5);

  var bx = width / 2;
  var by = 400;
  var hx = bx - 200
  var hy = by - 120
  var tx = bx + 170;
  var ty = by - 80;

  //body
  if (body > 0 && body < 1) {
    image(bcbody, bx, by - 15);
  }

  if (body > 1 && body < 2) {
    image(bullbody, bx, by);
  }

  if (body > 2 && body < 3) {
    image(germanbody, bx, by);
    tx = tx - 50
  }

  if (body > 3 && body < 4) {
    image(goldenbody, bx, by);
    tx = tx + 30;
  }

  if (body > 4 && body < 5) {
    image(pugbody, bx, by);
    tx = tx + 30;
  }

  //head
  if (head > 0 && head < 1) {
    image(bchead, hx, hy - 40);
  }

if (head > 1 && head < 2) {
  image(bullhead, hx - 20, hy - 20);
}

if (head > 2 && head < 3) {
  image(germanhead, hx + 15, hy - 40);
  by = by + 200;
}

if (head > 3 && head < 4) {
  image(goldenhead, hx - 40, hy - 45);
}

if (head > 4 && head < 5) {
  image(pughead, hx - 30, hy - 20);
}

  //tail
  if (tail > 0 && tail < 1) {
    image(bctail, tx + 5, ty + 60);
  }

  if (tail > 1 && tail < 2) {
    //image(bulltail, tx + 20, ty - 20);
  }

  if (tail > 2 && tail < 3) {
    image(germantail, tx + 40, ty + 70);
  }

  if (tail > 3 && tail < 4) {
    image(goldentail, tx + 80, ty - 40);
  }

  if (tail > 4 && tail < 5) {
    image(pugtail, tx - 50, ty - 90);
  }

}