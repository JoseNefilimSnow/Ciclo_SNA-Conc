import {
  Component
} from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams
} from 'ionic-angular';
import {
  OdooJsonRpc
} from '../../services/odoojsonrpc';
import {
  TransferViewPage
} from '../transfer-view/transfer-view';

/**
 * Generated class for the TransfersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transfers',
  templateUrl: 'transfers.html',
})
export class TransfersPage {
  private statusColor: string;
  private stateAux = "";
  private hecho = false;
  private cancelado = false;
  private transfers: Array<{
    id: number,
    name: string,
    state: string
  }> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private odooRpc: OdooJsonRpc) {
    this.display();
  }

  private view(index) {
    this.navCtrl.push(TransferViewPage, {
      id: this.transfers[index].id,
      state: this.transfers[index].state
    })
  }

  private display() {
    this.transfers = [];
    this.odooRpc.getTransfersIn().then((res: any) => {
      for (let i = 0; i < JSON.parse(res._body)["result"].records.length; i++) {
        switch (String(JSON.parse(res._body)["result"].records[i].state)) {
          case 'done':
            this.stateAux = "Hecho";
            break;
          case 'draft':
            this.stateAux = "Borrador";
            break;
          case 'waiting':
            this.stateAux = "En Espera";
            break;
          case 'partially_avaiable':
            this.stateAux = "Disponible Parcialmente";
            break;
          case 'assigned':
            this.stateAux = "Disponible";
            break;
          case 'cancel':
            this.stateAux = "Cancelado";
            break;
        }

        // if (this.checkdone(this.stateAux)) {
        this.transfers[i] = {
          id: Number(JSON.parse(res._body)["result"].records[i].id),
          name: String(JSON.parse(res._body)["result"].records[i].name),
          state: this.stateAux
          // }
        }
      }
    }).catch(err => {
      alert(err);
    })
    // this.changeStatusColor();

  }

  // private checkdone(state: string) {
  //   if(state === "Hecho"){
  //     return true;
  //   }


  // if (this.hecho && state == "Hecho") {
  //   return true;
  // } else if (state != "Hecho" || !this.hecho) {
  //   return true;
  // } else {
  //   return false;
  // }
}

//   private reload() {
//   this.display();
// }

  // private changeStatusColor() {
  //   switch (this.stateAux) {
  //     case 'Hecho':
  //       this.statusColor = "secondary";
  //       break;
  //     case 'Borrador':
  //       this.statusColor = "dark";
  //       break;
  //     case 'En Espera':
  //       this.statusColor = "yellow";
  //       break;
  //     case 'Disponible Parcialmente':
  //       this.statusColor = "purple";
  //       break;
  //     case 'Disponible':
  //       this.statusColor = "primary";
  //       break;
  //     case 'Cancelado':
  //       this.statusColor = "danger";
  //       break;
  //   }
  // }

