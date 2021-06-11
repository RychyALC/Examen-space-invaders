
var nave;
var enemigos = [];
var disparos = [];
var j = 0;

function setup() {
  createCanvas(500, 800);
  nave = new Nave();

  //intente usar el for anidado y me lo dibujaba mal siempre, por eso este desastre
 for (var i = 0; i < 7; i++) {
    enemigos[i] = new Enemigo( 80, i * 40 +60);
  }
  for (var i = 0; i < 7; i++) {
    enemigos[i+7] = new Enemigo(50 + 80, i * 40 +60);
 }
 for (var i = 0; i < 7; i++) {
  enemigos[i+14] = new Enemigo(100 + 80, i * 40 +60);
 }
 for (var i = 0; i < 7; i++) {
  enemigos[i+21] = new Enemigo(150 + 80, i * 40 +60);
 }
 for (var i = 0; i < 7; i++) {
  enemigos[i+28] = new Enemigo(200 + 80, i * 40 +60);
 }
 for (var i = 0; i < 7; i++) {
  enemigos[i+35] = new Enemigo(250 + 80, i * 40 +60);
 }
 for (var i = 0; i < 7; i++) {
  enemigos[i+42] = new Enemigo(300 + 80, i * 40 +60);
 }
 for (var i = 0; i < 7; i++) {
  enemigos[i+49] = new Enemigo(350 + 80, i * 40 +60);
 }
 
}

function draw() {
  background(51);
  

  for (var i = 0; i < disparos.length; i++) {
    disparos[i].show();
    disparos[i].move();
    for (var j = 0; j < enemigos.length; j++) {
      if (disparos[i].hits(enemigos[j])) {
        enemigos.splice(j,1);
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
  
  if(enemigos.length === 0){
    fill(255);
    rectMode(CENTER);
    rect(width/2,height/2,100,25);
    fill(0);
    textSize(20);
    text("Ganaste",width/2-35,height/2+5);
  }else{
    for (var j = 0; j < enemigos.length; j++) {
    
      if (enemigos[j].y > height) {
        fill(255);
        rectMode(CENTER);
        rect(width/2,height/2,100,25);
        fill(0);
        textSize(20);
        text("Perdiste",width/2-35,height/2+5);
        for (var j = 0; j < enemigos.length; j++) {
          enemigos.splice(0,enemigos.length);
        }
        noLoop();
        
      }
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
