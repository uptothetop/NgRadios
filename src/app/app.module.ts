import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RadiosComponent } from './radios/radios.component';

import { MatListModule } from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { AudioService } from './audio.service';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    MatListModule, 
    MatCardModule, 
    BrowserAnimationsModule, 
  ],
  declarations: [ AppComponent, RadiosComponent,],
  bootstrap:    [ AppComponent ],
  providers: [AudioService]
})
export class AppModule { }
