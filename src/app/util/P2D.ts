export class P2D
{
  x;
  y;

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

  rotate(deg)
  {
    //x = x*cos - y*sin
    //y = y*cos + x*sin
    let theta = this.degToRad(deg);
    this.x = (this.x*Math.cos(theta)) - (this.y*Math.sin(theta));
    this.y = (this.y*Math.cos(theta)) + (this.x*Math.sin(theta));
    //this.normalize();
  }


  

}