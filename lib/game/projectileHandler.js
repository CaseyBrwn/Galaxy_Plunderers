import Projectile from "./projectile";

class ProjectileHandler {
    constructor(canvas, ctx, SpaceShip){
        this.allProjectilesArray = []
        this.canvas = canvas
        this.ctx = ctx
        this.SpaceShip = SpaceShip
        this.spacebarPressed = false
        this.keyDownHandler = this.keyDownHandler.bind(this);
        // this.keyUpHandler = this.keyUpHandler.bind(this);
        // this.allProjectiles = this.allProjectiles.bind(this);
    
    }


    keyDownHandler(e) {
    
        if (e.keyCode === 32) {
      
            this.allProjectilesArray.push(new Projectile(this.canvas, this.ctx, this.SpaceShip, "ship"))
            this.allProjectilesArray = this.allProjectilesArray.filter(projectile =>  projectile.status === 1);
          
        }
    }

    
  
 

    

}

export default ProjectileHandler;