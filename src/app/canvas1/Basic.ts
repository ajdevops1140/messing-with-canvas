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
    //this.ctx.translate(0,0);
    //this.rotate(this.r);
    //this.scale(this.sx, this.sy);
    
    this.ctx.beginPath();
    console.log('In Basic draw');
    this.ctx.moveTo(150,150);
    this.ctx.lineTo(50,10);
    this.ctx.stroke();
    this.ctx.restore();
  }
}