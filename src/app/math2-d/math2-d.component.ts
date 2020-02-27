import { Component, OnInit,ViewChild, Input,ElementRef,AfterViewInit } from '@angular/core';
import { Basic } from '../util/Basic';
import { P2D } from '../util/P2D';

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

  constructor() { }

  ngOnInit() 
  {
    this.ctx = this.cv.nativeElement.getContext('2d'); 
  }

  ngAfterViewInit()
  {
    this.BeginDraw(this.ctx);
  }

  drawGraph(ctx:CanvasRenderingContext2D,width:number,height:number)
  {
    let w = width/2;
    let h = height/2;
    let wRight = w;
    let wLeft = -w;
    let hUp = -h;
    let hDown = h;

    ctx.save();    
    ctx.beginPath();    
    ctx.moveTo(0,hUp);
    ctx.lineTo(0,hDown);
    ctx.moveTo(wLeft,0);
    ctx.lineTo(wRight,0);

  }

  BeginDraw(ctx:CanvasRenderingContext2D)
  {
    this.ctx.clearRect(0,0,this.cvWidth,this.cvHeight);
    this.drawGraph(ctx,this.cvWidth,this.cvHeight);

  }

}