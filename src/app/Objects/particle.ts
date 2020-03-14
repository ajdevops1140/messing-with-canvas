import { P2D } from '../util/P2D';
import { base2D } from './base2D';
import { Curve } from '../util/Curve';


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
   rate:number;
   
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
      this.points[0] = new P2D(oX,oY,-2,4);   //Lower left
      this.points[1] = new P2D(oX,oY,-2,-4);  //Upper left
      this.points[2] = new P2D(oX,oY,2,-4);    //Upper Right
      this.points[3] = new P2D(oX,oY,2,4);   //Lower Right
      this.points[4] = new P2D(oX,oY,0,0);    //Center of Particle
      this.points[5] = new P2D(oX,oY,0,10);    //Front Point to measure
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

   setRate(r)
   {
     this.rate = r;
   }

   setTimeStep()
   {
     this.t += this.rate;

     if(this.t >=1)
     {
       this.rate = this.rate * -1;
       this.t = 1;
     }
     else if(this.t <= 0)
     {
       this.rate = this.rate * -1;
       this.t = 0;
     }
   }


   computeStep()
   {
     this.setTimeStep();
     let p = this.points[5];
     let t = this.t;         
     let c1 = this.curve.interpolateTangent(t); //Get the first point

     //console.log(`c1 ${c1.x},${c1.y}`);     
     //c1.normalize();   
     //p.normalize();
     //console.log(`c1 ${c1.x},${c1.y}`);
     //let dis = c1.getDisplacement(c);
     //let angle = c1.getAngleBetweenPoints(dis,p);
     
     return Math.atan2(c1.x,c1.y);
   }

   draw(ctx:CanvasRenderingContext2D)
   {
     let p, c, n, c1,cn;
     n = this.computeStep();
     this.rotate(n);
     c = this.curve.interpolate(this.t);
     
     //c.normalize();
     //cn.normalize();
     //c1.normalize();
     this.tX = c.x;
     this.tY = c.y;
     //this.points = p;
     this.translate(c.x,c.y);
     //this.points = p;
     this.setFromOrigin();

     ctx.beginPath();
     ctx.fillStyle = 'blue';
     //ctx.fillRect(this.points[0].x,this.points[0].y,5,5);
     //console.log(`${p[0].x},${p[0].y}`);
     //console.log(`theta : ${p[0].theta}`);
     ctx.moveTo(this.points[0].x,this.points[0].y);
     ctx.lineTo(this.points[1].x,this.points[1].y);
     ctx.lineTo(this.points[2].x,this.points[2].y);
     ctx.lineTo(this.points[3].x,this.points[3].y);
     ctx.lineTo(this.points[0].x,this.points[0].y);
     ctx.fill();
     ctx.stroke();
     ctx.closePath();

     ctx.beginPath();
     ctx.strokeStyle = 'red';
     ctx.moveTo(this.points[4].x,this.points[4].y);
     ctx.lineTo(this.points[5].x,this.points[5].y);
     ctx.stroke();
     ctx.closePath();
     
   }
}