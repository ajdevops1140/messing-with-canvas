
export class vec4{

  x; y; z; w;

  constructor(x = 0, y = 0, z = 0, w = 1)
  {
    this.setPoint(x,y,z,w);
  }

  clip()
  {
    let p = new vec3();
    p.x = this.x/this.w;
    p.y = this.y/this.w;
    p.z = this.z/this.w;
    return p;
  }

  clip4()
  {
    this.x /= this.w;
    this.y /= this.w;
    this.z /= this.w;
  } 
  

  setPoint(x = 0,y = 0,z = 0,w = 1)
  {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
  }
}

export class vec3{

  x; y; z;

  constructor()
  {
    this.x = 0; this.y = 0; this.z = 0;
  }
}

export class vec2{

  x; y;

  constructor()
  {
    this.x = 0; this.y = 0;
  }
}