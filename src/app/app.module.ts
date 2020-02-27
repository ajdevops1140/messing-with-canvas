import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Canvas1Component } from './canvas1/canvas1.component';
import { Math2DComponent } from './math2-d/math2-d.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, Canvas1Component, Math2DComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
