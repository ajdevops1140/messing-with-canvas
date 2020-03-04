import { P2D } from '../util/P2D';

export class Arrow
{
  points:any[];
  centerShiftX:number;  //For translating to canvas position
  centerShiftY:number;  //For translating to canvas position
  originX:number;       //Point to begin Object draw
  originY:number;       //Point to begin Object draw
  shiftX:number;
  shiftY:number;
  t:number;
  rotation:number;

  constructor(/*canvasWidth:number,canvasHeight:number,*/x:number = 0, y:number = 0)
  {
    //this.centerShiftX = canvasWidth;  
    //this.centerShiftY = canvasHeight;
    this.originX = x;
    this.originY = y;
    this.rotation = 0;
    this.shiftX = 0;
    this.shiftY = 0;
    this.t =0;
    this.initializePoints();
  }

  setFromOrigin()
  {
    for(let i = 0; i < this.points.length;i++)
    {
      this.points[i].setFromCanvasOrigin();
    }     
  }

  setToOrigin()
  {
     for(let i = 0; i < this.points.length;i++)
    {
      this.points[i].setToCanvasOrigin();
    }    
  }

  initializePoints()
  {
     this.points = new Array(4);     

     this.points[0] = new P2D(this.originX,this.originY,0,15); 
     this.points[1] = new P2D(this.originX,this.originY,0,0); 
     this.points[2] = new P2D(this.originX,this.originY,0,-15);    
     this.points[3] = new P2D(this.originX,this.originY,-5,-10);      
     this.points[4] = new P2D(this.originX,this.originY,5,-10);  

     this.points[5] = new P2D(this.originX,this.originY,0,-15);  //This is the direction vector/point
     this.setFromOrigin();
  }

  translateToCanvasOrigin(ctx:CanvasRenderingContext2D)
  {
    ctx.translate(-this.centerShiftX,-this.centerShiftY);
  }

  translateFromCanvasOrigin(ctx:CanvasRenderingContext2D)
  {
    ctx.translate(this.centerShiftX,this.centerShiftY);
  }

  translate(x,y)
  {
    //Get the displacement between vectors after step t

    for(let i =0;i < this.points.length; i++)
    {
      this.points[i].translate(x,y);
    }
  }

  translateInter(t)
  {
    //Get the displacement between vectors after step t
    let pT = this.points[5].linearInterpolate(this.points[1],this.points[5],t);
    pT.x = pT.x - this.points[1].x;  //Get the displacement between vectors
    pT.y = pT.y - this.points[1].y;

    for(let i =0;i < this.points.length; i++)
    {
      this.points[i].translate(pT.x,pT.y);
    }
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
    //this.translateFromCanvasOrigin(ctx);
    //this.setToOrigin();
      
    this.rotate(this.rotation);
    this.translateInter(this.t);
    //this.translate(this.shiftX,this.shiftY);
    this.setFromOrigin();
    
    
    ctx.beginPath();
    ctx.strokeStyle = 'blue';
    ctx.moveTo(this.points[0].x,this.points[0].y);
    ctx.lineTo(this.points[1].x,this.points[1].y);
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.strokeStyle = 'red';
    ctx.moveTo(this.points[1].x,this.points[1].y);
    ctx.lineTo(this.points[2].x,this.points[2].y);
    ctx.lineTo(this.points[3].x,this.points[3].y);
    ctx.moveTo(this.points[2].x,this.points[2].y);
    ctx.lineTo(this.points[4].x,this.points[4].y);
    ctx.stroke();
    ctx.closePath();

    ctx.restore();
  }
}