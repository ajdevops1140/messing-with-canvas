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
  cvWidth: number = 300;
  cvHeight: number = 300;
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
  w;
  h;
  x1;y1;
  x;
  y;

  constructor(private chs: CanvasHandlerService) {}

  ngOnInit() {
    this.ctx = this.cv.nativeElement.getContext("2d");
    this.w = this.cvWidth / 2;
    this.h = this.cvHeight / 2;
    this.wRight = this.w;
    this.wLeft = -this.w;
    this.hUp = -this.h;
    this.hDown = this.h;
    this.interPoint = new P2D(0,0);
    this.x1 = 0;
    this.y1 = 0;
    this.x = 150;
    this.y = 150;
  }

  ngAfterViewInit() {
    this.chs.setParameters(this.cv, this.wRight, this.hDown);
    //this.BeginDraw(this.ctx);
    this.BeginArrowDraw(this.ctx);
    let w = this.w;
    let h = this.h;
    let s = 0;
    
    //this.Draw(this.ctx);
  }

  Draw(ctx: CanvasRenderingContext2D)
  {
    ctx.clearRect(0,0,this.cvWidth,this.cvHeight);
    ctx.beginPath();
    ctx.moveTo(150,0);
    ctx.lineTo(150,300);
    ctx.moveTo(0,150);
    ctx.lineTo(300,150);
    ctx.stroke();

  
    ctx.fillText(`(${this.x - 150},${150 - this.y})`,this.x + 5,this.y - 5);
    ctx.fillStyle = 'red';
    ctx.fillRect(this.x -5,this.y-5,9,9);  

    window.requestAnimationFrame(()=>this.Draw(this.ctx));
  }

  modify(x,y)
  {
    this.x += x;
    this.y += y;    
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
    //this.interPoint = p2.linearInterpolate(p0,p1,this.t);

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
    this.arr1 = new Arrow(this.wRight, this.hDown);
    this.drawArrow(this.ctx);
  }

  drawArrow(ctx: CanvasRenderingContext2D){
    ctx.clearRect(0,0,this.cvWidth,this.cvHeight);
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(this.wRight,0);
    ctx.lineTo(this.wRight,this.cvHeight);
    ctx.strokeStyle = 'green';
    ctx.stroke();
    ctx.closePath();
    ctx.restore();

    ctx.save();
    ctx.beginPath();
    ctx.moveTo(0,this.hDown);
    ctx.lineTo(this.cvWidth,this.hDown);
    ctx.strokeStyle = 'grey';
    ctx.stroke();
    ctx.closePath();
    ctx.restore();

    this.arr1.draw(ctx);
    this.arr1.rotation = -1;
    this.arr1.shiftX = 0.1;
    this.arr1.shiftY = -0;

    window.requestAnimationFrame(()=>this.drawArrow(ctx));
  }
}
