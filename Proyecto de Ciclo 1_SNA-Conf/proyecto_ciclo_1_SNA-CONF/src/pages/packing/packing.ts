import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { odooJsonRpc } from '../../services/odoojsonrpc';

/**
 * Generated class for the PackingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-packing',
  templateUrl: 'packing.html',
})
export class PackingPage {
  private statusColor: string;
  private stateAux = "";
  private hechosycancelados = "Si";
  private packing: Array<{
    id: number,
    name: string,
    state: string
  }> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private odooRpc:odooJsonRpc) {
    this.display();
  }

  private display() {
    let cont = 0;
    let pack: Array<{
      id: number,
      name: string,
      state: string
    }> = [];
    this.odooRpc.obtenerPedidosPackDeSalida().then((res: any) => {
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
            pack[cont] = {
              id: Number(JSON.parse(res._body)["result"].records[i].id),
              name: String(JSON.parse(res._body)["result"].records[i].name),
              state: this.stateAux
            }
            cont++;
          } else if (this.hechosycancelados === "No") { }
        } else {
        pack[cont] = {
          id: Number(JSON.parse(res._body)["result"].records[i].id),
          name: String(JSON.parse(res._body)["result"].records[i].name),
          state: this.stateAux
        }
        cont++;
        }
      }
      this.packing=pack;
    }).catch(err => {
      alert(err);
    })

  }

  valueOfOption(){
    console.log(this.hechosycancelados);
    this.display();
  }
}
