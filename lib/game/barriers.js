
class Barriers{
    constructor(canvas, ctx, ProjectileHandler){
        this.ProjectileHandler = ProjectileHandler
        this.canvas = canvas
        this.ctx = ctx
        this.barriercount = 3;
        this.barrierpadding = 120;
        this.barriersRowCount = 5;
        this.barriersColumnCount = 30;
        this.barrierHeight = 2;
        this.barrierWidth = 2;
        this.barrierOffSetLeft = 100;
        this.barrierOffSetTop = 400;
        this.barriers = [];
        for (let i = 0; i < this.barriercount; i++) {
            this.barriers[i] = []
            for (let j = 0; j < this.barriersColumnCount; j++) {
                 this.barriers[i][j] = []
                for (let c = 0; c < this.barriersRowCount; c++) {
                   this.barriers[i][j][c] = {x: 0, y:0, status: 1}  
                 } 
             }
        }
    }

    collisionDetection() {

        for (let i = 0; i < this.barriercount; i++) {
            for (let j = 0; j < this.barriersColumnCount; j++) {
                for (let c = 0; c < this.barriersRowCount; c++) {
                    let b = this.barriers[i][j][c]
                  
                    if (b.status === 1) {
                      
                        this.ProjectileHandler.allProjectilesArray.forEach((projectile) => {
                            let laserX = Math.floor(projectile.startX)
                            let laserY = projectile.moveY
                      
                            if ((laserX === b.x || laserX === b.x +1) && laserY + 8 === (b.y - this.barrierWidth)  && (projectile.status === 1 || projectile.status === 2)) {
                             
                                b.status = 0
                                projectile.status = 0
                               
                            }
                            // }else if (laserX === b.x && laserY === (b.y - this.barrierWidth) && projectile.status ===1){
                            //     b.status = 0
                            //     projectile.status = 0

                            // }
                            // if(oldStatus!== p.status){
                            //     debugger;
                            // }
                        })
                    }
                }

            }

        }
    }



    draw(){
        for (let i = 0; i < this.barriercount; i++) {
            for (let j = 0; j < this.barriersColumnCount; j++) {
               for (let c = 0; c < this.barriersRowCount; c++) {
                  if(this.barriers[i][j][c].status === 1){
                      
                    let barrierX = ((i* this.barrierpadding) + (j*this.barrierWidth) + this.barrierOffSetLeft)
                    let barrierY = ((c*this.barrierHeight) + this.barrierOffSetTop)
                    this.barriers[i][j][c].x = barrierX;
                    this.barriers[i][j][c].y = barrierY;
                  
                    this.ctx.beginPath();
                    this.ctx.rect(barrierX, barrierY, this.barrierHeight, this.barrierWidth);

                    this.ctx.fillStyle = "#0095DD";
                    this.ctx.fill();
                    this.ctx.closePath();
                  }
                
               }
                
            }
            
        }
        this.collisionDetection()
    }

}

export default Barriers;