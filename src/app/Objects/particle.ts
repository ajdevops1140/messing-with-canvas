import { P2v } from '../util/P2DCopy';
import { base2D } from './base2D';


export class Particle extends base2D
{
  /*
    points:any[];
    tX:number;    //Translation
    tY:number;
    originX:number;  //Shift origin value
    originY:number;
    t:number;
    rotation:number;
  */
   
   constructor(oX:number = 0,oY:number = 0,size = 0)
   {
     super(oX,oY,size);     
     this.initializePoints();
   }

   initializePoints()
   {
      let oX = super.originX;
      let oY = super.originY;
      super.points[0] = new P2v(oX,oY,-4,2);   //Upper left
      super.points[1] = new P2v(oX,oY,-4,-2);  //Lower left
      super.points[2] = new P2v(oX,oY,4,2);    //Upper Right
      super.points[3] = new P2v(oX,oY,4,-2);   //Lower Right
      super.points[4] = new P2v(oX,oY,0,0);    //Center of Particle
      super.points[5] = new P2v(oX,oY,2,0);    //Front Point to measure
   }




}