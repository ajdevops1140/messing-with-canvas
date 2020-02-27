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

  

}