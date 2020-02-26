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
    console.log('In Basic draw');
    this.ctx.moveTo(10,10);
    this.ctx.arcTo(100,50,10,100,40);
    this.ctx.lineTo(10,100);
    this.ctx.moveTo(0,0);
    this.ctx.lineTo(50,10);
    this.ctx.stroke();
    this.ctx.restore();
  }
}