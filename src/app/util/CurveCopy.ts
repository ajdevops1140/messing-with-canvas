import { P2v } from "./P2DCopy";

//(1-t)^3(P0) + 3t(1-t)^2(P1)+3t^2(1-t)(P2)+t^3(P3)
export class Curve {

  p0:P2v;
  p1:P2v;
  p2:P2v;
  p3:P2v;
  p:P2v[];
  steps:number;
  tDiv:number;
  originX:number;
  originY:number;
  tX:number;
  tY:number;
  rot:number;
  points:P2v[];
  displaced:P2v[];

  constructor(x0 = 0,y0 = 0,x1 = 0,y1 = 0,x2 = 0,y2 = 0,x3 = 0,y3 = 0,/*p0 , p1 , p2 , p3,*/originX = 0, originY = 0) 
  {
    this.originX = originX;
    this.originY = originY;    
    this.tX = this.tY = this.rot = 0;
    this.p = new Array();
    this.setPoints(x0,y0,x1,y1,x2,y2,x3,y3);
  }

  setPoints(x0,y0,x1,y1,x2,y2,x3,y3)
  {
    this.p[0] = new P2v(this.originX,this.originY);
    this.p[1] = new P2v(this.originX,this.originY);
    this.p[2] = new P2v(this.originX,this.originY);
    this.p[3] = new P2v(this.originX,this.originY); 
    this.p[0].setPoint(x0,y0);
    this.p[1].setPoint(x1,y1);
    this.p[2].setPoint(x2,y2);
    this.p[3].setPoint(x3,y3);
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

  setDisplacements(points,scale = 1)
  {
    let dis = new Array();
    if(points != undefined)
    {
      for(let i =1;i < points.length;i++)
      {         
         let p = points[i].getDisplacement(points[i-1]);
         p.x *= scale;
         p.y *= scale;
         //console.log(`Displaced: ${p.x},${p.y}`);
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
    let p = this.p[0].copy();
    let c0 = (1 - t) * (1 - t) * (1 - t);
    let c1 = (3 * t) * ((1-t) * (1-t));
    let c2 = (3* (1-t)) * (t * t);
    let c3 = t * t * t;
  
    p.x = (c0 * this.p[0].x) + (c1 * this.p[1].x) + (c2 * this.p[2].x) + (c3 * this.p[3].x);
    p.y = (c0 * this.p[0].y) + (c1 * this.p[1].y) + (c2 * this.p[2].y) + (c3 * this.p[3].y);

    //console.log(`Interpolated: ${p.oX},${p.oY}`);

    return p;
  }

  interpolateTangent(t)
  {
    let p = this.p[0].copy();
    let c0 = ((1 - t) * (1 - t)) * -3;
    let c1 = 3 * ((1-t) * (1-t));
    let c2 = (6 * t) * (1-t);
    let c3 = 3 * (t * t);
    
    p.x = (c0 * this.p[0].x) + (c1 * this.p[1].x) - (c2 * this.p[1].x) - (c3 * this.p[2].x) + (c2 * this.p[2].x) + (c3 * this.p[3].x);
    p.y = (c0 * this.p[0].y) + (c1 * this.p[1].y) - (c2 * this.p[1].y) - (c3 * this.p[2].y) + (c2 * this.p[2].y) + (c3 * this.p[3].y);

    return p;
  }

  createPoints()
  {
    let points = new Array();
    for(let i = 0;i < this.steps +1; i++)
    {
      points.push(this.interpolate(i * this.tDiv));  
      //console.log(`Created: ${points[i].x},${points[i].y}`);
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
    let scale = 8;
    let points = this.createPoints();
    points = this.setFromOriginNoTrans(points);

    let dis = this.setDisplacements(points,scale);
    dis = this.setFromOriginNoTrans(dis);
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
       ctx.lineTo(dis[i].x,dis[i].y);
       //console.log(`displaced Draw: ${dis[i].x},${dis[i].y}`);    
       ctx.stroke();   
    }
    
  }

  drawPoints(ctx:CanvasRenderingContext2D)
  {
     let p = this.setFromOrigin(this.p);
     let pSize = 9;
     let adjust = Math.ceil(pSize/2);

     ctx.beginPath();
     ctx.strokeStyle = 'red';
     ctx.moveTo(p[0].x,p[0].y);
     ctx.lineTo(p[1].x,p[1].y);
     ctx.moveTo(p[3].x,p[3].y);
     ctx.lineTo(p[2].x,p[2].y);
     ctx.stroke();

     ctx.fillStyle = 'green';
     ctx.moveTo(p[1].x ,p[1].y );
     ctx.fillRect(p[1].x - adjust,p[1].y - adjust,pSize,pSize);   
     ctx.fillStyle = 'blue';  
     ctx.moveTo(p[2].x ,p[2].y );     
     ctx.fillRect(p[2].x - adjust,p[2].y - adjust,pSize,pSize);

     
  }

  drawFromSteps(ctx:CanvasRenderingContext2D)
  {
    let points = this.createPoints();// = this.translate(this.tX,this.tY,this.points);
    points = this.setFromOrigin(points);
    this.drawPoints(ctx);

    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.moveTo(points[0].x,points[0].y);
    //console.log(`x: ${points[0].x},y: ${points[0].y}`);
    for(let i = 1;i < points.length; i++)
    {
      ctx.lineTo(points[i].x, points[i].y);
      //console.log(`x: ${points[i].x},y: ${points[i].y}`);
    }
    ctx.stroke();
  }

}
