import { Injectable,ElementRef } from '@angular/core';
import { P2D } from './P2D';

@Injectable()
export class CanvasHandlerService {

  private ctx:CanvasRenderingContext2D;

  drawArray:P2D[];
  width:number;
  height:number;
  prevTime:number;
  currTime:number;
  timeDiff:number;
  timeDelay:number;

  constructor()
  {
    this.drawArray = new Array();
  }

  setParameters(canvas:ElementRef<HTMLCanvasElement>,width:number,height:number)
  {
    this.ctx = canvas.nativeElement.getContext('2d');
    console.log(this.ctx);
    this.width = width;
    this.height = height;
  }

  addPoint(p:P2D)
  {
    console.log(p);
    this.drawArray.push(p);
  }

  removePoint(index:number)
  {
    this.drawArray.splice(index,1);
  }

  getPoint(index:number)
  {
    return this.drawArray[index];
  }

  rotatePoint(deg:number,index:number)
  {
    //console.log("Rotate");
    this.drawArray[index].rot = deg;
  }

  drawSinglePoint(index:number)
  {
    let p2d = this.getPoint(index);
    this.ctx.save();
    this.ctx.translate(this.width,this.height);
    this.ctx.beginPath();
    this.ctx.arc(p2d.x ,p2d.y ,5,0,2 * Math.PI);
    this.ctx.fillStyle = p2d.color;
    this.ctx.fill()
    this.ctx.restore();
    this.ctx.closePath();
  }

  drawLineBetweenPoints(i1,i2)
  {
    let p1 = this.getPoint(i1);
    let p2 = this.getPoint(i2);
    this.ctx.save();
    this.ctx.translate(this.width,this.height);
    this.ctx.beginPath();
    this.ctx.moveTo(p1.x,p1.y);
    this.ctx.lineTo(p2.x,p2.y);
    this.ctx.stroke();
    this.ctx.restore();
  }

  drawPoint(ctx:CanvasRenderingContext2D, index:number)
  {
    let p2d:P2D = this.drawArray[index];
    this.ctx.save();
    this.ctx.fillStyle = 'red';
    this.ctx.translate(this.width,this.height);
    //this.ctx.translate(p2d.x,p2d.y);
    if(!p2d.animate && p2d.toRotate)
    {
      p2d.rotate(p2d.rot);
      this.getPoint(index).toRotate = false;
    }else if(p2d.animate)
    {
      p2d.rotate(p2d.rot);
    }    
    
    this.ctx.beginPath();
    this.ctx.fillText(`${index + 1}:(${Math.floor(p2d.x)},${Math.floor(p2d.y)})`,p2d.x + 10,p2d.y);
    this.ctx.fillStyle = 'blue';
    this.ctx.arc(p2d.x ,p2d.y ,5,0,2 * Math.PI);  
    this.ctx.fill();
    this.ctx.moveTo(0,0);
    this.ctx.lineTo(p2d.x,p2d.y); 
    this.ctx.stroke(); 
    this.ctx.restore();
  }

  drawPoints()
  {     
    for(let i = 0; i < this.drawArray.length;i++)
    {
      //console.log(`${this.ctx},${i}`);
      this.drawPoint(this.ctx,i);
    }
  }




}