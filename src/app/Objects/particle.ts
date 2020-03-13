import { P2v } from '../util/P2DCopy';
import { base2D } from './base2D';
import { Curve } from '../util/CurveCopy';


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
  curve:Curve;
   
   constructor(oX:number = 0,oY:number = 0,size = 6)
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

   draw(ctx:CanvasRenderingContext2D)
   {
     super.rotate(super.rotation);
     super.translate(super.tX,super.tY);
     super.setFromOrigin();

     ctx.beginPath();
     ctx.fillStyle = 'blue';
     ctx.moveTo(super.points[0].x,super.points[0].y);
     ctx.lineTo(super.points[1].x,super.points[1].y);
     ctx.lineTo(super.points[2].x,super.points[2].y);
     ctx.lineTo(super.points[3].x,super.points[3].y);
     ctx.fill();
     ctx.closePath();     
   }
}