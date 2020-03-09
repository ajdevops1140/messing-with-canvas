import {
  Component,
  OnInit,
  ViewChild,
  Input,
  ElementRef,
  AfterViewInit
} from "@angular/core";
import { Basic } from "../util/Basic";
import { P2D } from "../util/P2D";
import { CanvasHandlerService } from "../util/canvas-handler.service";
import { Arrow } from "../Objects/arrow";

@Component({
  selector: 'app-bezier',
  templateUrl: './bezier.component.html',
  styleUrls: ['./bezier.component.css']
})
export class BezierComponent implements OnInit {

  

  constructor() { }

  ngOnInit() {
  }

}