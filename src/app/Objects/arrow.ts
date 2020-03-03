import { P2D } from './util/P2D';

export class arrow
{
  points:P2D;
  centerShiftX:number;
  centerShiftY:number;
  originX:number;
  originY:number;
  rotation:number;

  arrow(x:number,y:number)
  {
    this.centerShiftX = x;
    this.centerShiftY = y;
    this.points = new P2D[4];
  }

  setOrigin()
  {
    this.originX = 
  }

  rotate(deg:number)
  {
    for(let i =0;i < this.points.length; i++)
    {
      this.points[i].rotate(deg);
    }
  }

  draw(ctx:CanvasRenderingContext2D)
  {
    ctx.save();
    ctx.translate(this.centerShiftX,this.centerShiftY);
    this.rotate(this.rotation);


    ctx.restore();
  }
}