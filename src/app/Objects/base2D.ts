import { P2v } from "../util/P2DCopy";

export class base2D
{
  points:P2v[];
  tX:number;    //Translation
  tY:number;
  originX:number;  //Shift origin value
  originY:number;
  t:number;
  rotation:number;

  constructor(oX:number = 0,oY:number = 0,size = 0)
  {
    this.points = new Array(size);
    this.originX = oX;
    this.originY = oY;
    this.tX = this.tY = this.rotation = this.t = 0;
  }

  setFromOrigin()
  {
    let p;
    let pts = new Array();
    for(let i = 0; i < this.points.length;i++)
    {
      p = this.points[i].setFromOrigin(this.originX,this.originY);
      pts.push(p);
    } 
    return pts;    
  }

  translate(x,y)
  {
    //Get the displacement between vectors after step t
    for(let i =0;i < this.points.length; i++)
    {
      this.points[i].translate(x,y);
    }
  }

  rotate(deg:number)
  {
    for(let i =0;i < this.points.length; i++)
    {
      this.points[i].rotate(deg);
    }
  }


}