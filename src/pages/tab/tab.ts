import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the TabPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab',
  templateUrl: 'tab.html'
})
export class TabPage {

  homeRoot = 'HomePage'
  profileRoot = 'ProfilePage'
  findRoot = 'FindPage'
  catchRoot = 'CatchPage'
  storeRoot = 'StorePage'


  constructor(public navCtrl: NavController) {}

}
