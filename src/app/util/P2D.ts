export class P2D
{
  x:number;
  y:number;
  oX:number;
  oY:number;
  tX:number;    //Translation
  tY:number;
  originX:number;  //Shift origin value
  originY:number;
  degChange:number;
  precision:number = 6;
  theta:number;
  animate:boolean = false;
  toRotate:boolean = false;
  toDot:boolean = false;
  dotResult:number;
  rot:number;
  color = 'blue';

  constructor(originX = 0, originY = 0, x = 0,y = 0)
  {    
    this.originX = originX;
    this.originY = originY;
    this.setPoint(x,y);
    this.tX = 0;
    this.tY = 0;
    this.theta = 0;
    this.rot = 0;
  }

  getDisplacement(p2:P2D)
  {
    let displaced = new P2D();
    displaced.x = this.x - p2.x;
    displaced.y = this.y - p2.y;
    return displaced;
  }

  getOriginDisplacement(p2:P2D)
  {
    let displaced = new P2D();
    displaced.x = this.oX - p2.oX;
    displaced.y = this.oY - p2.oY;
    return displaced;
  }

  getDistance2D(p2:P2D)
  {
    let xDiff = this.x - p2.x;
    let yDiff = this.y - p2.y;
    let xSquared = xDiff * xDiff;
    let ySquared = yDiff * yDiff;
    let addSquared = xSquared + ySquared;
    return Math.sqrt(addSquared);
  }

  translate(tX,tY)
  {    
    this.tX = tX;
    this.tY = tY;     
  }

  setPoint(x,y)
  {
    this.oX = this.x = x ;//+ this.originX;
    this.oY = this.y = y ;//+ this.originY;
  }

  setToCanvasOrigin()
  {
    this.x = this.prec((this.x - this.tX - this.originX),6);
    this.y = this.prec((this.y - this.tY - this.originY),6);
  }

  setFromCanvasOrigin()
  {
    this.x = this.prec((this.x + this.tX + this.originX),6);
    this.y = this.prec((this.y + this.tY + this.originY),6);
  }

  setFromOrigin(originX, originY)
  {
    this.originX = originX;
    this.originY = originY;
    this.x = this.prec((this.x + this.tX + this.originX),6);
    this.y = this.prec((this.y + this.tY + this.originY),6);
  }

  mag()
  {
    return Math.sqrt((this.x * this.x)+(this.y * this.y));
  }

  normalize()
  {
    this.x = this.x/this.mag();
    this.y = this.y/this.mag();
  }

  linearInterpolate(P1,P2,t)
  {
    // P(t)=(1-t)P1 + tP2
    let P0 = new P2D();
    this.x = ((1-t) * P1.x) + (t * P2.x);
    this.y = ((1-t) * P1.y) + (t * P2.y);
    P0.x = this.x;
    P0.y = this.y;
    return P0;
  }

  dot(x,y)
  {
    return (this.x * x) + (this.y * y);
  } 

  degToRad(deg:number)
  {
    return deg * Math.PI/180;
  }

  //Parse the number and return the precision
  prec(n:number,p:number = this.precision)
  {
    return Number.parseFloat(n.toFixed(p));
  }

  rotate(deg:number)
  {
    //this.setToCanvasOrigin();
    let x = this.oX;
    let y = this.oY;
    this.rot = deg;
    //x = x*cos - y*sin
    //y = y*cos + x*sin

    let theta = this.theta = this.degToRad(this.rot);
    //theta /=2;
    let sx = this.prec((x * Math.cos(theta)) + (y * Math.sin(theta)));
    let sy = this.prec((y * Math.cos(theta)) - (x * Math.sin(theta)));

    this.x = sx;
    this.y = sy;
    //this.setFromCanvasOrigin();
  }


  

}