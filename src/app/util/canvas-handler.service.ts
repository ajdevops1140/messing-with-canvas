import { Injectable,ElementRef } from '@angular/core';
import { P2D } from './P2D';

@Injectable()
export class CanvasHandlerService {

  private ctx:CanvasRenderingContext2D;

  drawArray:any;

  constructor()
  {
    this.drawArray = new Array();
  }

  setContext(canvas:ElementRef<HTMLCanvasElement>)
  {
    this.ctx = canvas.nativeElement.getContext('2d');
  }

  addPoint(p:P2D)
  {
    this.drawArray.push(p);
  }

  removePoint(index:number)
  {
    this.drawArray.splice(index,1);
  }

  drawPoints(ctx:CanvasRenderingContext2D, index:number)
  {
    let p2d = this.drawArray[index];
    this.ctx.save();
    this.ctx.translate(this.x,this.y);
    this.ctx.rotate(this.r);
    this.ctx.scale(this.sx, this.sy);
    
    this.ctx.fillStyle = this.color;

    this.ctx.beginPath();  
    this.ctx.moveTo(-0,-30);
    this.ctx.lineTo(-17,-10);
    this.ctx.arc(0,0,20,-5* Math.PI/6,-1 *Math.PI/6,true);     
    this.ctx.moveTo(17,-10);
    this.ctx.lineTo(-0,-30);
    this.ctx.fill();
    this.ctx.stroke();
    this.ctx.restore();
  }

}