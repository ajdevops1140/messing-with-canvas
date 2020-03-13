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
     this.curve = new Curve(0,0,-30,100,210,80,200,0,oX,oY);
   }

   initializePoints()
   {
      let oX = this.originX;
      let oY = this.originY;
      this.points[0] = new P2v(oX,oY,-4,2);   //Upper left
      this.points[1] = new P2v(oX,oY,-4,-2);  //Lower left
      this.points[2] = new P2v(oX,oY,4,2);    //Upper Right
      this.points[3] = new P2v(oX,oY,4,-2);   //Lower Right
      this.points[4] = new P2v(oX,oY,0,0);    //Center of Particle
      this.points[5] = new P2v(oX,oY,2,0);    //Front Point to measure
   }

   setRotation(r)
   {
     this.rotation = r;
   }

   setTranslate(tX,tY)
   {
     this.tX = tX;
     this.tY = tY;
   }

   getTimeStep()
   {
     return this.t;
   }

   setTimeStep(t)
   {
     this.t = t;
   }

   draw(ctx:CanvasRenderingContext2D)
   {
     let p, c;

     p = this.rotate(this.rotation);
     c = this.curve.interpolate(this.t);
     this.tX = c.x;
     this.tY = c.y;
     this.points = p;
     p = this.translate(c.x,c.y);
     this.points = p;
     p = this.setFromOrigin();

     ctx.beginPath();
     ctx.fillStyle = 'blue';
     ctx.moveTo(p[0].x,p[0].y);
     ctx.lineTo(p[1].x,p[1].y);
     ctx.lineTo(p[3].x,p[3].y);
     ctx.lineTo(p[2].x,p[2].y);
     ctx.lineTo(p[0].x,p[0].y);
     ctx.fill();
     ctx.stroke();
   }
}