import { Component, OnInit,ViewChild, Input,ElementRef,AfterViewInit } from '@angular/core';
import { Basic } from '../util/Basic';
import { P2D } from '../util/P2D';
import { CanvasHandlerService } from '../util/canvas-handler.service';

@Component({
  selector: 'app-math2-d',
  templateUrl: './math2-d.component.html',
  styleUrls: ['./math2-d.component.css']
})
export class Math2DComponent implements OnInit {

  cvWidth:number = 300;
  cvHeight:number = 300;
  @ViewChild('cv',{static:true}) cv:ElementRef;
  ctx:CanvasRenderingContext2D;
  wRight:number;
  wLeft:number;
  hUp:number;
  hDown:number;

  constructor(private chs:CanvasHandlerService) { }

  ngOnInit() 
  {
    this.ctx = this.cv.nativeElement.getContext('2d'); 
    let w = this.cvWidth/2;
    let h = this.cvHeight/2;
    this.wRight = w;
    this.wLeft = -w;
    this.hUp = -h;
    this.hDown = h;
  }

  ngAfterViewInit()
  {
    this.BeginDraw(this.ctx);
  }

  drawGraph(ctx:CanvasRenderingContext2D)
  {
    ctx.strokeStyle = 'green';

    ctx.save();  
    ctx.translate(this.wRight,this.hDown);
    ctx.beginPath();    
    ctx.moveTo(0,this.hUp);
    ctx.lineTo(0,this.hDown);
    ctx.moveTo(this.wLeft,0);
    ctx.lineTo(this.wRight,0);
    ctx.stroke();
    ctx.restore();
  }

 

  BeginDraw(ctx:CanvasRenderingContext2D)
  {
    this.ctx.clearRect(0,0,this.cvWidth,this.cvHeight);
    let p1 = new P2D(30,0);
    let p2 = new P2D(30,0);
    p2.rotate(45);
    this.chs.addPoint(p1);
    this.chs.addPoint(p2);
    this.draw();
  }

  draw()
  {
    this.ctx.clearRect(0,0,this.cvWidth,this.cvHeight);
    this.drawGraph(this.ctx);
    window.requestAnimationFrame(()=>{this.draw});
  }

}