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
    this.initializePoints();
  }

  setFromOrigin()
  {
    for(let i = 0; i < this.points.length;i++)
    {
      this.points[i].setFromCanvasOrigin();
    }     
  }

  initializePoints()
  {
     this.points = new Array(4);
     

     this.points[0] = new P2D(0,15);     
     this.points[1] = new P2D(0,-15);    
     this.points[2] = new P2D(-5,-10);      
     this.points[3] = new P2D(5,-10);  
     this.setFromOrigin();
     /*
     this.points[0].x = 0;
     this.points[0].y = 0;
     this.points[1].x = 0;
     this.points[1].y = -30;
     this.points[2].x = -5;
     this.points[2].y = -20;
     this.points[3].x = 5;
     this.points[3].y = -20;
     for(let i = 0; i < this.points.length;i++)
     {
       this.points[i].setFromCanvasOrigin();
     }*/
     /*
     this.points[0].translate(0,0);
     this.points[1].translate(5,-20);
     this.points[2].translate(5,-20);
     this.points[3].translate(5,-20);
     */
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
    for(let i =0;i < this.points.length; i++)
    {
      this.points[i].translate(x,y);
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
    
    this.rotate(this.rotation);
    this.translate(this.shiftX,this.shiftY); 
       
   
     
    
    
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