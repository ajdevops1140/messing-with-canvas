import { Component, OnInit,ViewChild, Input,ElementRef,AfterViewInit } from '@angular/core';
import { Basic } from '../util/Basic';
import { P2D } from '../util/P2D';
import { CanvasHandlerService } from '../util/canvas-handler.service';

@Component({
  selector: 'app-interpolate2-points',
  templateUrl: './interpolate2-points.component.html',
  styleUrls: ['./interpolate2-points.component.css']
})
export class Interpolate2PointsComponent implements OnInit {
  cvWidth:number = 500;
  cvHeight:number = 100;
  @ViewChild('cv',{static:true}) cv:ElementRef;
  ctx:CanvasRenderingContext2D;
  wRight:number;
  wLeft:number;
  hUp:number;
  hDown:number;

  constructor(private chs:CanvasHandlerService) { }

  ngOnInit() {
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
    this.chs.setParameters(this.cv,this.wRight,this.hDown);    
  }

  BeginDraw(ctx:CanvasRenderingContext2D)
  {
    let h:CanvasHandlerService = this.chs;
    let p0 = new P2D(-150,0);
    let p1 = new P2D(150,0);
    let p2 = new P2D(-150,0);
    p2.color = 'red';
    


    ctx.save();  
    ctx.translate(this.wRight,this.hDown);
    ctx.restore();
  }

  drawInterpolation(ctx:CanvasRenderingContext2D)
  {

  }

}