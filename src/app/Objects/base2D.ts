
export class base2D
{
  points:any[];
  tX:number;    //Translation
  tY:number;
  originX:number;  //Shift origin value
  originY:number;
  t:number;
  rotation:number;

  constructor(oX:number,oY:number)
  {
    this.points = new Array();
    this.originX = oX;
    this.originY = oY;
    this.tX = this.tY = this.rotation = this.t = 0;
  }

  setFromOrigin()
  {
    for(let i = 0; i < this.points.length;i++)
    {
      this.points[i].setFromCanvasOrigin();
    }     
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