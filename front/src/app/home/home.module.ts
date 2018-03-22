import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { VerifyComponent } from './verify/verify.component';
import { ResetComponent } from './reset/reset.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { ForgotComponent } from './forgot/forgot.component';

import { HomeRouting } from './home.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HomeRouting
  ],
  declarations: [LoginComponent, RegisterComponent, VerifyComponent, ResetComponent, MainComponent, HomeComponent, ForgotComponent]
})
export class HomeModule { }
