import Projectiles from './projectile'

class Plunderers{
    constructor(canvas, ctx, ProjectileHandler){
        this.ProjectileHandler = ProjectileHandler;
      
        this.plunderHorizontalChange = .02;
        this.plunderVerticalChange = 10;
        this.canvas = canvas;
        this.firerate = 20;
        this.ctx = ctx;
        this.plunderRowCount = 3;
        this.plunderColumnCount = 8;
        this.plunderWidth = 20;
        this.plunderHeight = 20;
        this.plunderPadding = 20;
        this.plunderOffsetLeft = 150;
        this.plunderOffsetTop = 20;
        this.plunderers = []
        for (let i = 0; i < this.plunderColumnCount; i++) {
          this.plunderers[i] = [];
            for (let j = 0; j < this.plunderRowCount; j++) {
                this.plunderers[i][j] = {x: 0, y:0, status: 1}
            } 
        }
    }

    fireweapon(){
        
        if(Math.floor(Math.random() * this.firerate) === 1){
          
            let column = Math.floor(Math.random() * this.plunderColumnCount);
            let row = Math.floor(Math.random() * this.plunderRowCount);
            let p = this.plunderers[column][row];
            if(p.status === 1){
            this.ProjectileHandler.allProjectilesArray.push(new Projectiles(this.canvas, this.ctx, p, "plunderer") )
            }
        }
    }

    nextLevelhandler(){
        if (this.nextLevel === true) {
            this.plunderers = []
            for (let i = 0; i < this.plunderColumnCount; i++) {
                this.plunderers[i] = [];
                for (let j = 0; j < this.plunderRowCount; j++) {
                    this.plunderers[i][j] = { x: 0, y: 0, status: 1 }
                }
            }

            this.plunderHorizontalChange += .02;
            this.plunderOffsetLeft = 150;
            this.plunderOffsetTop = 20;

            if (this.firerate < 0){
             this.firerate -= 2;
            }else{
                this.firerate += 2;
            }
           




        }

    }

    collisionDetection(){
    

      this.nextLevel = true;
        for (let i = 0; i < this.plunderColumnCount; i++) {
           for (let j = 0; j < this.plunderRowCount; j++) {
               let p = this.plunderers[i][j]
               if(p.status === 1){
                   this.nextLevel = false
                    this.ProjectileHandler.allProjectilesArray.forEach ((projectile) =>{
                        let laserX = projectile.startX
                        let laserY = projectile.moveY
                        if (laserX > p.x && laserX < p.x + this.plunderWidth && laserY === (p.y + this.plunderHeight) && projectile.status === 1){
                                p.status = 0
                                projectile.status = 0  
                                
                        }
                        // if(oldStatus!== p.status){
                        //     debugger;
                        // }
                    })
                }
                
           }
            
        }
        
        if(this.nextLevel === true){
            this.nextLevelhandler()
            this.nextLevel = false;
        }
        
    }

    draw (){
        for (let i = 0; i < this.plunderColumnCount; i++) {
            for (let j = 0; j < this.plunderRowCount; j++) {
                // if (this.plunderers[i][j].status === 1){
                    let plunderX = (i*(this.plunderWidth+this.plunderPadding)) + this.plunderOffsetLeft;
                    let plunderY = (j * (this.plunderHeight + this.plunderPadding)) + this.plunderOffsetTop;
                this.plunderers[i][j].x = plunderX;
                    this.plunderers[i][j].y = plunderY;
                    this.ctx.beginPath();
                    this.ctx.rect(plunderX, plunderY, this.plunderHeight, this.plunderWidth);
                if (this.plunderers[i][j].status === 1){
                    this.ctx.fillStyle = "#0095DD";
                }else{
                    this.ctx.fillStyle = "rgba(0, 0, 0, 0)"
                }
                    
                    this.ctx.fill();
                    this.ctx.closePath();
                    
                    if (this.plunderOffsetLeft < 20 || this.plunderOffsetLeft > 160 ){
                        this.plunderHorizontalChange = -this.plunderHorizontalChange
                        this.plunderOffsetTop += this.plunderVerticalChange
                    }

                    this.plunderOffsetLeft -= this.plunderHorizontalChange 
                // 
            }
            
        }
        this.collisionDetection()
        this.fireweapon()
    }
}


export default Plunderers 