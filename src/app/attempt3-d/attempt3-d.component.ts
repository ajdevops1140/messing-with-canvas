import {
  Component,
  OnInit,
  ViewChild,
  Input,
  ElementRef,
  AfterViewInit
} from "@angular/core";


@Component({
  selector: 'app-attempt3-d',
  templateUrl: './attempt3-d.component.html',
  styleUrls: ['./attempt3-d.component.css']
})
export class Attempt3DComponent implements OnInit {

  cvWidth: number = 300;
  cvHeight: number = 300;
  @ViewChild("cv", { static: true }) cv: ElementRef;
  gl: WebGLRenderingContext;
  

  constructor() { }

  ngOnInit() {
  
  }

  ngAfterViewInit() {

  }

  Draw(gl: WebGLRenderingContext)
  {
    
    
  }

}