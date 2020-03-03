export class P2D
{
  x:number;
  y:number;
  originX:number;
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

  constructor(oX,oY,x =0,y =0 )
  {    
    this.originX = oX;
    this.originY = oY;
    this.x = x;
    this.y = y;
    
    this.theta = 0;
    this.rot = 0;
  }

  translate(x,y)
  {
    //this.originX +
    //this.originY + 
    this.x += x;
    this.y += y;
  }

  setToCanvasOrigin()
  {
    this.x -= this.originX;
    this.y -= this.originY;
  }

  setFromCanvasOrigin()
  {
    this.x += this.originX;
    this.y += this.originY;
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

  /*linearInterpolate(P1,P2,t)
  {
    // P(t)=(1-t)P1 + tP2
    let P0 = new P2D();
    this.x = ((1-t) * P1.x) + (t * P2.x);
    this.y = ((1-t) * P1.y) + (t * P2.y);
    P0.x = this.x;
    P0.y = this.y;
    return P0;
  }*/

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
    return Number.parseFloat(n.toPrecision(p));
  }

  rotate(deg:number)
  {
    let x = this.x;
    let y = this.y;
    this.rot = deg;
    //x = x*cos - y*sin
    //y = y*cos + x*sin

    let theta = this.theta = this.degToRad(deg);
    //theta /=2;
    let sx = this.prec((x * Math.cos(theta)) - (y * Math.sin(theta)));
    let sy = this.prec((y * Math.cos(theta)) + (x * Math.sin(theta)));

    this.x = sx;
    this.y = sy;
  }


  

}