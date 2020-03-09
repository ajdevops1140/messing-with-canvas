import {
  Component,
  OnInit,
  ViewChild,
  Input,
  ElementRef,
  AfterViewInit
} from "@angular/core";
import { P2D } from "../util/P2D";
import { Curve } from "../util/Curve";

@Component({
  selector: 'app-bezier',
  templateUrl: './bezier.component.html',
  styleUrls: ['./bezier.component.css']
})
export class BezierComponent implements OnInit {
  cvWidth: number = 300;
  cvHeight: number = 300;
  @ViewChild("cv", { static: true }) cv: ElementRef;
  ctx: CanvasRenderingContext2D;
  c:Curve;
  w:number;
  h:number;

  constructor() { }

  ngOnInit() {
     this.ctx = this.cv.nativeElement.getContext('2d'); 
     this.w = this.cvWidth/2 - 50;
     this.h = this.cvHeight/2 + 50;
  }

  ngAfterViewInit()
  {    
    let p0 = new P2D(this.w,this.h,0,0);
    let p1 = new P2D(this.w,this.h,0,-50);
    let p2 = new P2D(this.w,this.h,40,-20);
    let p3 = new P2D(this.w,this.h,120,0);
    this.c = new Curve(p0,p1,p2,p3,this.w,this.h);
    this.c.setSteps(10);
    this.c.setupPoints();
    this.c.rot += 0.1;
    this.c.tX += 0.1;
    
    this.draw(this.ctx);
  }

  draw(ctx:CanvasRenderingContext2D)
  {
    ctx.clearRect(0,0,this.cvWidth,this.cvHeight);
    this.c.drawFromSteps(this.ctx);
    this.c.rot += 0.5;
    this.c.tX += 0.1;
    //window.requestAnimationFrame(()=>{this.draw(ctx)});
  }

}