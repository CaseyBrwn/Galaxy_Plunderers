

const GAMESTATE = {
    PAUSED: 0,
    RUNNING: 1,
    MENU: 2,
    GAMEOVER: 3
}

class GameCanvas {
    constructor(canvas, ctx, ProjectileHandler, Plunderers, Barriers, SpaceShip, startscreen, Starfield, Starfieldpic, SpaceShippic, AlienPic, Counter, soundObject, PowerUps){
      
        
        this.gameLoop = this.gameLoop.bind(this);
        this.drawStart = this.drawStart.bind(this);
        this.drawPause = this.drawPause.bind(this);
        this.drawGameOver = this.drawGameOver.bind(this);
        this.gameState = this.gameStart.bind(this);
        this.Starfieldpic = Starfieldpic;
        this.canvas = canvas;
        this.ctx = ctx;
        this.restartStarfield = Starfield;
        this.SpaceShippic = SpaceShippic
        this.restartSpaceship = SpaceShip;
        this.restartPlunderers = Plunderers;
        this.restartBarriers = Barriers;
        this.restartProjectileHandler = ProjectileHandler;
        this.restartCounter = Counter;
        this.restartPowerUps = PowerUps;
        this.soundObject = soundObject    
        this.AlienPic = AlienPic
        
        this.Starfield = new Starfield(canvas, ctx, this.Starfieldpic);
        this.SpaceShip = new SpaceShip(canvas, ctx, this.SpaceShippic)
        this.ProjectileHandler = new ProjectileHandler(canvas, ctx, this.SpaceShip, this.soundObject)
        this.Plunderers = new Plunderers(canvas, ctx, this.ProjectileHandler, this.SpaceShip, this.AlienPic, this.soundObject)
        this.barriers = new Barriers(canvas, ctx, this.ProjectileHandler)
        this.Counter = new Counter(canvas, ctx, this.SpaceShip)
        this.PowerUp = new PowerUps(this.SpaceShip, this.ProjectileHandler, this.barriers, this.restartBarriers, this.ctx, this.canvas)
        this.gameState = GAMESTATE.MENU
        this.startscreen = startscreen;
        this.keyDownHandler = this.keyDownHandler.bind(this);
    
        document.addEventListener("keydown", this.SpaceShip.keyDownHandler, false);
        document.addEventListener("keyup", this.SpaceShip.keyUpHandler, false);
        document.addEventListener("keydown", this.ProjectileHandler.keyDownHandler,  false);
        document.addEventListener("keyup", this.ProjectileHandler.keyUpHandler,  false);
        document.addEventListener("keyup", this.keyDownHandler, false) 
        document.addEventListener("keydown", this.PowerUp.keyDownHandler, false);

        


        // this.draw = this.draw.bind(this);
    }

    keyDownHandler(e){

        if (e.keyCode === 80) {
            if(this.gameState !== GAMESTATE.PAUSED){
                this.drawPause()
            this.gameState = GAMESTATE.PAUSED
            }else{
              
                this.gameState = GAMESTATE.RUNNING
                this.gameLoop()
            }
        }
        if (e.keyCode === 13){
           if (this.gameState !== GAMESTATE.RUNNING){
           
               this.gameState = GAMESTATE.RUNNING
               this.gameLoop()
           }
           
        }

        if (e.keyCode === 77){
            let soundKeys = Object.keys(this.soundObject)
            soundKeys.forEach((key) => {
                if(!this.soundObject[key].muted){
                this.soundObject[key].muted = true
                }else{
                    this.soundObject[key].muted = false;
                }
            })

        }

        if (e.keyCode === 82){
     
            this.Starfield = new this.restartStarfield(this.canvas, this.ctx, this.Starfieldpic)
            this.SpaceShip = new this.restartSpaceship(this.canvas, this.ctx, this.SpaceShippic)
            this.ProjectileHandler = new this.restartProjectileHandler(this.canvas, this.ctx, this.SpaceShip, this.soundObject)
            this.Plunderers = new this.restartPlunderers(this.canvas, this.ctx, this.ProjectileHandler, this.SpaceShip, this.AlienPic, this.soundObject)
            this.barriers = new this.restartBarriers(this.canvas, this.ctx, this.ProjectileHandler)
            this.Counter = new this.restartCounter(this.canvas, this.ctx, this.SpaceShip)
            document.addEventListener("keydown", this.SpaceShip.keyDownHandler, false);
            document.addEventListener("keyup", this.SpaceShip.keyUpHandler, false);
            document.addEventListener("keydown", this.ProjectileHandler.keyDownHandler, false);
            document.addEventListener("keyup", this.ProjectileHandler.keyUpHandler, false);
            document.addEventListener("keyup", this.keyDownHandler, false) 
            this.gameState = GAMESTATE.MENU
            this.drawStart()
        } 
    }





   gameLoop(){
      
        if(this.SpaceShip.status <= 0){
            this.gameState = GAMESTATE.GAMEOVER
            this.drawGameOver()
        }
            if(this.gameState === GAMESTATE.PAUSED ||
                this.gameState === GAMESTATE.MENU ||
                this.gameState === GAMESTATE.GAMEOVER) {
                    return
            }

       requestAnimationFrame(this.gameLoop)
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.Starfield.draw()
        this.SpaceShip.draw()
        this.Plunderers.draw()
        this.barriers.draw()
        this.Counter.draw()
        this.ProjectileHandler.allProjectilesArray.forEach((projectile) => {
            projectile.draw()
            this.ProjectileHandler.collisiondetection()
        })
        this.ProjectileHandler.allProjectilesArray = this.ProjectileHandler.allProjectilesArray.filter(projectile => projectile.status !== 0);
    }



    drawPause() {
        this.ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
        this.ctx.rect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fill();
        this.ctx.font = "40px Arial";
        this.ctx.fillStyle = "white";
        this.ctx.textAlign = "center";
        this.ctx.fillText("Paused", this.canvas.width / 2, this.canvas.height / 2);
    }

    drawStart() {
        console.log(this.startscreen)
        this.ctx.fillStyle = "rgba(0, 0, 0, 1)";
        this.ctx.rect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fill();
            this.ctx.drawImage(this.startscreen, 135, -40, this.canvas.width, 500, 0, 0, this.canvas.width, this.canvas.height);
            this.ctx.font = "40px Arial";
            this.ctx.fillStyle = "white";
            this.ctx.textAlign = "center";
            this.ctx.fillText("Press Enter to begin", this.canvas.width / 2, 200); 
      
    }

    gameStart() {
        this.drawStart()
        this.gameLoop()
   
    }



    drawGameOver() {
        let img = new Image();
        img.onload = () => {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
            this.ctx.drawImage(img, 135, -40, this.canvas.width, 500, 0, 0, this.canvas.width, this.canvas.height);
            this.ctx.font = "40px Arial";
            this.ctx.fillStyle = "white";
            this.ctx.textAlign = "center";
            this.ctx.fillText("GAME OVER", this.canvas.width / 2, 100);
            this.ctx.fillText("Press R to Play Again", this.canvas.width / 2, 200);

        }
        img.src = 'https://wallup.net/wp-content/uploads/2015/12/257313-digital_art-space-universe-spaceship-rockets-planet-Earth-Futurama-3D-vintage-artwork-satellite-bokeh-futuristic-planet_express-realistic-748x421.jpg';
    }

}





export default GameCanvas;