import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CatchPage } from './catch';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { NgxQRCodeModule } from 'ngx-qrcode3';
@NgModule({
  providers:[
    BarcodeScanner
  ],
  declarations: [
    CatchPage,
  ],
  imports: [
    IonicPageModule.forChild(CatchPage),
    NgxQRCodeModule
  ],
})
export class CatchPageModule {}
