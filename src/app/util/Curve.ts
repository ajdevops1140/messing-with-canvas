import { P2D } from "./util/P2D";

//(1-t)^3(P0) + 3t(1-t)^2(P1)+3t^2(1-t)(P2)+t^3(P3)
export class Curve {

  p0:P2D;
  p1:P2D;
  p2:P2D;
  p3:P2D;
  steps:number;

  constructor(p0 , p1 , p2 , p3) 
  {
    this.setPoints(p0, p1, p2, p3);
  }

  setPoints(p0, p1, p2, p3)
  {
    this.p0 = p0;
    this.p1 = p1;
    this.p2 = p2;
    this.p3 = p3; 
  }

  setSteps(steps)
  {
    this.steps = steps;
  }

  

}
