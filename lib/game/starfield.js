class StarField{
    constructor(canvas, ctx, StarFieldpic){
        this.canvas = canvas;
        this.ctx = ctx;
        this.x = 0;
        this.StarFieldpic = StarFieldpic
      
        this.draw = this.draw.bind(this);
    }



    
    draw() {

        this.StarFieldpic.onload = () => {
            this.ctx.drawImage(this.StarFieldpic, this.x, 0, this.canvas.width, this.canvas.height, 0, 0, this.canvas.width, this.canvas.height);
        }
    
        
        if(this.x === 450){
            this.x = 0;
        }else{
            this.x += .01;
        }

    }


}

export default StarField;