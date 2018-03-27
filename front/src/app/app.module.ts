import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { SocketService } from './socket.service';
import { HomeModule } from './home/home.module';
import { AppRouting } from './app.routing';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouting,
    HomeModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, ApiService, SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
