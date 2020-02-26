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
    // Tangential lines
    this.ctx.beginPath();
    this.ctx.strokeStyle = 'gray';
    this.ctx.moveTo(200, 20);
    this.ctx.lineTo(200, 130);
    this.ctx.lineTo(50, 20);
    this.ctx.stroke();

    // Arc
    this.ctx.beginPath();
    this.ctx.strokeStyle = 'black';
    this.ctx.lineWidth = 5;
    this.ctx.moveTo(200, 20);
    this.ctx.arcTo(200,130, 50,20, 40);
    this.ctx.stroke();

    // Start point
    this.ctx.beginPath();
    this.ctx.fillStyle = 'blue';
    this.ctx.arc(200, 20, 5, 0, 2 * Math.PI);
    this.ctx.fill();

    // Control points
    this.ctx.beginPath();
    this.ctx.fillStyle = 'red';
    this.ctx.arc(200, 130, 5, 0, 2 * Math.PI); // Control point one
    this.ctx.arc(50, 20, 5, 0, 2 * Math.PI);   // Control point two
    this.ctx.fill();
    /*
    this.ctx.save();
    this.ctx.translate(this.x,this.y);
    this.ctx.rotate(this.r);
    this.ctx.scale(this.sx, this.sy);
    
    this.ctx.beginPath();
    this.ctx.moveTo(0,0);
    this.ctx.arcTo(0,20,10,100,300);
    //this.ctx.lineTo(30,100);
    this.ctx.moveTo(0,0);
    this.ctx.lineTo(50,10);
    this.ctx.stroke();
    this.ctx.restore();*/
  }
}