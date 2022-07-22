import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { AppRoutingModule } from './app.routing';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { crudReducer } from './store/crud.reducer';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    // Routes
    AppRoutingModule,

    StoreModule.forRoot({
      crud: crudReducer,
    }),
    // EffectsModule.forRoot([CrudEffect]),

    EffectsModule.forRoot([]),

    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  
  ],
  providers: [AppService],
  bootstrap: [AppComponent],
})
export class AppModule { }
