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
  private qty_done;
  private idMovesList:Array<number>=[];
  private productList: Array<{
    id;
    name;
    qty_del;
    qty_order;
  }> = [];
  private detailList: Array<{
    name: string;
    client;
    state: string;
  }> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private odooRpc: OdooJsonRpc, private utils: Utils) {
    this.transf_id = this.navParams.get("id");
    this.state = this.navParams.get("state");
    this.ionViewDidLoad();
  }
  private check(){
    if(this.state=="Hecho"||this.state=="Cancelado"){
      return true;
    }
    return false;
  }
  ionViewDidLoad() {
    this.odooRpc.getSingleTransferDetails(this.transf_id).then((res: any) => {
      this.detailList = [{
        name: JSON.parse(res._body)["result"].records[0].name,
        client: JSON.parse(res._body)["result"].records[0].partner_id[1],
        state: this.state
      }];
    }).catch(err => {
      alert(err)
    });

    this.odooRpc.getProdsFromTransfer(this.transf_id).then((res: any) => {
      for (let i = 0; i < JSON.parse(res._body)["result"].records.length; i++) {
        console.log(JSON.parse(res._body)["result"].records[i].id);
        console.log(JSON.parse(res._body)["result"].records[i]);
        console.log(JSON.parse(res._body)["result"].records[i].ordered_qty);
        console.log(JSON.parse(res._body)["result"].records[i].qty_done);
        this.idMovesList[i]=JSON.parse(res._body)["result"].records[i].id;
        this.qty_done = JSON.parse(res._body)["result"].records[i].qty_done;
        this.productList[i] = {
          id: JSON.parse(res._body)["result"].records[i].product_id[0],
          name: JSON.parse(res._body)["result"].records[i].product_id[1],
          qty_del: this.qty_done,
          qty_order: JSON.parse(res._body)["result"].records[i].ordered_qty
        };
      }
    }).catch(err => {
      alert(err)
    });
    
  }
  private increment(i){
    this.qty_done++;
    if(this.qty_done>this.productList[i].qty_order){
     this.qty_done=this.productList[i].qty_order;
     this.productList[i].qty_del=this.qty_done; 
    }else{
      this.productList[i].qty_del=this.qty_done;
    }
  }
  private decrement(i){
    this.qty_done--;
    if(this.qty_done<0){
      this.qty_done=0;
      this.productList[i].qty_del=this.qty_done; 
     }else{
    this.productList[i].qty_del=this.qty_done;
    }
  }
  private update(){
    for(let i = 0;i<this.idMovesList.length;i++){
      console.log(this.idMovesList[i]);
      this.odooRpc.updateRecord('stock.move.line',this.idMovesList[i],{
        qty_done:this.qty_done
      });
    }
  }
}
