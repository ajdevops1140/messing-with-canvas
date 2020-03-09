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

  constructor(p0 , p1 , p2 , p3,originX = 0, originY = 0) 
  {
    this.originX = originX;
    this.originY = originY;
    this.setPoints(p0, p1, p2, p3);
  }

  setPoints(p0, p1, p2, p3)
  {
    this.p0 = p0;
    this.p1 = p1;
    this.p2 = p2;
    this.p3 = p3; 
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
  
    p.x = (c0 * this.p0.x) + (c1 * this.p1.x) + (c2 * this.p2.x) + (c3 * this.p3.x);
    p.y = (c0 * this.p0.y) + (c1 * this.p1.y) + (c2 * this.p2.y) + (c3 * this.p3.y);

    return p;
  }

  createPoints()
  {
    let points = new Array(this.steps);
    for(let i = 0;i < points.length; i++)
    {
      points[i] = this.interpolate(i * this.tDiv);      
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

  drawFromSteps(ctx:CanvasRenderingContext2D)
  {
    
    this.points = this.setFromOrigin(this.points);

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
