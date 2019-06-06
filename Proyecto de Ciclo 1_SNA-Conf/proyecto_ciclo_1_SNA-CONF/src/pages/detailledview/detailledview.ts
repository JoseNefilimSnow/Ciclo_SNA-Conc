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

/**
 * Generated class for the DetailledviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detailledview',
  templateUrl: 'detailledview.html',
})
export class DetailledviewPage {

  private detalles_movimiento;
  // ---Titulo de la página ---//
  private nombre_movimiento;
  // --- Detalles a mostrar de el movimiento ---//
  private origen;
  private proovedor;
  private cliente;
  private estado;
  // --- Control de tipo de movimiento, para mostrar datos correctos ---//
  private esProveedor;
  private esCliente;
  //--- Productos del movimiento ---//
  private arrayproductos: Array < {
    nombre: string;
    ubicacion: string;
    cantidad_pedida: number;
    cantidad_hecha: number;
    hecho: boolean;
  } >= []
  private nombre_producto;
  private ubicacion_producto;
  private cantidad_pedida_producto;
  private cantidad_hecha_producto;


  constructor(public navCtrl: NavController, public navParams: NavParams, private odooRPC: odooJsonRpc) {
    this.detalles_movimiento = this.navParams.get("body");
    this.inicializarDatos();
    this.cargarProductos();
  }

  inicializarDatos() {
    switch (this.detalles_movimiento.picking_type_id[0]) {
      case 1:
        this.esProveedor = true;
        this.esCliente = false;
        break;
      case 3:
      case 4:
        this.esProveedor = false;
        this.esCliente = true;
        break;
    }
    this.nombre_movimiento = this.detalles_movimiento.name;
    this.origen = this.detalles_movimiento.origin;
    this.cliente = this.detalles_movimiento.partner_id[1];
    switch (this.detalles_movimiento.state) {
      case 'done':
        this.estado = "Hecho";
        break;
      case 'draft':
        this.estado = "Borrador";
        break;
      case 'waiting':
        this.estado = "En Espera";
        break;
      case 'partially_avaiable':
        this.estado = "Disponible Parcialmente";
        break;
      case 'assigned':
        this.estado = "Disponible";
        break;
      case 'cancel':
        this.estado = "Cancelado";
        break;
    }
  }
  cargarProductos() {
    
    for (let i = 0; i < this.detalles_movimiento.move_line_ids.length; i++) {
      this.odooRPC.obtener_movimientos_productos(this.detalles_movimiento.move_line_ids[i]).then((res: any) => {
        console.log(JSON.parse(res._body));
        this.cantidad_hecha_producto = JSON.parse(res._body)['result'].records[0].qty_done;
        this.cantidad_pedida_producto = JSON.parse(res._body)['result'].records[0].ordered_qty;
        let id_prod = JSON.parse(res._body)['result'].records[0].product_id[0];
        this.odooRPC.obtener_detalles_productos(id_prod).then((res: any) => {
          this.nombre_producto = JSON.parse(res._body)['result'].records[0].name;
          this.ubicacion_producto = JSON.parse(res._body)['result'].records[0].ub[1];
          this.arrayproductos[i] = {
            nombre: this.nombre_producto,
            ubicacion: this.ubicacion_producto,
            cantidad_pedida: this.cantidad_pedida_producto,
            cantidad_hecha: this.cantidad_hecha_producto,
            hecho: false
          }
        }).catch(err => {
          alert(err)
        });
      }).catch(err => {
        alert(err);
      });
    }
  }
}
