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
    let time = new Date();
    this.prevTime = this.currTime = time.getMilliseconds();
    this.ctx.save();    
    this.draw();    
  }

  speed:number = 100;
  deg:number = 0;
  rotate:number = 0;
  prevTime;
  currTime;

  draw()
  {
    this.ctx.clearRect(0,0,this.cvWidth,this.cvHeight);
    let time = new Date();
    this.currTime = time.getMilliseconds();
    let timeDiff = this.currTime - this.prevTime;
    this.ctx.save();
    this.ctx.translate(20,20);
    this.rotate = this.deg *(Math.PI/180);
    this.ctx.rotate(this.rotate);
    
    this.ctx.beginPath();
    this.ctx.moveTo(0,0);
    this.ctx.arc(0,0,20,0,2 * Math.PI,true);
    this.ctx.stroke();
    
    this.ctx.restore();
    this.deg += this.speed;//
    window.requestAnimationFrame(()=>{this.draw()});
  }

}