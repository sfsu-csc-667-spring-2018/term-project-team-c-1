import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { HomeModule } from './home/home.module';
import { ApiService } from './api.service';
import { SocketService } from './socket.service';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    FormsModule,
    HttpModule,
    AppRouting,
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, ApiService, SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
