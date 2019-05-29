webpackJsonp([3],{

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Utils; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Utils = /** @class */ (function () {
    function Utils(alrtCtrl, loadingCtrl, toastCtrl, actionSheetCtrl) {
        this.alrtCtrl = alrtCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
    }
    Utils.prototype.presentAlert = function (title, message, buttons, subtitle, enableBackdropDismiss, inputs) {
        var alrt = this.alrtCtrl.create({
            title: title,
            subTitle: subtitle,
            message: message,
            buttons: buttons,
            enableBackdropDismiss: enableBackdropDismiss,
            inputs: inputs
        });
        alrt.present();
    };
    Utils.prototype.presentToast = function (message, duration, dissmissOnPageChange, position, showCloseButton, closeButtonText) {
        var toast = this.toastCtrl.create({
            message: message,
            position: position,
            dismissOnPageChange: dissmissOnPageChange,
            duration: duration,
            showCloseButton: showCloseButton,
            closeButtonText: closeButtonText
        });
        toast.present();
    };
    Utils.prototype.presentLoading = function (content, duration, dissmissOnPageChange, enableBackDropDismiss, showBackDrop, spinner) {
        this.loading = this.loadingCtrl.create({
            content: content,
            dismissOnPageChange: dissmissOnPageChange,
            duration: duration,
            enableBackdropDismiss: enableBackDropDismiss,
            showBackdrop: showBackDrop,
            spinner: spinner
        });
        this.loading.present();
    };
    Utils.prototype.dismissLoading = function () {
        this.loading.dismiss();
    };
    Utils.prototype.presentActionSheet = function (buttons, title, subtitle, enableBackdropDismiss) {
        var actionCtrl = this.actionSheetCtrl.create({
            buttons: buttons,
            subTitle: subtitle,
            title: title,
            enableBackdropDismiss: enableBackdropDismiss
        });
        actionCtrl.present();
    };
    Utils = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], Utils);
    return Utils;
}());

//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogInPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_odoojsonrpc__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_utils__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(347);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the LogInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LogInPage = /** @class */ (function () {
    function LogInPage(navCtrl, navParams, odooRpc, utils, menu) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.odooRpc = odooRpc;
        this.utils = utils;
        this.menu = menu;
        this.odooUrl = "http://172.18.8.34:8069";
        this.selectedDatabase = "ValperApp";
    }
    LogInPage.prototype.login = function () {
        var _this = this;
        this.utils.presentLoading("Iniciando Sesión", 0, true);
        this.odooRpc
            .inicioDeSesion(this.email, this.password)
            .then(function (res) {
            console.log(JSON.parse(res._body));
            if (Number(JSON.parse(res._body)["result"].partner_id)) {
                _this.utils.dismissLoading();
                console.log("Todo guay: " + JSON.parse(res._body));
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
            }
            else {
                _this.utils.dismissLoading();
                _this.utils.presentAlert("Error", "El usuario no existe", [{
                        text: "Ok"
                    }]);
            }
        })
            .catch(function (err) {
            console.log("ups: " + JSON.parse(err._body));
            _this.utils.dismissLoading();
            _this.utils.presentAlert("Error", "El usuario o contraseña deben ser incorrectos", [{
                    text: "Ok"
                }]);
        });
        this.utils.dismissLoading();
    };
    LogInPage.prototype.wallJumper = function () {
        var _this = this;
        this.utils.presentLoading("Iniciando Sesión", 0, true);
        this.odooRpc
            .inicioDeSesion("admin@prueba.com", "prueba")
            .then(function (res) {
            if (Number(JSON.parse(res._body)["result"].partner_id)) {
                var logiData = JSON.parse(res._body)["result"];
                logiData.password = _this.password;
                localStorage.setItem("token", JSON.stringify(logiData));
                _this.utils.dismissLoading();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
            }
            else {
                _this.utils.dismissLoading();
                _this.utils.presentAlert("Error", "El usuario no existe", [{
                        text: "Ok"
                    }]);
            }
        })
            .catch(function (err) {
            console.log("ups: " + JSON.parse(err._body));
            _this.utils.dismissLoading();
            _this.utils.presentAlert("Error", "El usuario o contraseña deben ser incorrectos", [{
                    text: "Ok"
                }]);
        });
        this.utils.dismissLoading();
    };
    LogInPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-log-in',template:/*ion-inline-start:"C:\Proyectos_Aplicaciones\Proyecto de Ciclo 1_SNA-Conf\proyecto_ciclo_1_SNA-CONF\src\pages\log-in\log-in.html"*/'<!--\n  Generated template for the LogInPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Inicio de Sesión</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div text-center>\n    <img src="assets/imgs/valper.jpg" alt="No Image" />\n  </div>\n  <ion-card>\n    <div>\n      <form (ngSubmit)="login()" #registerForm="ngForm">\n        <div class="spacer" style="height: 10px;"></div>\n\n        <ion-item class="border-box">\n          <ion-input type="email" placeholder="Usuario(Email)" [(ngModel)]="email" name="email" required></ion-input>\n        </ion-item>\n        <div class="spacer" style="height: 10px;"></div>\n\n        <ion-item class="border-box">\n          <ion-input type="password" [(ngModel)]="password" name="pass" placeholder="Contraseña" required></ion-input>\n        </ion-item>\n        <div class="spacer" style="height: 10px;"></div>\n        <button ion-button block round outline type="submit">\n          Iniciar Sesión\n        </button>\n      </form>\n      <button ion-button block round outline color="danger" (click)="wallJumper()">\n        Dev: Inicio de Sesion\n      </button>\n    </div>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Proyectos_Aplicaciones\Proyecto de Ciclo 1_SNA-Conf\proyecto_ciclo_1_SNA-CONF\src\pages\log-in\log-in.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__services_odoojsonrpc__["a" /* odooJsonRpc */],
            __WEBPACK_IMPORTED_MODULE_3__services_utils__["a" /* Utils */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* MenuController */]])
    ], LogInPage);
    return LogInPage;
}());

//# sourceMappingURL=log-in.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PackingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_odoojsonrpc__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the PackingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PackingPage = /** @class */ (function () {
    function PackingPage(navCtrl, navParams, odooRpc) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.odooRpc = odooRpc;
        this.stateAux = "";
        this.hechosycancelados = "Si";
        this.packing = [];
        this.display();
    }
    PackingPage.prototype.display = function () {
        var _this = this;
        var cont = 0;
        var pack = [];
        this.odooRpc.obtenerPedidosPackDeSalida().then(function (res) {
            for (var i = 0; i < JSON.parse(res._body)["result"].records.length; i++) {
                switch (String(JSON.parse(res._body)["result"].records[i].state)) {
                    case 'done':
                        _this.stateAux = "Hecho";
                        break;
                    case 'draft':
                        _this.stateAux = "Borrador";
                        break;
                    case 'waiting':
                        _this.stateAux = "En Espera";
                        break;
                    case 'partially_avaiable':
                        _this.stateAux = "Disponible Parcialmente";
                        break;
                    case 'assigned':
                        _this.stateAux = "Disponible";
                        break;
                    case 'cancel':
                        _this.stateAux = "Cancelado";
                        break;
                }
                if (_this.stateAux === "Hecho" || _this.stateAux === "Cancelado") {
                    if (_this.hechosycancelados === "Si") {
                        pack[cont] = {
                            id: Number(JSON.parse(res._body)["result"].records[i].id),
                            name: String(JSON.parse(res._body)["result"].records[i].name),
                            state: _this.stateAux
                        };
                        cont++;
                    }
                    else if (_this.hechosycancelados === "No") { }
                }
                else {
                    pack[cont] = {
                        id: Number(JSON.parse(res._body)["result"].records[i].id),
                        name: String(JSON.parse(res._body)["result"].records[i].name),
                        state: _this.stateAux
                    };
                    cont++;
                }
            }
            _this.packing = pack;
        }).catch(function (err) {
            alert(err);
        });
    };
    PackingPage.prototype.valueOfOption = function () {
        console.log(this.hechosycancelados);
        this.display();
    };
    PackingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-packing',template:/*ion-inline-start:"C:\Proyectos_Aplicaciones\Proyecto de Ciclo 1_SNA-Conf\proyecto_ciclo_1_SNA-CONF\src\pages\packing\packing.html"*/'<!--\n  Generated template for the PackingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Empaquetado</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-item>\n    <ion-label>Mostrar Hechos y Cancelados:</ion-label>\n    <ion-select [(ngModel)]="hechosycancelados" (ionChange)="valueOfOption()">\n      <ion-option value="Si">Si</ion-option>\n      <ion-option value="No">No</ion-option>\n    </ion-select>\n  </ion-item>\n  <ion-list *ngFor="let items of packing;">\n    <ion-item>\n      <h2>Nombre: {{items.name}}</h2>\n      <h3>Estado: {{items.state}}</h3>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Proyectos_Aplicaciones\Proyecto de Ciclo 1_SNA-Conf\proyecto_ciclo_1_SNA-CONF\src\pages\packing\packing.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_odoojsonrpc__["a" /* odooJsonRpc */]])
    ], PackingPage);
    return PackingPage;
}());

//# sourceMappingURL=packing.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransferViewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_odoojsonrpc__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_utils__ = __webpack_require__(126);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the TransferViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TransferViewPage = /** @class */ (function () {
    function TransferViewPage(navCtrl, navParams, odooRpc, utils) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.odooRpc = odooRpc;
        this.utils = utils;
        this.qty_done = 0;
        this.idMovesList = [];
        this.productList = [];
        this.detailList = [];
        this.transf_id = this.navParams.get("id");
        this.state = this.navParams.get("state");
        this.ionViewDidLoad();
    }
    TransferViewPage.prototype.check = function () {
        if (this.state === "Hecho" || this.state === "Cancelado") {
            return true;
        }
        return false;
    };
    TransferViewPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.odooRpc.obtenerDetallesDePedido(this.transf_id).then(function (res) {
            _this.detailList = [{
                    name: JSON.parse(res._body)["result"].records[0].name,
                    client: JSON.parse(res._body)["result"].records[0].partner_id[1],
                    state: _this.state
                }];
        }).catch(function (err) {
            alert(err);
        });
        this.odooRpc.obtenerProductosDelPedido(this.transf_id).then(function (res) {
            for (var i = 0; i < JSON.parse(res._body)["result"].records.length; i++) {
                _this.idMovesList[i] = JSON.parse(res._body)["result"].records[i].id;
                _this.qty_done = JSON.parse(res._body)["result"].records[i].qty_done;
                _this.productList[i] = {
                    id: JSON.parse(res._body)["result"].records[i].product_id[0],
                    name: JSON.parse(res._body)["result"].records[i].product_id[1],
                    pos: _this.odooRpc.obtenerPosicionDeProducto(JSON.parse(res._body)["result"].records[i].product_id[0]),
                    qty_del: _this.qty_done,
                    qty_order: JSON.parse(res._body)["result"].records[i].ordered_qty
                };
                console.log(JSON.stringify(_this.productList[i]));
            }
        }).catch(function (err) {
            alert(err);
        });
    };
    TransferViewPage.prototype.increment = function (i) {
        this.qty_done++;
        if (this.qty_done > this.productList[i].qty_order) {
            this.qty_done = this.productList[i].qty_order;
            this.productList[i].qty_del = this.qty_done;
        }
        else {
            this.productList[i].qty_del = this.qty_done;
        }
    };
    // private decrement(i){
    //   this.qty_done--;
    //   if(this.qty_done<0){
    //     this.qty_done=0;
    //     this.productList[i].qty_del=this.qty_done; 
    //    }else{
    //   this.productList[i].qty_del=this.qty_done;
    //   }
    // }
    TransferViewPage.prototype.update = function () {
        for (var i = 0; i < this.idMovesList.length; i++) {
            console.log(this.idMovesList[i]);
            this.odooRpc.editarInstancia('stock.move.line', this.idMovesList[i], {
                qty_done: this.qty_done
            });
        }
        // this.odooRpc.validarPedido(this.transf_id);
        // this.navCtrl.push();
    };
    TransferViewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-transfer-view',template:/*ion-inline-start:"C:\Proyectos_Aplicaciones\Proyecto de Ciclo 1_SNA-Conf\proyecto_ciclo_1_SNA-CONF\src\pages\transfer-view\transfer-view.html"*/'<!--\n\n  Generated template for the TransferViewPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-list *ngFor="let items of detailList">\n\n    <ion-item>\n\n      <h2>Nombre: {{items.name}}</h2>\n\n    </ion-item>\n\n    <ion-item>\n\n      <h2>Estado: {{items.state}}</h2>\n\n    </ion-item>\n\n    <ion-item>\n\n      <h2>Cliente: {{items.client}}</h2>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-list *ngFor="let prods of productList; let i = index">\n\n        <ion-item>\n\n          <h2>Nombre del Producto:</h2>\n\n          <h2>{{prods.name}}</h2>\n\n          <h2>Ubicación del Producto:</h2>\n\n          <p>{{prods.pos}}</p>\n\n          <h2>-----------------------------------------------------</h2>\n\n          <div>\n\n            <p>Cantidad para entregar:</p>\n\n            <ion-row>\n\n              <!-- <ion-col>\n\n                <ion-icon name="add-circle" (click)="increment(i)" class="larger"></ion-icon>\n\n              </ion-col> -->\n\n              <ion-col>\n\n                <p class="larger">{{prods.qty_del}}</p>\n\n              </ion-col>\n\n              <!-- <ion-col>\n\n                <ion-icon name="remove-circle" (click)="decrement(i)" class="larger"></ion-icon>\n\n              </ion-col> -->\n\n            </ion-row>\n\n            <p>Cantidad pedida</p>\n\n            <p class="larger">{{prods.qty_order}}</p>\n\n          </div>\n\n        </ion-item>\n\n        <form>\n\n          <ion-label type="text" placeholder="Referencia"></ion-label>\n\n          <div [hidden]=true>\n\n            <button ion-button (click)="increment(i)">\n\n            </button>\n\n          </div>\n\n        </form>\n\n      </ion-list>\n\n    </ion-item>\n\n  </ion-list>\n\n  <div [hidden]="check()">\n\n    <button ion-button block round outline color="secondary" (click)="update()">\n\n      Enviar y generar factura\n\n    </button>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Proyectos_Aplicaciones\Proyecto de Ciclo 1_SNA-Conf\proyecto_ciclo_1_SNA-CONF\src\pages\transfer-view\transfer-view.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_odoojsonrpc__["a" /* odooJsonRpc */], __WEBPACK_IMPORTED_MODULE_3__services_utils__["a" /* Utils */]])
    ], TransferViewPage);
    return TransferViewPage;
}());

//# sourceMappingURL=transfer-view.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransfersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_odoojsonrpc__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__transfer_view_transfer_view__ = __webpack_require__(151);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the TransfersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TransfersPage = /** @class */ (function () {
    function TransfersPage(navCtrl, navParams, odooRpc) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.odooRpc = odooRpc;
        this.stateAux = "";
        this.hechosycancelados = "Si";
        this.transfers = [];
        this.display();
    }
    TransfersPage.prototype.display = function () {
        var _this = this;
        var cont = 0;
        var transf = [];
        this.odooRpc.obtenerPedidosPickDeSalida().then(function (res) {
            for (var i = 0; i < JSON.parse(res._body)["result"].records.length; i++) {
                switch (String(JSON.parse(res._body)["result"].records[i].state)) {
                    case 'done':
                        _this.stateAux = "Hecho";
                        break;
                    case 'draft':
                        _this.stateAux = "Borrador";
                        break;
                    case 'waiting':
                        _this.stateAux = "En Espera";
                        break;
                    case 'partially_avaiable':
                        _this.stateAux = "Disponible Parcialmente";
                        break;
                    case 'assigned':
                        _this.stateAux = "Disponible";
                        break;
                    case 'cancel':
                        _this.stateAux = "Cancelado";
                        break;
                }
                if (_this.stateAux === "Hecho" || _this.stateAux === "Cancelado") {
                    if (_this.hechosycancelados === "Si") {
                        transf[cont] = {
                            id: Number(JSON.parse(res._body)["result"].records[i].id),
                            name: String(JSON.parse(res._body)["result"].records[i].name),
                            state: _this.stateAux
                        };
                        cont++;
                    }
                    else if (_this.hechosycancelados === "No") { }
                }
                else {
                    transf[cont] = {
                        id: Number(JSON.parse(res._body)["result"].records[i].id),
                        name: String(JSON.parse(res._body)["result"].records[i].name),
                        state: _this.stateAux
                    };
                    cont++;
                }
            }
            _this.transfers = transf;
        }).catch(function (err) {
            alert(err);
        });
    };
    TransfersPage.prototype.view = function (index) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__transfer_view_transfer_view__["a" /* TransferViewPage */], {
            id: this.transfers[index].id,
            state: this.transfers[index].state
        });
    };
    TransfersPage.prototype.valueOfOption = function () {
        console.log(this.hechosycancelados);
        this.display();
    };
    TransfersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-transfers',template:/*ion-inline-start:"C:\Proyectos_Aplicaciones\Proyecto de Ciclo 1_SNA-Conf\proyecto_ciclo_1_SNA-CONF\src\pages\transfers\transfers.html"*/'<!--\n\n  Generated template for the TransfersPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="secondary">\n\n    <ion-title>Pedidos</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-item>\n\n    <ion-label>Mostrar Hechos y Cancelados:</ion-label>\n\n    <ion-select [(ngModel)]="hechosycancelados" (ionChange)="valueOfOption()">\n\n      <ion-option value="Si">Si</ion-option>\n\n      <ion-option value="No">No</ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n  <ion-list *ngFor="let items of transfers;let i=index">\n\n    <ion-item (click)="view(i)">\n\n      <h2>Nombre: {{items.name}}</h2>\n\n      <h3>Estado: {{items.state}}</h3>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Proyectos_Aplicaciones\Proyecto de Ciclo 1_SNA-Conf\proyecto_ciclo_1_SNA-CONF\src\pages\transfers\transfers.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_odoojsonrpc__["a" /* odooJsonRpc */]])
    ], TransfersPage);
    return TransfersPage;
}());

//# sourceMappingURL=transfers.js.map

/***/ }),

/***/ 163:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 163;

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/packing/packing.module": [
		678,
		2
	],
	"../pages/transfer-view/transfer-view.module": [
		679,
		1
	],
	"../pages/transfers/transfers.module": [
		680,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 209;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transfers_transfers__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__log_in_log_in__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__packing_packing__ = __webpack_require__(150);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        // // sets an idle timeout of 5 seconds, for testing purposes.
        // idle.setIdle(5);
        // // sets a timeout period of 5 seconds. after 10 seconds of inactivity, the user will be considered timed out.
        // idle.setTimeout(5);
        // // sets the default interrupts, in this case, things like clicks, scrolls, touches to the document
        // idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);
        this.navCtrl = navCtrl;
        this.idleState = 'Not started.';
        this.timedOut = false;
        this.lastPing = null;
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
    HomePage.prototype.toServeTransfers = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__transfers_transfers__["a" /* TransfersPage */]);
    };
    HomePage.prototype.toPackTransfers = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__packing_packing__["a" /* PackingPage */]);
    };
    HomePage.prototype.logOut = function () {
        localStorage.removeItem("token");
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__log_in_log_in__["a" /* LogInPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Proyectos_Aplicaciones\Proyecto de Ciclo 1_SNA-Conf\proyecto_ciclo_1_SNA-CONF\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <ion-row>\n      <button ion-button icon-only (click)="logOut()" color="dark">\n        <ion-icon name="log-out"></ion-icon>\n      </button>\n      <ion-title align="center">\n        Página Principal\n      </ion-title>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-row>\n    <button ion-button block large color="orange">\n      Ver Pedidos Entrada (No implementado)\n    </button>\n  </ion-row>\n  <ion-row>\n    <button ion-button block large color="secondary" (click)="toServeTransfers()">\n      Ver Pedidos Salida\n    </button>\n  </ion-row>\n  <ion-row>\n    <button ion-button block large color="primary" (click)="toPackTransfers()">\n      Empaquetar\n    </button>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"C:\Proyectos_Aplicaciones\Proyecto de Ciclo 1_SNA-Conf\proyecto_ciclo_1_SNA-CONF\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(353);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(677);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_transfers_transfers__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_odoojsonrpc__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_log_in_log_in__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_transfer_view_transfer_view__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_packing_packing__ = __webpack_require__(150);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// import {
//   NgIdleKeepaliveModule
// } from '@ng-idle/keepalive';







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_log_in_log_in__["a" /* LogInPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_transfers_transfers__["a" /* TransfersPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_transfer_view_transfer_view__["a" /* TransferViewPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_packing_packing__["a" /* PackingPage */]
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/packing/packing.module#PackingPageModule', name: 'PackingPage', segment: 'packing', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/transfer-view/transfer-view.module#TransferViewPageModule', name: 'TransferViewPage', segment: 'transfer-view', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/transfers/transfers.module#TransfersPageModule', name: 'TransfersPage', segment: 'transfers', priority: 'low', defaultHistory: [] }
                    ]
                })],
            // , NgIdleKeepaliveModule
            // ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_log_in_log_in__["a" /* LogInPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_transfers_transfers__["a" /* TransfersPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_transfer_view_transfer_view__["a" /* TransferViewPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_packing_packing__["a" /* PackingPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_9__services_odoojsonrpc__["a" /* odooJsonRpc */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */],
                    useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicErrorHandler */]
                }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return odooJsonRpc; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var odooJsonRpc = /** @class */ (function () {
    function odooJsonRpc(http) {
        this.http = http;
        this.odoo_api = "http://192.168.1.36:8069"; //Dirección Ip donde está la API de Odoo
        this.odoo_db = "prueba"; //Nombre de la base de datos a acceder en Odoo
        this.http = http;
    }
    // Inicio de sesión//
    /**
     * @param email Identidicador para el inicio de sesión principal.
     * @param contraseña Contraseña asosciada al identificador.
     */
    odooJsonRpc.prototype.inicioDeSesion = function (email, contraseña) {
        var parametros_inicio_sesión = {
            db: this.odoo_db,
            login: email,
            password: contraseña,
            base_location: this.odoo_api,
            context: {} //Se le pasa un contexto vacio desde la aplicacion para iniciar la sesión;
        };
        var respuesta = this.enviarPropuesta("/web/session/authenticate", parametros_inicio_sesión); // Almacenamos la respuesta de la API
        respuesta.then(function (res) {
            if (Number(JSON.parse(res._body)["result"].partner_id)) {
                var contexto_de_usuario = JSON.parse(res._body)["result"];
                contexto_de_usuario.password = contraseña;
                localStorage.setItem("token", JSON.stringify(contexto_de_usuario)); // Creamos una instancia de el contexto de usuario en un token para diferentes consultas
            }
        });
        return respuesta;
    };
    //---------------Metodo necesario para enviar las propuestas------------------//
    /**
     *
     * @param urlDeMetodo Esta variable es la extension de odoo_api (la direccion IP donde se encuentra la API) única para cada tipo de acción a realizar
     * @param parametros Variable que contiene parametros de cada metodo para enviar a la API de Odoo
     */
    odooJsonRpc.prototype.enviarPropuesta = function (urlDeMetodo, parametros) {
        var cuerpo_de_la_propuesta = {
            params: parametros
        };
        var cabecera_de_la_propuesta = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json; charset=utf-8'
        });
        return this.http.post(this.odoo_api + urlDeMetodo, cuerpo_de_la_propuesta, {
            headers: cabecera_de_la_propuesta
        }).toPromise();
    };
    //---------------Metodo CRUD : Instancias de modelos de Odoo------------------//
    /**
     *
     * @param modelo Modelo del cual crearemos la instancia
     * @param campos Campos requeridos para realizar la acción
     */
    odooJsonRpc.prototype.crearInstancia = function (modelo, campos) {
        var argumentos = [campos];
        return this.llamadaAlMetodo(modelo, "create", argumentos, null);
    };
    /**
     * @param modelo Modelo del cual leeremos la instancia
     * @param condicion Podemos crear una condicion usando este patron: '[[campo,operacion,valor]]' ------>
     *                  Ej: [['id','=',num]]
     * @param campos Campos que recoger de la lectura
     * @param limite Limite de valores a recoger
     * @param intervalo Intervalos en los que se muestran la respuesta
     * @param orden Orden en el que se muestran la respuesta
     */
    odooJsonRpc.prototype.leerInstancia = function (modelo, condicion, campos, limite, intervalo, orden) {
        var parametros = {
            model: modelo,
            fields: campos,
            domain: condicion,
            offset: intervalo,
            limit: limite,
            sort: orden,
            context: this.obtenerContextoDeUsuario()
        };
        return this.enviarPropuesta("/web/dataset/search_read", parametros);
    };
    /**
     * @param modelo Modelo del que editaremos la instancia
     * @param identificador Id de la instancia a editar
     * @param campos Campos de la instancia a editar
     *              (e.j)
     *              let argumentos = {
     *                 "name": "Vlp"
     *              }
     */
    odooJsonRpc.prototype.editarInstancia = function (modelo, identificador, campos) {
        var argumentos = [
            [identificador], campos
        ];
        return this.llamadaAlMetodo(modelo, "write", argumentos, null);
    };
    /**
     *
     * @param modelo Modelo del que borraremos la instancia
     * @param identificador Id de la intancia a borrar
     */
    odooJsonRpc.prototype.borrarInstancia = function (modelo, identificador) {
        var argumentos = [identificador];
        return this.llamadaAlMetodo(modelo, "unlink", argumentos, null);
    };
    //---------------Metodo LLamada a metodos del modelo y obtener el contexto ---IMPORTANTE--- ------------------//
    /**
     *
     * @param modelo Es el modelo sobre el cual realizaremos el método
     * @param metodo El metodo es una función definida por Odoo
     *                  en cada modelo de sus modulos, cada uno consta de una gran variedad y
     *                  estos realizan todo tipo de acciones sobre las instancias de los mismo
     * @param argumentos Son los campos necesarios que el modulo requiere para cada acción
     * @param objeto Son necesarios en algunos metodos para cumplimentar los metodos a realizar
     */
    odooJsonRpc.prototype.llamadaAlMetodo = function (modelo, metodo, argumentos, objeto) {
        objeto = objeto || {}; //El objeto se inicializa en si mismo o vacio depende de lo si llega por parametro o no
        var parametros = {
            model: modelo,
            method: metodo,
            args: argumentos,
            kwargs: objeto == false ? {} : objeto,
            context: this.obtenerContextoDeUsuario()
        };
        return this.enviarPropuesta("/web/dataset/call_kw", parametros);
    };
    /**
     * Este método obtiene un token, creado a la hora de iniciar sesión, que servirá como identificación a Odoo de quien está realizando las acciones.
     */
    odooJsonRpc.prototype.obtenerContextoDeUsuario = function () {
        var importar_token_de_contexto = localStorage.getItem("token");
        var datos_del_token = JSON.parse(importar_token_de_contexto);
        var contexto_del_usuario = datos_del_token["user_context"];
        return contexto_del_usuario;
    };
    //---------------Métodos de la aplicación------------------//
    /**
     * Obtiene todos los pedidos pendientes a recoger de peticiones de ventas
     */
    odooJsonRpc.prototype.obtenerPedidosPickDeSalida = function () {
        var condicion = [
            ['picking_type_id', '=', 3]
        ];
        return this.leerInstancia('stock.picking', condicion, [], 0, 0, "");
    };
    /**
     * Obtiene todos los pedidos pendientes a empaquetar de peticiones de ventas
     */
    odooJsonRpc.prototype.obtenerPedidosPackDeSalida = function () {
        var condicion = [
            ['picking_type_id', '=', 4]
        ];
        return this.leerInstancia('stock.picking', condicion, [], 0, 0, "");
    };
    /**
     *
     * @param id Identidicador del pedido del cual obtendremos los detalles
     */
    odooJsonRpc.prototype.obtenerDetallesDePedido = function (id) {
        var condicion = [
            ['id', '=', id]
        ];
        return this.leerInstancia('stock.picking', condicion, [], 0, 0, "");
    };
    /**
     *
     * @param id Identificador del pedido para obtener los productos
     */
    odooJsonRpc.prototype.obtenerProductosDelPedido = function (id) {
        var condicion = [
            ['picking_id', '=', id]
        ];
        return this.leerInstancia('stock.move.line', condicion, [], 0, 0, "");
    };
    odooJsonRpc.prototype.obtenerPosicionDeProducto = function (id) {
        var _this = this;
        var condicion = [
            ['id', '=', id]
        ];
        var posicion_prod = '';
        this.leerInstancia('product.template', condicion, [], 0, 0, "").then(function (res) {
            for (var i = 0; i < JSON.parse(res._body)["result"].records[0].ub2.length; i++) {
                var id_ub = JSON.parse(res._body)["result"].records[0].ub2[i];
                _this.leerInstancia('posicionamientoinventariopl.placeholder', [['id', '=', id_ub]], [], 0, 0, '').then(function (res) {
                    posicion_prod += JSON.parse(res._body)["result"].records[0].code + ',' + '\n';
                });
            }
        });
        return posicion_prod;
    };
    /**
     *
     * @param id Identificador del pedido a validar
     */
    odooJsonRpc.prototype.validarPedido = function (id) {
    };
    odooJsonRpc = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], odooJsonRpc);
    return odooJsonRpc;
}());

//# sourceMappingURL=odoojsonrpc.js.map

/***/ }),

/***/ 677:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_log_in_log_in__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_odoojsonrpc__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_utils__ = __webpack_require__(126);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_log_in_log_in__["a" /* LogInPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Proyectos_Aplicaciones\Proyecto de Ciclo 1_SNA-Conf\proyecto_ciclo_1_SNA-CONF\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Proyectos_Aplicaciones\Proyecto de Ciclo 1_SNA-Conf\proyecto_ciclo_1_SNA-CONF\src\app\app.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_5__services_odoojsonrpc__["a" /* odooJsonRpc */], __WEBPACK_IMPORTED_MODULE_6__services_utils__["a" /* Utils */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[348]);
//# sourceMappingURL=main.js.map