export class Basic{
  x:number = 0;
  y:number = 0;
  vx:number = 1;
  ax:number = 0;
  r:number = 0;
  sx:number = 1;
  sy:number = 1;
  timeDiff:number;
  color:string = 'black';
  

  constructor(private ctx:CanvasRenderingContext2D){}

  draw()
  {
    

    this.ctx.save();
    this.ctx.translate(this.x,this.y);
    this.ctx.rotate(this.r);
    this.ctx.scale(this.sx, this.sy);
    
    this.ctx.fillStyle = this.color;

    this.ctx.beginPath();  
    this.ctx.moveTo(-0,-30);
    this.ctx.lineTo(-17,-10);
    this.ctx.arc(0,0,20,-5* Math.PI/6,-1 *Math.PI/6,true);     
    this.ctx.moveTo(17,-10);
    this.ctx.lineTo(-0,-30);
    this.ctx.fill();
    this.ctx.stroke();
    this.ctx.restore();
  }
}