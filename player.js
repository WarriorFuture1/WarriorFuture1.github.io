class Player{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.velY = 0;
        this.velX = panSpeed;
        this.size = 5;
    }

    show(){
        fill(255,255,0);
        ellipse(this.x,this.y,this.size);
    }

    update(){
        this.velY += gravity;
        this.y += this.velY;
        this.x += this.velX;
    }




}