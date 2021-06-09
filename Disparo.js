function Disparo(x, y) {
    this.x = x;
    this.y = y; 
        
    this.mostrar = function(){
        fill(50,0,200);
        ellipse(this.x , this.y, 12, 12);
    }

    this.mover = function(){
        this.y = this.y -1;
    }
}
