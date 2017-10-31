import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@IonicPage()
@Component({
  selector: 'page-catch',
  templateUrl: 'catch.html',
})
export class CatchPage {
  public qrData = null;
  public createdCode = null;
  public scannedCode = null;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private barcodeScanner: BarcodeScanner) {
  }

  ionViewDidLoad() { }
  createCode() {
    this.createdCode = this.qrData;
  }

  scanCode() {
    this.barcodeScanner.scan().then(
      barcodeData => {
        this.scannedCode = barcodeData.text;
      }
    )
  }
}
