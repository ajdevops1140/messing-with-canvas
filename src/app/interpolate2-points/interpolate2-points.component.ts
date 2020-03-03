import {
  Component,
  OnInit,
  ViewChild,
  Input,
  ElementRef,
  AfterViewInit
} from "@angular/core";
import { Basic } from "../util/Basic";
import { P2D } from "../util/P2D";
import { CanvasHandlerService } from "../util/canvas-handler.service";
import { Arrow } from '../Objects/arrow';

@Component({
  selector: "app-interpolate2-points",
  templateUrl: "./interpolate2-points.component.html",
  styleUrls: ["./interpolate2-points.component.css"]
})
export class Interpolate2PointsComponent implements OnInit {
  cvWidth: number = 500;
  cvHeight: number = 400;
  @ViewChild("cv", { static: true }) cv: ElementRef;
  ctx: CanvasRenderingContext2D;
  wRight: number;
  wLeft: number;
  hUp: number;
  hDown: number;
  t:number = 0;
  speed:number = 0.25;
  tSpeed:number = 1/60 * this.speed;
  interPoint:P2D;
  arr1:Arrow;

  constructor(private chs: CanvasHandlerService) {}

  ngOnInit() {
    this.ctx = this.cv.nativeElement.getContext("2d");
    let w = this.cvWidth / 2;
    let h = this.cvHeight / 2;
    this.wRight = w;
    this.wLeft = -w;
    this.hUp = -h;
    this.hDown = h;
    this.interPoint = new P2D();
  }

  ngAfterViewInit() {
    this.chs.setParameters(this.cv, this.wRight, this.hDown);
    //this.BeginDraw(this.ctx);
  }

  BeginDraw(ctx: CanvasRenderingContext2D) {
    let h: CanvasHandlerService = this.chs;
    let p0 = new P2D(150, 0);
    let p1 = new P2D(-150, 160);
    let p2 = new P2D(-150, 0);
    p2.color = "red";
    h.addPoint(p0);
    h.addPoint(p1);
    h.addPoint(p2);
    
    this.drawInterpolation(ctx);
  }

  drawInterpolation(ctx: CanvasRenderingContext2D) 
  {
    ctx.clearRect(0,0,this.cvWidth,this.cvHeight);
    let h:CanvasHandlerService = this.chs;
    h.drawLineBetweenPoints(0,1);
    h.drawSinglePoint(0);
    h.drawSinglePoint(1);
    h.drawSinglePoint(2);
    
    let p0 = h.getPoint(0);
    let p1 = h.getPoint(1);
    let p2 = h.getPoint(2);
    this.interPoint = p2.linearInterpolate(p0,p1,this.t);

    this.t = (this.t + this.tSpeed);
    
    if(this.t < 0)
    {
      this.t = 0;
      this.tSpeed *= -1;
    }
    else if(this.t > 1)
    {
      this.t = 1;
      this.tSpeed *= -1;
    }
    window.requestAnimationFrame(()=>this.drawInterpolation(ctx));
  }

  BeginArrowDraw(ctx: CanvasRenderingContext2D)
  {
    this.arr1 = new Arrow(this.cvWidth,this.cvHeight);

  }

  drawArrow(ctx: CanvasRenderingContext2D){
    ctx.clearRect(0,0,this.cvWidth,this.cvHeight);
  
  }
}
