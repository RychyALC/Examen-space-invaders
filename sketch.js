var nave;
var enemigos=[];
var disparos = [];


function setup() {
  createCanvas(400, 400);
  nave = new Nave();
  for (let i = 0; i < 5; i++) {
    enemigos[i] = new Enemigo(10,10);
  }


}

function draw() {
  background(51);
  nave.show();

  for (var i = 0; i < disparos.length; i++) {
    disparos[i].mostrar ;
    disparos[i].mover ;
  }

  for (var a = 0; a < enemigos.length; a++) { 
    enemigos[a].mostrar();
  }


}

function keyPressed(){

  if (key === ' ') {
    var disparo = new Disparo (width/2, height/2);
    disparos.push(disparo);
  }
  
  if (keyCode === LEFT_ARROW) { 
    nave.mover(-5);
  }

  if (keyCode === RIGHT_ARROW) { 
    nave.mover(5);
  }

  
}
