

export class P2v
{
  x:number;
  y:number;  
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

  copy()
  {
    let p = new P2v();
    p.x = this.x;
    p.y = this.y;    
    p.tX = this.tX; //Translation
    p.tY = this.tY;
    p.originX = this.originX;  //Shift origin value
    p.originY = this.originY;
    p.degChange = this.degChange;
    p.precision = this.precision;
    p.theta = this.theta;
    p.animate = this.animate;
    p.toRotate = this.toRotate;
    p.toDot = this.toDot;
    p.dotResult = this.dotResult;
    p.rot = this.rot;
    p.color = this.color;
    return p;    
  }

  getDisplacement(p2:P2v)
  {
    let displaced = this.copy();
    displaced.x = this.x - p2.x;
    displaced.y = this.y - p2.y;
    return displaced;
  } 

  getDistance2D(p2:P2v)
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
    this.x = x ;//+ this.originX;
    this.y = y ;//+ this.originY;
  }

 setFromOrigin(originX, originY)
  {
    let p = this.copy();
    p.originX = originX;
    p.originY = originY;
    p.x = p.prec((p.x + p.tX + p.originX),6);
    p.y = p.prec((p.y + p.tY + p.originY),6);

    return p;
  }

  setFromOriginNoTrans(originX, originY)
  {
    let p = this.copy();
    p.originX = originX;
    p.originY = originY;
    p.x = p.prec((p.x + p.originX),6);
    p.y = p.prec((p.y + p.originY),6);

    return p;
  }

  mag()
  {
    return Math.sqrt((this.x * this.x)+(this.y * this.y));
  }

  normalize()
  {
    let p = this.copy();
    p.x = p.x/p.mag();
    p.y = p.y/p.mag();

    return p;
  }

  linearInterpolate(P1,P2,t)
  {
    // P(t)=(1-t)P1 + tP2
    let P0 = new P2v();
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
    let p = this.copy();    
    this.rot = deg;
    //x = x*cos - y*sin
    //y = y*cos + x*sin

    let theta = this.theta = this.degToRad(this.rot);
    //theta /=2;
    p.x = this.prec((p.x * Math.cos(theta)) + (p.y * Math.sin(theta)));
    p.y = this.prec((p.y * Math.cos(theta)) - (p.x * Math.sin(theta)));

    return p;
    //this.setFromCanvasOrigin();
  }


  

}