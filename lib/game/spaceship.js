

class SpaceShip {
    constructor(canvas, ctx, SpaceShippic){
        this.SpaceShippic = SpaceShippic;
        this.score = 0;
        this.shipspeed = 2;
        this.canvas = canvas
        this.ctx = ctx
        this.paddleHeight = 40;
        this.paddleWidth = 40;
        this.paddleX = (this.canvas.width - this.paddleWidth) / 2;
        this.laserX = (this.paddleX + this.paddleWidth/2)
        this.rightPressed = false;
        this.leftPressed = false;
        this.keyDownHandler = this.keyDownHandler.bind(this);
        this.keyUpHandler = this.keyUpHandler.bind(this);
        this.drawPaddle = this.drawPaddle.bind(this);
        this.status = 3;
        this.previousStatus = 3;
        this.credits = 0;
        
    }

    keyDownHandler(e) {
        if (e.key == "Right" || e.key == "ArrowRight") {
            this.rightPressed = true;
        }
        else if (e.key == "Left" || e.key == "ArrowLeft") {
            this.leftPressed = true;
        }
    }

    keyUpHandler(e) {
        if (e.key == "Right" || e.key == "ArrowRight") {
            this.rightPressed = false;
        }
        else if (e.key == "Left" || e.key == "ArrowLeft") {
            this.leftPressed = false;
        }
    }

    collisionDetection(){

    }

    drawPaddle() {
        
        // this.ctx.beginPath();
        this.ctx.drawImage(this.SpaceShippic, 25, 1, 23, 23, this.paddleX, this.canvas.height - this.paddleHeight, this.paddleHeight, this.paddleWidth);
        // this.ctx.fillStyle = "#0095DD";
        // this.ctx.fill();
        // this.ctx.closePath();
    }

    draw() {

        if(this.previousStatus != this.status && this.status > 0){

            
            this.paddleX = (this.canvas.width - this.paddleWidth) / 2;
            this.laserX = (this.paddleX + this.paddleWidth / 2)
            this.previousStatus = this.status
        }else if(this.status > 0){
            this.drawPaddle();
            if (this.rightPressed && this.paddleX < this.canvas.width - this.paddleWidth) {
                this.paddleX += this.shipspeed;
                this.laserX += this.shipspeed;
            }
            else if (this.leftPressed && this.paddleX > 0) {
                this.paddleX -= this.shipspeed;
                this.laserX -= this.shipspeed;
            }
        }
    }
};

export default SpaceShip;

