import { P2v } from "./P2DCopy";

//(1-t)^3(P0) + 3t(1-t)^2(P1)+3t^2(1-t)(P2)+t^3(P3)
export class Curve {

  p0:P2v;
  p1:P2v;
  p2:P2v;
  p3:P2v;
  steps:number;
  tDiv:number;
  originX:number;
  originY:number;
  tX:number;
  tY:number;
  rot:number;
  points:P2v[];
  displaced:P2v[];

  constructor(x0,y0,x1,y1,x2,y2,x3,y3,/*p0 , p1 , p2 , p3,*/originX = 0, originY = 0) 
  {
    this.originX = originX;
    this.originY = originY;    
    this.tX = this.tY = this.rot = 0;
    this.setPoints(x0,y0,x1,y1,x2,y2,x3,y3);
  }

  setPoints(x0,y0,x1,y1,x2,y2,x3,y3)
  {
    this.p0 = new P2v(this.originX,this.originY);
    this.p1 = new P2v(this.originX,this.originY);
    this.p2 = new P2v(this.originX,this.originY);
    this.p3 = new P2v(this.originX,this.originY); 
    this.p0.setPoint(x0,y0);
    this.p1.setPoint(x1,y1);
    this.p2.setPoint(x2,y2);
    this.p3.setPoint(x3,y3);
  }

  copyArr(arr)
  {
    let n = new Array();
    for(let i = 0; i < n.length;i++)
    {
      n.push(arr[i]);
    }
    return n;
  }

  setDisplacements(points)
  {
    let dis = new Array();
    if(points != undefined)
    {
      for(let i =1;i < points.length;i++)
      {         
         let p = points[i].getDisplacement(points[i-1]);
         console.log(`Displaced: ${p.x},${p.y}`);
         dis.push(p);
      }         
    }
    return dis;
  }

  setSteps(steps)
  {
    this.steps = steps;
    this.tDiv = 1/steps;
  }

  interpolate(t)
  {
    let p = this.p0.copy();
    let c0 = (1 - t) * (1 - t) * (1 - t);
    let c1 = (3 * t) * ((1-t) * (1-t));
    let c2 = ((3 * t) * (3 * t)) * (1-t);
    let c3 = t * t * t;
  
    p.x = (c0 * this.p0.x) + (c1 * this.p1.x) + (c2 * this.p2.x) + (c3 * this.p3.x);
    p.y = (c0 * this.p0.y) + (c1 * this.p1.y) + (c2 * this.p2.y) + (c3 * this.p3.y);

    //console.log(`Interpolated: ${p.oX},${p.oY}`);

    return p;
  }

  createPoints()
  {
    let points = new Array();
    for(let i = 0;i < this.steps +1; i++)
    {
      points.push(this.interpolate(i * this.tDiv));  
      console.log(`Created: ${points[i].oX},${points[i].oY}`);
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
    let p = new Array();
    for(let i = 0;i < points.length; i++)
    {
      let p0;
      p0 = points[i].setFromOrigin(this.originX, this.originY);
      p.push(p0);      
    }
    return p;
  }

  setFromOriginNoTrans(points)
  {
    let p = new Array();
    for(let i = 0;i < points.length; i++)
    {
      let p0;
      p0 = points[i].setFromOriginNoTrans(this.originX, this.originY);
      p.push(p0);      
    }
    return p;
  }

  setupPoints()
  {
    this.points = this.createPoints();
  }

  setValues(rot,tX,tY)
  {
    this.points = this.rotate(this.rot,this.points);
    this.points = this.translate(this.tX,this.tY,this.points);
    
  }

  drawDisplacement(ctx:CanvasRenderingContext2D)
  {
    let points = this.setFromOriginNoTrans(this.points);
    let dis = this.setFromOriginNoTrans(this.displaced);
    let oX = this.originX;
    let oY = this.originY;
    ctx.beginPath(); 
    let r = 0;
    let g = 0;
    let b = 0;   
    for(let i = 0; i < dis.length ;i++)
    {
       r = (Math.random() * 100000) % 255;
       g = (Math.random() * 100000) % 255;
       b = (Math.random() * 100000) % 255;
       ctx.strokeStyle = `rgb(${r},${g},${b})`;
       ctx.moveTo(oX,oY);
       ctx.lineTo(dis[i].x, dis[i].y);
       console.log(`displaced Draw: ${points[i].x},${points[i].y}`);    
       ctx.stroke();   
    }
    
  }

  drawPoints(ctx:CanvasRenderingContext2D)
  {
    
  }

  drawFromSteps(ctx:CanvasRenderingContext2D)
  {
    let points = this.translate(this.tX,this.tY,this.points);
    points = this.setFromOrigin(points);
    
    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.moveTo(points[0].x,points[0].y);
    console.log(`x: ${points[0].x},y: ${points[0].y}`);
    for(let i = 1;i < points.length; i++)
    {
      ctx.lineTo(points[i].x, points[i].y);
      console.log(`x: ${points[i].x},y: ${points[i].y}`);
    }
    ctx.stroke();
  }

}
