export class Basic{
  x:number = 0;
  y:number = 0;
  vx:number = 1;
  vy:number = 1;
  ax:number = 0;
  ay:number = 0;
  r:number = 0;
  sx:number = 1;
  sy:number = 1;
  timeDiff:number;
  color:string = 'black';
  

  constructor(private ctx:CanvasRenderingContext2D){}

  setPos(x,y)
  {
    this.x = x;
    this.y = y;
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

  adjustSpeed(vx,vy,ax,ay)
  {    
    this.vx += (vx + ax);
    this.vy += (vy + ay);
  }

  adjustSpeedWithBounds(vx,vy,cvWidth,cvHeight)
  {
    this.vx += (vx + this.ax);
    this.vy += (vy + this.ay);

    if(this.x < 0 || this.x > cvWidth)
    {
       this.vx *= -1;       
    }

    if(this.y < 0 || this.y > cvHeight)
    {
      this.vy *= -1;
    }  
  }

  checkBounds(cvWidth,cvHeight)
  {
    if(this.x < 0 || this.x > cvWidth)
    {
      this.vx *= -1;
      this.ax *= -1;
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