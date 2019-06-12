

class SpaceShip {
    constructor(canvas, ctx){
        this.shipspeed = 2;
        this.canvas = canvas
        this.ctx = ctx
        this.paddleHeight = 20;
        this.paddleWidth = 20;
        this.paddleX = (this.canvas.width - this.paddleWidth) / 2;
        this.laserX = (this.paddleX + this.paddleWidth/2)
        this.rightPressed = false;
        this.leftPressed = false;
        this.keyDownHandler = this.keyDownHandler.bind(this);
        this.keyUpHandler = this.keyUpHandler.bind(this);
        this.drawPaddle = this.drawPaddle.bind(this);
        
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

    drawPaddle() {
        this.ctx.beginPath();
        this.ctx.rect(this.paddleX, this.canvas.height - this.paddleHeight, this.paddleWidth, this.paddleHeight);
        this.ctx.fillStyle = "#0095DD";
        this.ctx.fill();
        this.ctx.closePath();
    }

    draw() {
     
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
};

export default SpaceShip;

