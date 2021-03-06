import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Canvas1Component } from './canvas1/canvas1.component';
import { Math2DComponent } from './math2-d/math2-d.component';
import { CanvasHandlerService } from './util/canvas-handler.service';
import { Interpolate2PointsComponent } from './interpolate2-points/interpolate2-points.component';
import { BezierComponent } from './bezier/bezier.component';
import { BezierCopyComponent } from './bezier-copy/bezier-copy.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, Canvas1Component, Math2DComponent, Interpolate2PointsComponent, BezierComponent, BezierCopyComponent],
  bootstrap:    [ AppComponent ],
  providers: [CanvasHandlerService]
})
export class AppModule { }
