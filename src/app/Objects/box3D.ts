import { vec4, vec3 } from "../util/vector";
import { mat4 } from "../util/mat4";

export class box3D {
  points: vec4[];
  rotation:number;
  rot;
  fovX;
  fovY;
  f;
  n;
  axis;
  tX;
  tY;
  tZ;
  oX;
  oY;


  constructor() {
    this.tX = 0;
    this.tY = 0;
    this.tZ = 0;
    this.oX = 0;
    this.oY = 0;
    this.axis = '';
    this.rotation = 0;
    this.rot = 0;
    this.f = 0;
    this.n = 0;
    this.fovY = this.fovX = (75 * Math.PI)/180;
    this.setPoints();
  }

  setPoints() {
    this.points = new Array(8);
    for (let i = 0; i < 8; i++) {
      this.points[i] = new vec4();
    }
    this.points[0].setPoint(-30, 30, -30);
    this.points[1].setPoint(-30, -30, -30);
    this.points[2].setPoint(30, -30, -30);
    this.points[3].setPoint(30, 30, -30);
    this.points[4].setPoint(-30, 30, 30);
    this.points[5].setPoint(-30, -30, 30);
    this.points[6].setPoint(30, -30, 30);
    this.points[7].setPoint(30, 30, 30);
  }

  translate(tX, tY, tZ) {
    let m = new mat4(); //This will construct identity
    m.translation(tX, tY, tZ); //Construct the translation matrix
    for (let i = 0; i < 8; i++) {
      let p = this.points[i];
      this.points[i] = m.multVec(p);
    }
  }

  rotate(axis, rad) {
    this.rotation += rad;
    let m = new mat4();
    m.rotate(axis, this.rotation);
    for (let i = 0; i < this.points.length; i++) {
      let p = this.points[i];
      this.points[i] = m.multVec(p);
    }
  }

  perspective(fovX, fovY, f, n) {
    let m = new mat4();
    m.perspective(fovX, fovY, f, n);
    for (let i = 0; i < this.points.length; i++) {
      let p = this.points[i];
      this.points[i] = m.multVec(p);
    }
  }

  clip4()
  {
    for (let i = 0; i < this.points.length; i++) {
      this.points[i].clip4();
    }
  }

  clip3()
  {
    for (let i = 0; i < this.points.length; i++) {
      this.points[i].clip3();
    }
  }


  draw(ctx: CanvasRenderingContext2D) {

    this.setPoints();
    //this.rotate(this.axis,this.rot);
    this.translate(this.tX, this.tY, this.tZ);
    //this.fovX = this.fovY = (75 * Math.PI)/180;
    this.perspective(this.fovX, this.fovY,this.f, this.n);
    this.clip4();
    this.clip3();

    ctx.beginPath();
    ctx.moveTo(this.points[0].x, this.points[0].y);
    ctx.lineTo(this.points[1].x, this.points[1].y);
    ctx.lineTo(this.points[2].x, this.points[2].y);
    ctx.lineTo(this.points[3].x, this.points[3].y);
    ctx.lineTo(this.points[0].x, this.points[0].y);

    ctx.moveTo(this.points[4].x, this.points[4].y);
    ctx.lineTo(this.points[5].x, this.points[5].y);
    ctx.lineTo(this.points[6].x, this.points[6].y);
    ctx.lineTo(this.points[7].x, this.points[7].y);
    ctx.lineTo(this.points[4].x, this.points[4].y);

    ctx.moveTo(this.points[0].x, this.points[0].y);
    ctx.lineTo(this.points[4].x, this.points[4].y);
    ctx.moveTo(this.points[1].x, this.points[1].y);
    ctx.lineTo(this.points[5].x, this.points[5].y);
    ctx.moveTo(this.points[2].x, this.points[2].y);
    ctx.lineTo(this.points[6].x, this.points[6].y);
    ctx.moveTo(this.points[7].x, this.points[7].y);
    ctx.lineTo(this.points[3].x, this.points[3].y);
    ctx.stroke();
    //ctx.closePath();
  }
}
