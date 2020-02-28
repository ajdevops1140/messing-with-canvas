export class P2D
{
  x:number;
  y:number;
  degChange:number;
  precision:number = 4;

  constructor(x =0,y =0 )
  {
    
    this.x = x;
    this.y = y;
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
  prec(n:number)
  {
    return Number.parseFloat(n.toPrecision(this.precision));
  }

  rotate(deg:number)
  {
    let x = this.x;
    let y = this.y;
    //x = x*cos - y*sin
    //y = y*cos + x*sin
    //let theta = Number.parseFloat((this.degToRad(deg)).toPrecision(6));
    let theta = this.prec(deg);
    let sx = (x * this.prec(Math.cos(theta))) - (y * this.prec(Math.sin(theta)));
    let sy = (y * this.prec(Math.cos(theta))) + (x * this.prec(Math.sin(theta)));

    this.x = this.prec(sx);
    this.y = this.prec(sy);

    //this.normalize();
  }


  

}