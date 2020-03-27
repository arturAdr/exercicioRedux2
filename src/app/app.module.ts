import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';

import { covid19Reducer } from './covid19/reducer/covid19.reducer';
import { AppComponent } from './app.component';
import { Covid19Component } from './covid19/covid19.component';
import { Covid19Service } from './covid19/covid19.service';
import { EffectsModule } from '@ngrx/effects';
import { Covid19Effect } from './covid19/reducer/covid19.effect';

@NgModule({
  declarations: [
    AppComponent,
    Covid19Component
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ covid: covid19Reducer }),
    StoreDevtoolsModule.instrument({
        maxAge: 25,
        logOnly: environment.production,
    }),
    HttpClientModule,
    EffectsModule.forRoot([Covid19Effect])
  ],
  providers: [Covid19Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
