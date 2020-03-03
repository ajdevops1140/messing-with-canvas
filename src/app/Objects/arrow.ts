import { P2D } from './util/P2D';

export class arrow
{
  points:P2D;
  centerShiftX:number;  //For translating to canvas position
  centerShiftY:number;  //For translating to canvas position
  originX:number;       //Point to begin Object draw
  originY:number;       //Point to begin Object draw
  rotation:number;

  arrow(x:number, y:number,canvasWidth:number,canvasHeight:number)
  {
    this.centerShiftX = canvasWidth;  
    this.centerShiftY = canvasHeight;
    this.originX = x;
    this.originY = y;
    this.rotation = 0;
    this.initializePoints();
  }

  initializePoints()
  {
     this.points = new P2D[4];
     for(let i = 0; i < this.points.length;i++)
     {
       this.points[i] = new P2D();
     }
     this.points[0].x = 0;
     this.points[0].y = 0;
     this.points[1].x = 0;
     this.points[1].y = 10;
     this.points[2].x = -5;
     this.points[2].y = 10;
     this.points[3].x = 5;
     this.points[3].y = 10;
  }

  translateToCanvasOrigin(ctx:CanvasRenderingContext2D)
  {
    ctx.translate(-this.centerShiftX,-this.centerShiftY);
  }

  translateFromCanvasOrigin(ctx:CanvasRenderingContext2D)
  {
    ctx.translate(this.centerShiftX,this.centerShiftY);
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
    this.translateFromCanvasOrigin(ctx);
    this.rotate(this.rotation);
    
    ctx.beginPath();
    ctx.moveTo(this.points[0].x,this.points[0].y);
    ctx.lineTo(this.points[1].x,this.points[1].y);
    ctx.lineTo(this.points[2].x,this.points[2].y);
    ctx.moveTo(this.points[1].x,this.points[1].y);
    ctx.lineTo(this.points[3].x,this.points[3].y);
    ctx.stroke();

    ctx.restore();
  }
}