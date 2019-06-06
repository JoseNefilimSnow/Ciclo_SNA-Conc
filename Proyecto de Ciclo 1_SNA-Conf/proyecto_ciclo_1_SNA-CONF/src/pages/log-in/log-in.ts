import {
  odooJsonRpc
} from "../../services/odoojsonrpc";
import {
  Component
} from "@angular/core";
import {
  NavController,
  NavParams,
  MenuController
} from "ionic-angular";
import {
  Utils
} from "../../services/utils";
import { HomePage } from "../home/home";
/**
 * Generated class for the LogInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-log-in',
  templateUrl: 'log-in.html',
})
export class LogInPage {
  private email; 
  private password;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private odooRpc: odooJsonRpc,
    private utils: Utils,
    private menu: MenuController) {
  }

  private login() {
    this.utils.presentLoading("Iniciando Sesión", 0, true);
    this.odooRpc
      .inicioDeSesion(this.email, this.password)
      .then((res: any) => {
        console.log(JSON.parse(res._body));
        if (Number(JSON.parse(res._body)["result"].partner_id)) {
          this.utils.dismissLoading();
          console.log("Todo guay: "+ JSON.parse(res._body));
          this.navCtrl.setRoot(HomePage);
        } else {
          this.utils.dismissLoading();
          this.utils.presentAlert(
            "Error",
            "El usuario no existe",
            [{
              text: "Ok"
            }]
          );
        }

      })
      .catch(err => {
        console.log("ups: "+JSON.parse(err._body))
        this.utils.dismissLoading();
        this.utils.presentAlert(
          "Error",
          "El usuario o contraseña deben ser incorrectos",
          [{
            text: "Ok"
          }]
        );
      });
      this.utils.dismissLoading();
  }
  
  private wallJumper() {
    this.utils.presentLoading("Iniciando Sesión", 0, true);
    this.odooRpc
      .inicioDeSesion("admin@prueba.com", "prueba")
      .then((res: any) => {
        if (Number(JSON.parse(res._body)["result"].partner_id)) {
          let logiData: any = JSON.parse(res._body)["result"];
          logiData.password = this.password;
          localStorage.setItem("token", JSON.stringify(logiData));
          this.utils.dismissLoading();
          this.navCtrl.setRoot(HomePage);
        } else {
          this.utils.dismissLoading();
          this.utils.presentAlert(
            "Error",
            "El usuario no existe",
            [{
              text: "Ok"
            }]
          );
        }

      })
      .catch(err => {
        console.log("ups: "+ err)
        this.utils.dismissLoading();
        this.utils.presentAlert(
          "Error",
          "El usuario o contraseña deben ser incorrectos",
          [{
            text: "Ok"
          }]
        );
      });
      this.utils.dismissLoading();
  }
}
