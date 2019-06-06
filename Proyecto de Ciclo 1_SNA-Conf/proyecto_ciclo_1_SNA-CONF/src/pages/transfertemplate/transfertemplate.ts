import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { odooJsonRpc } from '../../services/odoojsonrpc';
import { DetailledviewPage } from '../detailledview/detailledview';

/**
 * Generated class for the TransfertemplatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transfertemplate',
  templateUrl: 'transfertemplate.html',
})
export class TransfertemplatePage {

  private titulo;
  private picking_id_type;
  private longitud_de_array=0;
  private arraypedidos:Array<{
    id:number;
    nombre:string;
    estado:string;
  }>=[];
  private ocultar_boton;

  constructor(public navCtrl: NavController, public navParams: NavParams, private odooRPC:odooJsonRpc) {
    this.picking_id_type=this.navParams.get("id");
    console.log(this.picking_id_type);
    switch(this.picking_id_type){
      case 1:
        this.titulo="Entrada de Productos"
        this.ocultar_boton=true;
        break;
      case 3:
        this.titulo="Recogida de Almacén";
        this.ocultar_boton=false;
        break;
      case 4:
        this.titulo="Empaquetar";
        this.ocultar_boton=true;
        break;
    }
    this.imprimir_en_pantalla();
  }

  imprimir_en_pantalla(){
    this.odooRPC.obtener_movimiento_de(this.picking_id_type).then((res:any)=>{
      let stateAux;
      for(let i=0;i<JSON.parse(res._body)['result'].records.length;i++){
        switch (String(JSON.parse(res._body)["result"].records[i].state)) {
          case 'done':
            stateAux = "Hecho";
            break;
          case 'draft':
            stateAux = "Borrador";
            break;
          case 'waiting':
            stateAux = "En Espera";
            break;
          case 'partially_avaiable':
            stateAux = "Disponible Parcialmente";
            break;
          case 'assigned':
            stateAux = "Disponible";
            break;
          case 'cancel':
            stateAux = "Cancelado";
            break;
        }
        this.arraypedidos[i]=
        {
          id:JSON.parse(res._body)['result'].records[i].id,
          nombre:JSON.parse(res._body)['result'].records[i].name,
          estado:stateAux 
        };
      }  
    }).catch(err=>{
      alert(err)
    });
  }
  ver_mas(indice){
    console.log(JSON.stringify(this.arraypedidos[indice]));
    this.odooRPC.obtener_movimiento(this.arraypedidos[indice].id).then((res:any)=>{
      this.navCtrl.push(DetailledviewPage,{body:JSON.parse(res._body)['result'].records[0]})
    })
  }
  aEmpaquetar(){
    this.navCtrl.push(TransfertemplatePage,{id:4});
  }
}
