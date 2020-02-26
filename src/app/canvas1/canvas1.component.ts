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
    this.ctx = this.cv.nativeElement.getContext('2d');    
    this.animate();
  }

  ngAfterViewInit()
  {
    
  }

  animate()
  {
    //this.ctx.clearRect(0,0,this.cvWidth,this.cvHeight);
    this.ctx.save();    
    this.draw();    
  }

  deg;number = 2;
  rotate:number = 0;

  draw()
  {
    this.ctx.clearRect(0,0,this.cvWidth,this.cvHeight);
    let time = new Date();
    this.ctx.save();
    this.ctx.translate(20,20);
    this.rotate = time.getMilliseconds() * (Math.PI/180);
    this.ctx.rotate(this.rotate);
    
    this.ctx.beginPath();
    this.ctx.moveTo(0,0);
    this.ctx.arc(0,0,20,0,2 * Math.PI,true);
    this.ctx.stroke();
    
    this.ctx.restore();
    this.deg += 50;
    window.requestAnimationFrame(()=>{this.draw()});
  }

}