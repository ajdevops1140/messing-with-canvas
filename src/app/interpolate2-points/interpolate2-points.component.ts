import { Component, OnInit,ViewChild, Input,ElementRef,AfterViewInit } from '@angular/core';
import { Basic } from '../util/Basic';
import { P2D } from '../util/P2D';
import { CanvasHandlerService } from '../util/canvas-handler.service';

@Component({
  selector: 'app-interpolate2-points',
  templateUrl: './interpolate2-points.component.html',
  styleUrls: ['./interpolate2-points.component.css']
})
export class Interpolate2PointsComponent implements OnInit {
  cvWidth:number = 500;
  cvHeight:number = 100;
  @ViewChild('cv',{static:true}) cv:ElementRef;
  ctx:CanvasRenderingContext2D;
  wRight:number;
  wLeft:number;
  hUp:number;
  hDown:number;

  constructor() { }

  ngOnInit() {
  }

}