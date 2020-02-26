export class Basic{
  x:number = 50;
  y:number = 50;
  vx:number = 1;
  ax:number = 0;
  r:number = 0;
  sx:number = 1;
  sy:number = 1;
  timeDiff:number;
  

  constructor(private ctx:CanvasRenderingContext2D){}

  draw()
  {
    this.ctx.save();
    this.ctx.translate(this.x,this.y);
    this.ctx.rotate(this.r);
    this.ctx.scale(this.sx, this.sy);
    
    this.ctx.beginPath();
    this.ctx.moveTo(0,0);
    this.ctx.arcTo(0,20,10,100,300);
    //this.ctx.lineTo(30,100);
    this.ctx.moveTo(0,0);
    this.ctx.lineTo(50,10);
    this.ctx.stroke();
    this.ctx.restore();
  }
}