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
  Utils
} from '../../services/utils';

/**
 * Generated class for the TransferViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transfer-view',
  templateUrl: 'transfer-view.html',
})
export class TransferViewPage {

  private transf_id: number;
  private state: string;
  private prodsList: Array < {
    id;
    name;
    qty_or: number;
    qty_del: number;
  } > = []
  private detailList: Array < {
    name: string;
    client;
    state: string;
  } > = []

  constructor(public navCtrl: NavController, public navParams: NavParams, private odooRpc: OdooJsonRpc, private utils: Utils) {
    this.transf_id = this.navParams.get("id");
    this.state = this.navParams.get("state");
    this.ionViewDidLoad();
  }

  ionViewDidLoad() {
    let name_prods: Array < string > ;
    let id_prod;
    let prod_name;
    let qty_o;
    let qty_del;
    this.odooRpc.getSingleTransferDetails(this.transf_id).then((res: any) => {
      this.detailList = [{
        name: JSON.parse(res._body)["result"].records[0].name,
        client: JSON.parse(res._body)["result"].records[0].partner_id[1],
        state: this.state
      }];
      this.odooRpc.getProdsFromTransfer(this.transf_id).then((res: any) => {
        
      }).catch(err => {
        alert(err)
      });
    }).catch(err => {
      alert(err)
    });
    
  }

}
