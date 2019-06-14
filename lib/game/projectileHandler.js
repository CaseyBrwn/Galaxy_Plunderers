import Projectile from "./projectile";

class ProjectileHandler {
    constructor(canvas, ctx, SpaceShip, soundObject){
        this.canFireinterval = 500;
        this.soundObject = soundObject
        this.allProjectilesArray = []
        this.canvas = canvas
        this.ctx = ctx
        this.SpaceShip = SpaceShip
        this.canFire = true;
        this.spacebarPressed = false
        this.keyDownHandler = this.keyDownHandler.bind(this);
        this.canFireHandler = this.canFireHandler.bind(this);
        this.collisiondetection = this.collisiondetection.bind(this);
        // this.keyUpHandler = this.keyUpHandler.bind(this);
        // this.allProjectiles = this.allProjectiles.bind(this);

    
    }
    canFireHandler(){
        this.canFire = false;
        setTimeout(()=>{
            this.canFire = true
        }, this.canFireinterval
        )
    }

    collisiondetection(){
        this.allProjectilesArray.forEach((projectile) => {
            let laserX = Math.floor(projectile.startX)
            let laserY = projectile.moveY
           
            if (laserX > this.SpaceShip.paddleX && laserX < this.SpaceShip.paddleX + 40  && (laserY + 10)  === this.canvas.height - this.SpaceShip.paddleHeight && projectile.status > 0) {
                this.SpaceShip.status -= 1
                this.soundObject.shipexplode.play()
                projectile.status = 0
            }
           
          
        })

    }




    keyDownHandler(e) {
    
        if (e.keyCode === 32 && this.canFire === true && this.SpaceShip.status > 0) {
            this.allProjectilesArray.push(new Projectile(this.canvas, this.ctx, this.SpaceShip, "ship"))
            this.soundObject.lasersound.play()
            this.canFireHandler()
        }
    }

    
  
 

    

}

export default ProjectileHandler;