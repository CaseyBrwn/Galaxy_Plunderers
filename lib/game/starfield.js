class StarField{
    constructor(canvas, ctx, StarFieldpic){
        this.canvas = canvas;
        this.ctx = ctx;
        this.y = 0;
        this.StarFieldpic = StarFieldpic
      
        this.draw = this.draw.bind(this);
    }



    
    draw() {

            this.ctx.drawImage(this.StarFieldpic, 0, this.y, this.canvas.width, this.canvas.height, 0, 0, this.canvas.width, this.canvas.height);
            
     
    
        
        if(this.y === 1600){
            this.y = 0;
        }else{
            this.y += .1;
        }

    }


}

export default StarField;