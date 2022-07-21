import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { AppRoutingModule } from './app.routing';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    // Routes
    AppRoutingModule,

    StoreModule.forRoot({}, {})
  
  ],
  providers: [AppService],
  bootstrap: [AppComponent],
})
export class AppModule { }
