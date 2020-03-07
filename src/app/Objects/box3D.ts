import { vec4,vec3 } from '../util/vector';
import { mat4 } from '../util/mat4';


export class box3D
{
   points:vec4[];

   constructor()
   {
     
   }

   setPoints()
   {
     this.points = new Array(8);
     for(let i = 0; i < 8;i++)
     {
       this.points[i] = new vec4();
     }
     this.points[0]
   }
}