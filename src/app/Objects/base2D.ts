
export class base2D
{
  protected points:any[];
  protected tX:number;    //Translation
  protected tY:number;
  protected originX:number;  //Shift origin value
  protected originY:number;
  protected t:number;
  protected rotation:number;

  constructor(oX:number = 0,oY:number = 0)
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