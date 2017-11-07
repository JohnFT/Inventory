import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceSignUp } from './services/signup.services';
import { Result } from '../../interfaces/Result';
import { User } from '../../interfaces/user';
@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  public user: any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, private _service: ServiceSignUp) { }

  ionViewDidLoad() { }
  signup(user: User) {
    this._service.addUser(user).then((res: Result) => {
      console.log(res);
    });
  }
}
