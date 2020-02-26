export class Basic{
  x:number = 50;
  y:number = 50;
  vx:number = 1;
  ax:number = 0;
  r:number = 0;
  sx:number = 1;
  sy:number = 1;
  timeDiff:number;
  

  constructor(){}

  draw(ctx:CanvasRenderingContext2D)
  {
    //ctx.save();
    ctx.translate(0,0);
    ctx.rotate(this.r);
    ctx.scale(this.sx, this.sy);
    
    ctx.beginPath();
    console.log('In Basic draw');
    ctx.moveTo(10,10);
    ctx.lineTo(50,10);
    ctx.stroke();
    //ctx.restore();
  }
}