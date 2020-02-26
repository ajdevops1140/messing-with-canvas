export class Basic{
  x:number = 0;
  y:number = 0;
  vx:number = 0;
  vy:number = 0;
  ax:number = 0;
  ay:number = 0;
  r:number = 0;
  sx:number = 1;
  sy:number = 1;
  timeDiff:number;
  color:string = 'black';
  inXBounds:boolean;
  inYBounds:boolean;  
  adjustX:boolean;
  adjustY:boolean;

  constructor(private ctx:CanvasRenderingContext2D){}

  setPos(x,y)
  {
    this.x = x;
    this.y = y;
  }

  setSpeed(vx,vy)
  {
    this.vx = vx;
    this.vy = vy;
  }



  adjustPos()
  {
    this.x += this.vx;
    this.y += this.vy;
  }

  adjustRot(r)
  {
    this.r += r * Math.PI/180;
  }

  adjustAcceleration(ax,ay)
  {
    this.ax +=ax;
    this.ay +=ay;
  }

  addAccelerationToSpeed()
  {
    this.vx += this.ax;
    this.vy += this.ay;
  }

  adjustSpeed(vx,vy,ax = 0,ay = 0)
  {    
    this.vx = (vx + ax);
    this.vy = (vy + ay);
  } 

  checkXBounds(cvWidth,cvHeight)
  {
    if(this.x < 0 || this.x > cvWidth)
    {
      this.vx *= -1; 
      this.inXBounds = false;
      this.adjustX = true;          
    }
    else{
      this.inXBounds = true;
    }
    
  }

  checkYBounds(cvWidth,cvHeight)
  {
    if(this.y < 0 || this.y > cvHeight)
    {
      this.vy *= -1;  
      this.inYBounds = false;    
    }    
    else{
      this.inYBounds = true;
    }
  }

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