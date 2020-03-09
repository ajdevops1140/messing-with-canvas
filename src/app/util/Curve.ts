import { P2D } from "./P2D";

//(1-t)^3(P0) + 3t(1-t)^2(P1)+3t^2(1-t)(P2)+t^3(P3)
export class Curve {

  p0:P2D;
  p1:P2D;
  p2:P2D;
  p3:P2D;
  steps:number;
  tDiv:number;
  originX:number;
  originY:number;
  tX:number;
  tY:number;
  rot:number;
  points:P2D[];
  displaced:P2D[];

  constructor(x0,y0,x1,y1,x2,y2,x3,y3,/*p0 , p1 , p2 , p3,*/originX = 0, originY = 0) 
  {
    this.originX = originX;
    this.originY = originY;    
    this.tX = this.tY = this.rot = 0;
    this.setPoints(x0,y0,x1,y1,x2,y2,x3,y3);
  }

  setPoints(x0,y0,x1,y1,x2,y2,x3,y3)
  {
    this.p0 = new P2D();
    this.p1 = new P2D();
    this.p2 = new P2D();
    this.p3 = new P2D(); 
    this.p0.setPoint(x0,y0);
    this.p1.setPoint(x1,y1);
    this.p2.setPoint(x2,y2);
    this.p3.setPoint(x3,y2);
  }

  setDisplacements()
  {
    this.displaced = new Array();
    if(this.points != undefined)
    {
      for(let i =1;i < this.points.length;i++)
      {
         let p = this.points[i].
      }
    }
  }

  setSteps(steps)
  {
    this.steps = steps;
    this.tDiv = 1/steps;
  }

  interpolate(t)
  {
    let p = new P2D(this.originX, this.originY);
    let c0 = (1 - t) * (1 - t) * (1 - t);
    let c1 = (3 * t) * ((1-t) * (1-t));
    let c2 = ((3 * t) * (3 * t)) * (1-t);
    let c3 = t * t * t;
  
    p.oX = p.x = (c0 * this.p0.x) + (c1 * this.p1.x) + (c2 * this.p2.x) + (c3 * this.p3.x);
    p.oY = p.y = (c0 * this.p0.y) + (c1 * this.p1.y) + (c2 * this.p2.y) + (c3 * this.p3.y);

    //console.log(`x: ${p.x},y: ${p.y}`);

    return p;
  }

  createPoints()
  {
    let points = new Array();
    for(let i = 0;i < this.steps +1; i++)
    {
      points.push(this.interpolate(i * this.tDiv));  
    }
    return points;
  }

  rotate(deg:number,points)
  {
    for(let i =0;i < points.length; i++)
    {
      points[i].rotate(deg);
    }
    return points;
  } 

  translate(tX,tY,points)
  {
    for(let i =0;i < points.length; i++)
    {
      points[i].translate(tX,tY);
    }
    return points;
  }

  setFromOrigin(points)
  {
     for(let i = 0;i < points.length; i++)
    {
      points[i].setFromOrigin(this.originX, this.originY);      
    }
    return points;
  }

  setupPoints()
  {
    this.points = this.createPoints();
  }

  setValues(rot,tX,tY)
  {
    this.points = this.rotate(this.rot,this.points);
    this.points = this.translate(this.tX,this.tY,this.points);
    this.points = this.setFromOrigin(this.points);
  }

  drawFromSteps(ctx:CanvasRenderingContext2D)
  {
    ctx.beginPath();
    ctx.moveTo(this.points[0].x,this.points[0].y);
    console.log(`x: ${this.points[0].x},y: ${this.points[0].y}`);
    for(let i = 1;i < this.points.length; i++)
    {
      ctx.lineTo(this.points[i].x, this.points[i].y);
      console.log(`x: ${this.points[i].x},y: ${this.points[i].y}`);
    }
    ctx.stroke();
  }

}
