 //Row vector matrix
export class mat4
{
  m11; m12; m13; m14;
  m21; m22; m23; m24;
  m31; m32; m33; m34;
  m41; m42; m43; m44;

  constructor(){
    this.identity();
  }

  identity()
  {
    this.m11 = 1; this.m12 = 0; this.m13 = 0; this.m14 = 0;
    this.m21 = 0; this.m22 = 1; this.m23 = 0; this.m24 = 0;
    this.m31 = 0; this.m32 = 0; this.m33 = 1; this.m34 = 0;
    this.m41 = 0; this.m42 = 0; this.m43 = 0; this.m44 = 1;   
  }

  //Row Vector operation
  multVec(v)
  {
    let x = (v.x * this.m11) + (v.y * this.m21) + (v.z * this.m31) + (v.w * this.m41);
    let y = (v.x * this.m12) + (v.y * this.m22) + (v.z * this.m32) + (v.w * this.m42);
    let z = (v.z * this.m13) + (v.y * this.m23) + (v.z * this.m33) + (v.w * this.m43);
    let w = (v.w * this.m14) + (v.y * this.m24) + (v.z * this.m34) + (v.w * this.m44);
  }

  rotateX(rad)
  {
    this.m11 = 1; this.m12 = 0;              this.m13 = 0;             this.m14 = 0;
    this.m21 = 0; this.m22 = Math.cos(rad);  this.m23 = Math.sin(rad); this.m24 = 0;
    this.m31 = 0; this.m32 = -Math.sin(rad); this.m33 = Math.cos(rad); this.m34 = 0;
    this.m41 = 0; this.m42 = 0;              this.m43 = 0;             this.m44 = 1; 
  }

  rotateY(rad)
  {
    this.m11 = Math.cos(rad); this.m12 = 0; this.m13 = -Math.sin(rad); this.m14 = 0;
    this.m21 = 0;             this.m22 = 1; this.m23 = 0;              this.m24 = 0;
    this.m31 = Math.sin(rad); this.m32 = 0; this.m33 = Math.cos(rad);  this.m34 = 0;
    this.m41 = 0;             this.m42 = 0; this.m43 = 0;              this.m44 = 1; 
  }

  rotateZ(rad)
  {
    this.m11 = Math.cos(rad);  this.m12 = Math.sin(rad); this.m13 = 0; this.m14 = 0;
    this.m21 = -Math.sin(rad); this.m22 = Math.cos(rad); this.m23 = 0; this.m24 = 0;
    this.m31 = 0;              this.m32 = 0;             this.m33 = 1; this.m34 = 0;
    this.m41 = 0;              this.m42 = 0;             this.m43 = 0; this.m44 = 1; 
  }

  rotate(axis,rad)
  {
    switch(axis)
    {
      case 'x': 
        this.rotateX(rad);
        break;
      case 'y':
        this.rotateY(rad);
        break;
      case 'z':
        this.rotateZ(rad);
        break;
    }
  }


}