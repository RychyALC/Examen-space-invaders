
var nave;
var enemigos = [];
var disparos = [];
var j = 0;

function setup() {
  createCanvas(500, 800);
  nave = new Nave();

  //intente usar el for anidado y me lo dibujaba mal siempre, por eso este desastre
 for (var i = 0; i < 5; i++) {
    enemigos[i] = new Enemigo( 80, i * 40 +60);
  }
  for (var i = 0; i < 5; i++) {
    enemigos[i+5] = new Enemigo(80 + 80, i * 40 +60);
 }
 for (var i = 0; i < 5; i++) {
  enemigos[i+10] = new Enemigo(160 + 80, i * 40 +60);
 }
 for (var i = 0; i < 5; i++) {
  enemigos[i+15] = new Enemigo(240 + 80, i * 40 +60);
 }
 for (var i = 0; i < 5; i++) {
  enemigos[i+20] = new Enemigo(320 + 80, i * 40 +60);
 }
 
}

function draw() {
  background(51);
  

  for (var i = 0; i < disparos.length; i++) {
    disparos[i].show();
    disparos[i].move();
    for (var j = 0; j < enemigos.length; j++) {
      if (disparos[i].hits(enemigos[j])) {
        enemigos[j].evaporate();
        disparos[i].evaporate();
      }
    }
  }
  nave.show();
  nave.move();

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
    var disparo = new Disparo(nave.x, height - 20);
    disparos.push(disparo);
  }

  if (keyCode === RIGHT_ARROW) {
    nave.setDir(1);
  } else if (keyCode === LEFT_ARROW) {
    nave.setDir(-1);
  }
}
