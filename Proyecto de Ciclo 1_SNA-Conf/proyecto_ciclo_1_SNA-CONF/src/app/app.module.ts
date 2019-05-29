import {
  BrowserModule
} from '@angular/platform-browser';
import {
  ErrorHandler,
  NgModule
} from '@angular/core';
import {
  HttpModule
} from "@angular/http";
import {
  IonicApp,
  IonicErrorHandler,
  IonicModule
} from 'ionic-angular';
import {
  SplashScreen
} from '@ionic-native/splash-screen';
import {
  StatusBar
} from '@ionic-native/status-bar';
// import {
//   NgIdleKeepaliveModule
// } from '@ng-idle/keepalive';


import {
  MyApp
} from './app.component';
import {
  HomePage
} from '../pages/home/home';
import {
  TransfersPage
} from '../pages/transfers/transfers';
import {
  odooJsonRpc
} from "../services/odoojsonrpc";
import {
  LogInPage
} from '../pages/log-in/log-in';
import { TransferViewPage } from '../pages/transfer-view/transfer-view';
import { PackingPage } from '../pages/packing/packing';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LogInPage,
    TransfersPage,
    TransferViewPage,
    PackingPage
  ],
  imports: [BrowserModule, HttpModule, IonicModule.forRoot(MyApp)],
  // , NgIdleKeepaliveModule
  // ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LogInPage,
    TransfersPage,
    TransferViewPage,
    PackingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    odooJsonRpc,
    {
      provide: ErrorHandler,
      useClass: IonicErrorHandler
    }
  ]
})
export class AppModule { }
