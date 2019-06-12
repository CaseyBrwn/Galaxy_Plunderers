import SpaceShip from "./spaceship";
import Projectile from './projectile';
import projectileHandler from "./projectileHandler";
import ProjectileHandler from "./projectileHandler";
import Plunderers from './plunderers';
import Barriers from "./barriers";


class GameCanvas {
    constructor(canvas, ctx){
       
        this.SpaceShip = new SpaceShip(canvas, ctx)
        this.ProjectileHandler = new ProjectileHandler(canvas, ctx, this.SpaceShip)
        this.Plunderers = new Plunderers(canvas, ctx, this.ProjectileHandler)
        this.barriers = new Barriers(canvas, ctx, this.ProjectileHandler)
        this.canvas = canvas;
        this.ctx = ctx ;
        document.addEventListener("keydown", this.SpaceShip.keyDownHandler, false);
        document.addEventListener("keyup", this.SpaceShip.keyUpHandler, false);
        document.addEventListener("keydown", this.ProjectileHandler.keyDownHandler,  false);
        document.addEventListener("keyup", this.ProjectileHandler.keyUpHandler,  false);
        this.draw = this.draw.bind(this);
    }


   

    draw(){
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    this.SpaceShip.draw()
    this.Plunderers.draw()
    this.barriers.draw()
    this.ProjectileHandler.allProjectilesArray.forEach((projectile) => {
        projectile.draw()
    })
   

    }

}

export default GameCanvas;