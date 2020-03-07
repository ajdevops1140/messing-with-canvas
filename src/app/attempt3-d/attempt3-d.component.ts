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
  
  VSHADER_SOURCE = `void main(){
    gl_Position = vec4(0.0,0.0,0.0,1.0);
    gl_PointSize = 10.0;
  }`;

  FSHADER_SOURCE = `void main(){
    gl_FragColor = vec4(1.0,0.0,0.0,1.0);
  }`;

  

  constructor() { }

  ngOnInit() {
    this.gl = this.cv.nativeElement.getContext('webgl');
    console.log(this.VSHADER_SOURCE);
  }

  ngAfterViewInit() {
    this.Draw(this.gl);
  }

  Draw(gl: WebGLRenderingContext)
  {
    gl.clearColor(0.0,0.0,0.0,1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    
  }

  initShaders(gl,vshader,fshader)
  {
    let program = this.createProgram(gl,vshader,fshader);
  }

  createProgram(gl,vshader, fshader)
  {
    let vertexShader = loadShader(gl, gl.VERTEX_SHADER, vshader);
  }

  loadShader(gl, type, source)
  {
    let shader = gl.createShader(type);     //Create the type of shader - VERTEX
    if(shader == null)
    {
      console.log("unable to create shader");
      return null;
    }


  }

}