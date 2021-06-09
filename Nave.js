function Nave(){
    this.x = width/2;
    
    this.show = function(){
        fill(255);
        rectMode(CENTER);
        rect(this.x , height-20, 20, 20);
    }

    this.mover = function(dir){
        this.x += dir   
    }
}
