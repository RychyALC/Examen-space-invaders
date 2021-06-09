function Enemigo(x, y){
    this.x = x;
    this.y = y; 
        
    this.mostrar = function(){
        fill(100,0,200);
        rectMode(CENTER);
        rect(this.x , this.y, 20, 20);
    }

    this.mover = function(dir){
        this.x += dir   
    }
}
