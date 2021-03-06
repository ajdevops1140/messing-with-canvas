import { Component, OnInit, ViewChild, Input,ElementRef,AfterViewInit} from '@angular/core';
import { Basic } from '../util/Basic';
import { CanvasHandler } from './canvasHandler';

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
  cvh:CanvasHandler;  
  b:Basic;

  constructor(){}

  ngOnInit() { 
  
  }  

  ngAfterViewInit(){
    this.ctx = this.cv.nativeElement.getContext('2d'); 
    this.cvh = new CanvasHandler(this.ctx);    
    this.b = new Basic(this.ctx);
    this.animate();
  }

  animate()
  {
    //this.ctx.clearRect(0,0,this.cvWidth,this.cvHeight);    
    this.ctx.save();    
    this.b.setPos(20,20);
    this.b.setSpeed(1,0.1);
    this.b.adjustRot(90);
    this.b.color ='green';
    this.draw();    
  }

  draw()
  {
    this.ctx.clearRect(0,0,this.cvWidth,this.cvHeight);   
    this.ctx.save();
    this.b.draw();
    

    this.b.checkXBounds(this.cvWidth,this.cvHeight)
    
    

    this.b.adjustPos();
    this.b.adjustRot(1);
    this.ctx.restore();
    window.requestAnimationFrame(()=>{this.draw()});
  }

}

/*
if(this.b.inXBounds && this.b.adjustX)
    {
      this.b.adjustAcceleration(0.2,0.1);
      this.b.addAccelerationToSpeed();
      this.b.adjustX = false;      
    }
    

    if(this.b.inYBounds && this.b.adjustY)
    {
      //this.b.adjustAcceleration(0.5,0.5);
      //this.b.addAccelerationToSpeed();
    }

*/