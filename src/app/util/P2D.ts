export class P2D
{
  x;
  y;

  constructor(){}

  mag()
  {
    return Math.sqrt((this.x * this.x)+(this.y * this.y));
  }

  norm()
  {

  }

  dot(x,y)
  {
    return (this.x * x) + (this.y * y);
  }

  rotate(theta)
  {
    //x = x*cos - y*sin
    //y = y*cos + x*sin
    this.x = (this.x*Math.cos(theta)) - (this.y*Math.sin(theta));
    this.y = (this.y*Math.cos(theta)) + (this.x*Math.sin(theta));
  }


  

}