import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ServiceLogin } from './services/login.service';
import { Credentials } from './interfaces/credentials';
import { Result } from '../../interfaces/Result';
import { Storage } from '../../services/storage';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {


  public cred: Credentials = {
    password: '',
    username: ''
  }

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private _service: ServiceLogin,
    public toastCtrl: ToastController,
    private _storage: Storage) { }


  ionViewDidLoad() { }

  public signIn(cred: Credentials) {
    this.navCtrl.setRoot('TabPage');
    this._service.signIn(cred).then((res: Result) => {
      if (res.Success === 200 && res.Data) {
        this._storage.Session = res.Data;
        this.navCtrl.setRoot('TabPage');
      } else {
        let toast = this.toastCtrl.create({
          message: res.Message,
          duration: 3000
        });
        toast.present();
      }
    });
  }

  public signUp() {
    this.navCtrl.push('SignupPage');
  }

}
