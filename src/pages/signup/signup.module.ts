import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignupPage } from './signup';
import { HttpModule } from '@angular/http';
import { ServiceSignUp } from './services/signup.services';
@NgModule({
  declarations: [
    SignupPage,
  ],
  imports: [
    IonicPageModule.forChild(SignupPage),
    HttpModule
  ],
  providers: [
    ServiceSignUp
  ]
})
export class SignupPageModule { }
