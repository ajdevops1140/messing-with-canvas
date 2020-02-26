import { Basic } from './Basic';

export class CanvasHandler
{
  prevTime;
  currTime;
  basic:Basic[]; 

  constructor()
  {
    this.basic = new Array();
  }

  addToPage(obj)
  { 
    this.basic.push(obj);
  }
  
}