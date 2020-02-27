import { Injectable,ElementRef } from '@angular/core';
import { P2D } from './P2D';

@Injectable()
export class CanvasHandlerService {

  private ctx:CanvasRenderingContext2D;

  drawArray:any[];

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
    
  }
}