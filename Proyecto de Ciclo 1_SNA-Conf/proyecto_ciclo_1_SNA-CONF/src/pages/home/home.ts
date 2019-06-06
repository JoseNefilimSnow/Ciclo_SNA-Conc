import {
  Component
} from '@angular/core';
import {
  NavController
} from 'ionic-angular';

import {LogInPage} from '../log-in/log-in';
import { TransfertemplatePage } from '../transfertemplate/transfertemplate';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  idleState = 'Not started.';
  timedOut = false;
  lastPing ? : Date = null;

  constructor(public navCtrl: NavController) {}

  private ver_pedidos(id) {
    
    switch (id){
      case 1:
        this.navCtrl.push(TransfertemplatePage,{id:1})
        break;
      case 3:
        this.navCtrl.push(TransfertemplatePage,{id:3})
        break;
      case 4:
        this.navCtrl.push(TransfertemplatePage,{id:4})
        break;
    }
  }

  private logOut() {
    localStorage.removeItem("token");
    this.navCtrl.setRoot(LogInPage);
  }
  
}
