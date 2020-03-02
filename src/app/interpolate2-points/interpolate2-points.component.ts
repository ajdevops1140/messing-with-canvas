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

  constructor() { }

  ngOnInit() {
  }

}