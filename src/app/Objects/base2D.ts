import { P2D } from "../util/P2D";

export class base2D
{
  points:P2D[];
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

  /*rotateRad(deg:number)
  {   
    for(let i =0;i < this.points.length; i++)
    {
      this.points[i].rotateRad(deg);      
    }
    
  }*/


}