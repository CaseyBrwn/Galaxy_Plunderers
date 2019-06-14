import { runInThisContext } from "vm";

class PowerUps{
    constructor(Spaceship, projectileHandler, barriers, restartBarriers, ctx, canvas){
        this.ctx= ctx;
        this.canvas = canvas;
        this.barriers = barriers;
        this.restartBarriers = restartBarriers;
        this.Spaceship = Spaceship;
        this.projectileHandler = projectileHandler
       this.keyDownHandler = this.keyDownHandler.bind(this);
    }

    keyDownHandler(e){
    
        if(e.keyCode === 49 && this.Spaceship.credits >= 250){
            this.Spaceship.status += 1;
            this.Spaceship.credits -= 250;
        }
        if (e.keyCode === 50 && this.Spaceship.credits >= 500){
            debugger
            this.barriers = new this.restartBarriers(this.canvas, this.ctx, this.ProjectileHandler)
            this.Spaceship.credit -= 500;
        }
        if (e.keyCode === 51 && this.Spaceship.credits >= 1000) {
            this.projectileHandler.canFireinterval  = this.projectileHandler.canFireinterval / 2
            this.Spaceship.credits -= 1000;
        }
    }




}

export default PowerUps;