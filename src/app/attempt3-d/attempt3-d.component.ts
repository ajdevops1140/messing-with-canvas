import {
  Component,
  OnInit,
  ViewChild,
  Input,
  ElementRef,
  AfterViewInit
} from "@angular/core";
import { box3D } from '../Objects/box3D';
import { vec4,vec3 } from '../util/vector';
import { mat4 } from '../util/mat4';

@Component({
  selector: 'app-attempt3-d',
  templateUrl: './attempt3-d.component.html',
  styleUrls: ['./attempt3-d.component.css']
})
export class Attempt3DComponent implements OnInit {

  cvWidth: number = 300;
  cvHeight: number = 300;
  @ViewChild("cv", { static: true }) cv: ElementRef;
  ctx: CanvasRenderingContext2D;
  wRight: number;
  wLeft: number;
  hUp: number;
  hDown: number;
  t: number = 0;
  rotation: number = 0;
  speed: number = 0.25;
  tSpeed: number = (1 / 60) * this.speed;
  w;
  h;
  box:box3D;

  constructor() { }

  ngOnInit() {
    this.ctx = this.cv.nativeElement.getContext("2d");
    this.w = this.cvWidth / 2;
    this.h = this.cvHeight / 2;
    this.wRight = this.w;
    this.wLeft = -this.w;
    this.hUp = -this.h;
    this.hDown = this.h;  
    this.box = new box3D();  
  }

  ngAfterViewInit() {
       
    

    //this.Draw(this.ctx);
  }

  Draw(ctx:CanvasRenderingContext2D)
  {
    ctx.clearRect(0,0,this.cvWidth,this.cvHeight);
    this.box.translate(this.wRight,this.hDown,0);


    window.requestAnimationFrame(()=>this.Draw(ctx));
  }

}