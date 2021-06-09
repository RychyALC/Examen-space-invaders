
var nave;
var enemigos = [];
var disparos = [];

function setup() {
  createCanvas(600, 400);
  nave = new Nave();
  // drop = new Drop(width/2, height/2);
  for (var i = 0; i < 6; i++) {
    enemigos[i] = new enemigo(i * 80 + 80, 60);
  }
}

function draw() {
  background(51);
  nave.show();
  nave.move();

  for (var i = 0; i < disparos.length; i++) {
    disparos[i].show();
    disparos[i].move();
    for (var j = 0; j < enemigos.length; j++) {
      if (disparos[i].hits(enemigos[j])) {
        enemigos[j].grow();
        disparos[i].evaporate();
      }
    }
  }

  var edge = false;

  for (var i = 0; i < enemigos.length; i++) {
    enemigos[i].show();
    enemigos[i].move();
    if (enemigos[i].x > width || enemigos[i].x < 0) {
      edge = true;
    }
  }

  if (edge) {
    for (var i = 0; i < enemigos.length; i++) {
      enemigos[i].shiftDown();
    }
  }

  for (var i = disparos.length - 1; i >= 0; i--) {
    if (disparos[i].toDelete) {
      disparos.splice(i, 1);
    }
  }
}

function keyReleased() {
  if (key != ' ') {
    nave.setDir(0);
  }
}

function keyPressed() {
  if (key === ' ') {
    var disparo = new Disparo(ship.x, height);
    disparos.push(disparo);
  }

  if (keyCode === RIGHT_ARROW) {
    nave.setDir(1);
  } else if (keyCode === LEFT_ARROW) {
    nave.setDir(-1);
  }
}
