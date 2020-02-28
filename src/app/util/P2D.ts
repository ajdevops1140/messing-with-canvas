export class P2D
{
  x:number;
  y:number;
  degChange:number;
  precision:number = 6;
  theta:number;
  animate:boolean = false;
  toRotate:boolean = false;
  toDot:boolean = false;
  dotResult:number;
  rot:number;

  constructor(x =0,y =0 )
  {    
    this.x = x;
    this.y = y;
    this.theta = 0;
    this.rot = 0;
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