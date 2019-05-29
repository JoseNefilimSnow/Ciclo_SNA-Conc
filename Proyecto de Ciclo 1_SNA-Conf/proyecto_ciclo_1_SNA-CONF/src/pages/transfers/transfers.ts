import {
  Component
} from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams
} from 'ionic-angular';
import {
  odooJsonRpc
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
  private hechosycancelados = "Si";
  private transfers: Array<{
    id: number,
    name: string,
    state: string
  }> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private odooRpc: odooJsonRpc) {
    this.display();
  }

  private display() {
    let cont = 0;
    let transf: Array<{
      id: number,
      name: string,
      state: string
    }> = [];
    this.odooRpc.obtenerPedidosPickDeSalida().then((res: any) => {
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
        if (this.stateAux === "Hecho" || this.stateAux === "Cancelado") {
          if (this.hechosycancelados === "Si") {
            transf[cont] = {
              id: Number(JSON.parse(res._body)["result"].records[i].id),
              name: String(JSON.parse(res._body)["result"].records[i].name),
              state: this.stateAux
            }
            cont++;
          } else if (this.hechosycancelados === "No") { }
        } else {
        transf[cont] = {
          id: Number(JSON.parse(res._body)["result"].records[i].id),
          name: String(JSON.parse(res._body)["result"].records[i].name),
          state: this.stateAux
        }
        cont++;
        }
      }
      this.transfers=transf;
    }).catch(err => {
      alert(err);
    })

  }

  private view(index) {
    this.navCtrl.push(TransferViewPage, {
      id: this.transfers[index].id,
      state: this.transfers[index].state
    })
  }
  valueOfOption(){
    console.log(this.hechosycancelados);
    this.display();
  }
}
