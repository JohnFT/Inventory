import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { ServiceLogin } from './services/login.service';
import { HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    LoginPage
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
    HttpModule
  ],
  providers: [
    ServiceLogin
  ]
})
export class LoginPageModule { }
