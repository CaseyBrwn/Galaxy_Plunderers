class Counters{
    constructor(canvas, ctx, Spaceship){
        this.Spaceship = Spaceship;
        this.canvas = canvas;
        this.ctx = ctx;
    }

    draw(){
        this.ctx.fillStyle = "rgba(0, 0, 0, 0)";
        this.ctx.rect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fill();
        this.ctx.font = "30px Arial";
        this.ctx.fillStyle = "green";
        this.ctx.textAlign = "top";
        this.ctx.fillText(`Lives ${this.Spaceship.status}`, this.canvas.width - 100, 25);
        this.ctx.fillText(`Score ${this.Spaceship.score}`, 100 , 25);
        // this.ctx.fillText(`${this.Spaceship.status}`, this.canvas.width - 50,  80);
    }


}

export default Counters;