import Spaceship from "./spaceship";

class Projectile{
    constructor(canvas, ctx, SpaceShip, ship){
        this.SpaceShip = SpaceShip;
        this.canvas = canvas;
        
        if(ship === "ship"){
        
           this.movement = 2
            this.startX = SpaceShip.laserX 
            this.moveY = this.canvas.height - (SpaceShip.paddleHeight * 2)
            this.status = 1;
            this.canFire = true
       
        }else if(ship === "plunderer"){
            this.startX = SpaceShip.x
            this.moveY = SpaceShip.y + 20
            this.movement = -2
            this.status = 2;
        }
        
        this.ctx = ctx;
        this.laserHeight = 20;
        this.laserWidth =  2;
        this.drawLaser = this.drawLaser.bind(this);
        this.draw = this.draw.bind(this);
        
    }



    drawLaser() {

        this.ctx.beginPath();
        this.ctx.rect(this.startX, this.moveY, this.laserWidth, this.laserHeight);
        this.ctx.fillStyle = "#0095DD";
        this.ctx.fill();
        this.ctx.closePath();
    }

    handlecanshoot(){
        this.canshoot = false
        setInterval(()=>{
            this.canshoot = true
        }, 500) 
    } 


    draw() {
       if(this.moveY > -10 && this.moveY < 510 && (this.status === 1 || this.status === 2)){
        this.drawLaser();
        this.moveY -= this.movement;
        this.handlecanshoot()
     
       }else{
           this.status = 0;
       }

 
    }

}

export default Projectile;