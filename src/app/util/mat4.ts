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

  
}