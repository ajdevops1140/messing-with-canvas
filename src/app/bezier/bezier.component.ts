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
    this.c = new Curve(0,0,0,-50,40,-20,120,0,this.w,this.h);
    this.c.setSteps(10);
    this.c.setupPoints();    
    
    this.draw(this.ctx);
  }

  draw(ctx:CanvasRenderingContext2D)
  {
    ctx.clearRect(0,0,this.cvWidth,this.cvHeight);
    this.c.drawFromSteps(this.ctx);
    this.c.rot += 0.0;
    this.c.tX += 0.0;
    //window.requestAnimationFrame(()=>{this.draw(ctx)});
  }

}