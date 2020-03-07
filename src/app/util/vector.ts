
export class vec4{

  x; y; z; w;

  constructor()
  {
    this.x = 0; this.y = 0; this.z = 0; this.w = 1;
  }

  clip()
  {
    let p = new vec3();
    p.x = this.x/this.w;
    p.y = this.y/this.w;
    p.z = this.z/this.w;
    return p;
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