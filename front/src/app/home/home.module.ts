import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeRouting } from './home.routing';
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './register/register.component';
import { VerifyComponent } from './verify/verify.component';
import { LoginComponent } from './login/login.component';
import { ResetComponent } from './reset/reset.component';
import { ForgotComponent } from './forgot/forgot.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HomeRouting
  ],
  declarations: [ MainComponent, RegisterComponent, VerifyComponent, LoginComponent, ResetComponent, ForgotComponent, HomeComponent]
})
export class HomeModule { }
