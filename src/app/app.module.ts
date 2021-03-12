import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Parent1Component } from './parent1/parent1.component';
import { Child1Component } from './child1/child1.component';
import { environment } from '../environments/environment';
import {HttpClientModule} from '@angular/common/http';
import {DataService} from './service/data.service';
import {LoggingService} from './service/logging.service';
import { Child2Component } from './child2/child2.component';
import { Parent2Component } from './parent2/parent2.component';
import { Child3Component } from './child3/child3.component';

@NgModule({
  declarations: [
    AppComponent,
    Parent1Component,
    Child1Component,
    Child2Component,
    Parent2Component,
    Child3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [DataService, LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
