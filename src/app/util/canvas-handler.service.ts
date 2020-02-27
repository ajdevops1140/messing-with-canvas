import { Injectable,ElementRef } from '@angular/core';
import { P2D } from './P2D';

@Injectable()
export class CanvasHandlerService {

  private ctx:CanvasRenderingContext2D;

  drawArray:any;
  width:number;
  height:number;

  constructor()
  {
    this.drawArray = new Array();
  }

  setParameters(canvas:ElementRef<HTMLCanvasElement>,width:number,height:number)
  {
    this.ctx = canvas.nativeElement.getContext('2d');
    this.width = width;
    this.height = height;
  }

  addPoint(p:P2D)
  {
    this.drawArray.push(p);
  }

  removePoint(index:number)
  {
    this.drawArray.splice(index,1);
  }

  drawPoint(ctx:CanvasRenderingContext2D, index:number)
  {
    let p2d:P2D = this.drawArray[index];
    this.ctx.save();
    this.ctx.fillStyle = 'red';
    this.ctx.translate(this.width,this.height);
    this.ctx.fillText(`${index}:(${p2d.x}),(${p2d.y})`,p2d.x + 5,p2d.y + 5);
    this.ctx.fillStyle = 'blue';
    this.ctx.arc(p2d.x,p2d.y,5,0,2 * Math.PI);  
    this.ctx.moveTo(0,0);
    this.ctx.lineTo(p2d.x,p2d.y);  
    this.ctx.restore();
  }

  drawPoints()
  {
    for(let i = 0; i < this.drawArray;i++)
    {
      this.drawPoint(this.ctx,i);
    }
  }

}