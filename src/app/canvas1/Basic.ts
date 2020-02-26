export class Basic{
  x:number = 50;
  y:number = 50;
  vx:number = 1;
  ax:number = 0;
  r:number;
  sx:number;
  sy:number;
  timeDiff:number;
  

  constructor(){}

  draw(ctx:CanvasRenderingContext2D)
  {
    ctx.save();
    ctx.translate(this.x,this.y);
    ctx.rotate(this.r);
    ctx.scale(this.sx, this.sy);

    ctx.beginPath();
    ctx.lineTo(this.x + 10,0);
    ctx.stroke();
    ctx.restore();
  }
}