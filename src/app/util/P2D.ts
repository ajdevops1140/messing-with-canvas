export class P2D
{
  x:number;
  y:number;
  degChange:number;

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

  rotate(deg:number)
  {
    //x = x*cos - y*sin
    //y = y*cos + x*sin
    //let theta = Number.parseFloat((this.degToRad(deg)).toPrecision(6));
    let theta = Number.parseFloat(deg.toPrecision(4));
    let sx = ((this.x*Math.cos(theta)) - (this.y*Math.sin(theta))).toPrecision(4);
    let sy = ((this.y*Math.cos(theta)) + (this.x*Math.sin(theta))).toPrecision(4);

    this.x = Number.parseFloat(sx);
    this.y = Number.parseFloat(sy);

    //this.normalize();
  }


  

}