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
      super.points
   }


}