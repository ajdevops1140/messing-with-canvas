import {
  Component,
  OnInit,
  ViewChild,
  Input,
  ElementRef,
  AfterViewInit
} from "@angular/core";
import { P2v } from "../util/P2DCopy";
import { Curve } from "../util/CurveCopy";
import { Particle } from "../Objects/particle"

@Component({
  selector: 'app-bezier-copy',
  templateUrl: './bezier-copy.component.html',
  styleUrls: ['./bezier-copy.component.css']
})
export class BezierCopyComponent implements OnInit {
  cvWidth: number = 800;
  cvHeight: number = 800;
  @ViewChild("cv", { static: true }) cv: ElementRef;
  ctx: CanvasRenderingContext2D;
  c:Curve;
  w:number;
  h:number;
  part:Particle;

  constructor() { }

  ngOnInit() {
     this.ctx = this.cv.nativeElement.getContext('2d'); 
     this.w = this.cvWidth/2;
     this.h = this.cvHeight/2;
     this.part = new Particle(this.w,this.h);
  }

  ngAfterViewInit()
  {   
    this.c = new Curve(0,0,-30,100,210,80,200,0,this.w,this.h);
    this.c.setSteps(10);
    //this.c.setupPoints();   
    //this.c.setDisplacements();
    
    
    this.draw(this.ctx);
  }

  draw(ctx:CanvasRenderingContext2D)
  {
    ctx.clearRect(0,0,this.cvWidth,this.cvHeight);
    //this.c.drawDisplacement(this.ctx);   
    this.c.tX = 0; 
    this.c.drawFromSteps(this.ctx);
    this.c.rot += 0.0;
    this.c.tX += 0.0;
    //window.requestAnimationFrame(()=>{this.draw(ctx)});
  }

}