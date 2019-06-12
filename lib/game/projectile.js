import Spaceship from "./spaceship";

class Projectile{
    constructor(canvas, ctx, SpaceShip, ship){
        this.SpaceShip = SpaceShip;
        this.canvas = canvas;
        
        if(ship === "ship"){
           this.movement = 2
            this.startX = SpaceShip.laserX 
            this.moveY = this.canvas.height + SpaceShip.paddleHeight
            this.status = 1;
        }else if(ship === "plunderer"){
            this.startX = SpaceShip.x
            this.moveY = SpaceShip.y + 20
            this.movement = -2
            this.status = 2;
        }
        
        this.ctx = ctx;
        this.spacebarPressed = false;
        this.keyDownHandler = this.keyDownHandler.bind(this);
        this.keyUpHandler = this.keyUpHandler.bind(this);
        
           
        this.laserHeight = 20;
        this.laserWidth =  2;
        this.drawLaser = this.drawLaser.bind(this);
        this.draw = this.draw.bind(this);
        this.keyDownHandler = this.keyDownHandler.bind(this);
        this.keyUpHandler = this.keyUpHandler.bind(this);
        this.canshoot = true;
    }

    keyDownHandler(e) {
        if (e.key === 32) {
            this.spacebarPressed = true;
        }
    }
 
    keyUpHandler(e) {
        if (e.key === 32) {
            this.spacebarPressed = false;
        }
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
       if(this.moveY > -10 && this.moveY < 500 && (this.status === 1 || this.status === 2)){
        this.drawLaser();
        this.moveY -= this.movement;
        this.handlecanshoot()
       }else{
           this.status = 0;
       }

 
    }

}

export default Projectile;