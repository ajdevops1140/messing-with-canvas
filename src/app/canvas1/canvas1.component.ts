import { Component, OnInit, ViewChild, Input,ElementRef,AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-canvas1',
  templateUrl: './canvas1.component.html',
  styleUrls: ['./canvas1.component.css']
})
export class Canvas1Component implements OnInit {

  cvWidth:number = 300;
  cvHeight:number = 300;
  @ViewChild('cv',{static:true}) cv:ElementRef;
  ctx:CanvasRenderingContext2D;

  constructor(){}

  ngOnInit() {
    
  }

  ngAfterViewInit()
  {
    this.ctx = this.cv.nativeElement.getContext('2d');    
    this.draw();
  }

  draw()
  {
    //this.ctx.clearRect(0,0,this.cvWidth,this.cvHeight);
    this.ctx.beginPath();
    //this.ctx.moveTo(50,50);
    this.ctx.arc(50,50,20,0,2 * Math.PI,true);
    this.ctx.stroke();
    
  }

}