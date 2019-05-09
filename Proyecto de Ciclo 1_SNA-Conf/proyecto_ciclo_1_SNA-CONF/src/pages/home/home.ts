import {
  Component
} from '@angular/core';
import {
  NavController
} from 'ionic-angular';
import {
  TransfersPage
} from '../transfers/transfers';
import {
  LogInPage
} from '../log-in/log-in';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  idleState = 'Not started.';
  timedOut = false;
  lastPing ? : Date = null;

  constructor(public navCtrl: NavController) {
    // // sets an idle timeout of 5 seconds, for testing purposes.
    // idle.setIdle(5);
    // // sets a timeout period of 5 seconds. after 10 seconds of inactivity, the user will be considered timed out.
    // idle.setTimeout(5);
    // // sets the default interrupts, in this case, things like clicks, scrolls, touches to the document
    // idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

    // idle.onIdleEnd.subscribe(() => this.idleState = 'No longer idle.');
    // idle.onTimeout.subscribe(() => {
    //   this.idleState = 'Timed out!';
    //   this.timedOut = true;
    //   this.logOut();
    // });
    // idle.onIdleStart.subscribe(() => this.idleState = 'You\'ve gone idle!');
    // idle.onTimeoutWarning.subscribe((countdown) => this.idleState = 'You will time out in ' + countdown + ' seconds!');

    // // sets the ping interval to 15 seconds
    // keepalive.interval(15);

    // keepalive.onPing.subscribe(() => this.lastPing = new Date());

    // this.reset();
  }

  // reset() {
  //   this.idle.watch();
  //   this.idleState = 'Started.';
  //   this.timedOut = false;
  // }

  private toServeTransfers() {
    this.navCtrl.push(TransfersPage)
  }

  private logOut() {
    localStorage.removeItem("token");
    this.navCtrl.setRoot(LogInPage);
  }
}
