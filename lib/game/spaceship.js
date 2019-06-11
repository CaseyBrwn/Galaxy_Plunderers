

class SpaceShip {
    constructor(){
        this.canvas = document.getElementById("myCanvas");
        this.ctx = canvas.getContext("2d");
        this.x = canvas.width / 2;
        this.y = canvas.height - 30;
        this.dx = 2;
        this.dy = -2;
        this.paddleHeight = 10;
        this.paddleWidth = 75;
        this.paddleX = (canvas.width - paddleWidth) / 2;
        this.rightPressed = false;
        this.leftPressed = false;
        document.addEventListener("keydown", keyDownHandler, false);
        document.addEventListener("keyup", keyUpHandler, false);
        this.keyDownHandler = this.keyDownHandler.bind(this)
        this.keyUpHandler = this.keyUpHandler.bind(this)
    }

    keyDownHandler(e) {
        if (e.key == "Right" || e.key == "ArrowRight") {
            rightPressed = true;
        }
        else if (e.key == "Left" || e.key == "ArrowLeft") {
            leftPressed = true;
        }
    }

    keyUpHandler(e) {
        if (e.key == "Right" || e.key == "ArrowRight") {
            rightPressed = false;
        }
        else if (e.key == "Left" || e.key == "ArrowLeft") {
            leftPressed = false;
        }
    }

    drawPaddle() {
        ctx.beginPath();
        ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
    }

    draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawPaddle();
        if (rightPressed && paddleX < canvas.width - paddleWidth) {
            paddleX += 7;
        }
        else if (leftPressed && paddleX > 0) {
            paddleX -= 7;
        }
    }

};

export default SpaceShip;

