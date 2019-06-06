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
  odooJsonRpc
} from "../services/odoojsonrpc";
import {
  LogInPage
} from '../pages/log-in/log-in';
import { TransfertemplatePage } from '../pages/transfertemplate/transfertemplate';
import { DetailledviewPage } from '../pages/detailledview/detailledview';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LogInPage,
    TransfertemplatePage,
    DetailledviewPage
  ],
  imports: [BrowserModule, HttpModule, IonicModule.forRoot(MyApp)],
  // , NgIdleKeepaliveModule
  // ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LogInPage,
    TransfertemplatePage,
    DetailledviewPage
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
