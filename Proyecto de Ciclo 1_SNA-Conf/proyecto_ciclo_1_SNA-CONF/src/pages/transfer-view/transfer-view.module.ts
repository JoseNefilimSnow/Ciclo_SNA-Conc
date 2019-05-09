import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransferViewPage } from './transfer-view';

@NgModule({
  declarations: [
    TransferViewPage,
  ],
  imports: [
    IonicPageModule.forChild(TransferViewPage),
  ],
})
export class TransferViewPageModule {}
