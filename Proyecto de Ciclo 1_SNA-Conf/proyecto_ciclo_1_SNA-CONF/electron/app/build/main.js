webpackJsonp([2],{

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogInPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_odoojsonrpc__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_utils__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(346);
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
            console.log("ups: " + err);
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

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailledviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_odoojsonrpc__ = __webpack_require__(54);
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
 * Generated class for the DetailledviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailledviewPage = /** @class */ (function () {
    function DetailledviewPage(navCtrl, navParams, odooRPC) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.odooRPC = odooRPC;
        //--- Productos del movimiento ---//
        this.arrayproductos = [];
        this.detalles_movimiento = this.navParams.get("body");
        this.inicializarDatos();
        this.cargarProductos();
    }
    DetailledviewPage.prototype.inicializarDatos = function () {
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
    };
    DetailledviewPage.prototype.cargarProductos = function () {
        var _this = this;
        for (var i = 0; i < this.detalles_movimiento.move_line_ids.length; i++) {
            this.odooRPC.obtener_movimientos_productos(this.detalles_movimiento.move_line_ids[i]).then(function (res) {
                console.log(JSON.parse(res._body));
                _this.cantidad_hecha_producto = JSON.parse(res._body)['result'].records[0].qty_done;
                _this.cantidad_pedida_producto = JSON.parse(res._body)['result'].records[0].ordered_qty;
                var id_prod = JSON.parse(res._body)['result'].records[0].product_id[0];
                _this.odooRPC.obtener_detalles_productos(id_prod).then(function (res) {
                    _this.nombre_producto = JSON.parse(res._body)['result'].records[0].name;
                    _this.ubicacion_producto = JSON.parse(res._body)['result'].records[0].ub[1];
                }).catch(function (err) {
                    alert(err);
                });
            }).catch(function (err) {
                alert(err);
            });
            this.arrayproductos[i] = {
                nombre: this.nombre_producto,
                ubicacion: this.ubicacion_producto,
                cantidad_pedida: this.cantidad_pedida_producto,
                cantidad_hecha: this.cantidad_hecha_producto,
                hecho: false
            };
        }
    };
    DetailledviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-detailledview',template:/*ion-inline-start:"C:\Proyectos_Aplicaciones\Proyecto de Ciclo 1_SNA-Conf\proyecto_ciclo_1_SNA-CONF\src\pages\detailledview\detailledview.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <ion-title>\n      {{nombre_movimiento}}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-item>\n    <ion-label>Documento de Origen: {{origen}}</ion-label>\n  </ion-item>\n  <div [hidden]="esCliente">\n    <ion-item>\n      <ion-label>Proveedor: {{proovedor}}</ion-label>\n    </ion-item>\n  </div>\n  <div [hidden]="esProveedor">\n    <ion-item>\n      <ion-label>Cliente: {{cliente}}</ion-label>\n    </ion-item>\n  </div>\n  <ion-item>\n    <ion-label>Estado: {{estado}}</ion-label>\n  </ion-item>\n  <ion-item>\n    <ion-label>Lista de productos:</ion-label>\n  </ion-item>\n  <ion-item>\n    <ion-list *ngFor=" let item of arrayproductos; let i=index">\n        <ion-label>Nombre: {{item.nombre}}</ion-label>\n        <ion-label>Ubicación: {{item.ubicacion}}</ion-label>\n        <ion-label>Cantidad pedida: {{item.cantidad_pedida}}</ion-label>\n        <ion-label>Cantidad hecha: {{item.cantidad_hecha}}</ion-label>\n    </ion-list>\n  </ion-item>\n</ion-content>\n'/*ion-inline-end:"C:\Proyectos_Aplicaciones\Proyecto de Ciclo 1_SNA-Conf\proyecto_ciclo_1_SNA-CONF\src\pages\detailledview\detailledview.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_odoojsonrpc__["a" /* odooJsonRpc */]])
    ], DetailledviewPage);
    return DetailledviewPage;
}());

//# sourceMappingURL=detailledview.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransfertemplatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_odoojsonrpc__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detailledview_detailledview__ = __webpack_require__(149);
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
 * Generated class for the TransfertemplatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TransfertemplatePage = /** @class */ (function () {
    function TransfertemplatePage(navCtrl, navParams, odooRPC) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.odooRPC = odooRPC;
        this.longitud_de_array = 0;
        this.arraypedidos = [];
        this.picking_id_type = this.navParams.get("id");
        console.log(this.picking_id_type);
        switch (this.picking_id_type) {
            case 1:
                this.titulo = "Entrada de Productos";
                this.ocultar_boton = true;
                break;
            case 3:
                this.titulo = "Recogida de Almacén";
                this.ocultar_boton = false;
                break;
            case 4:
                this.titulo = "Empaquetar";
                this.ocultar_boton = true;
                break;
        }
        this.imprimir_en_pantalla();
    }
    TransfertemplatePage_1 = TransfertemplatePage;
    TransfertemplatePage.prototype.imprimir_en_pantalla = function () {
        var _this = this;
        this.odooRPC.obtener_movimiento_de(this.picking_id_type).then(function (res) {
            var stateAux;
            for (var i = 0; i < JSON.parse(res._body)['result'].records.length; i++) {
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
                _this.arraypedidos[i] =
                    {
                        id: JSON.parse(res._body)['result'].records[i].id,
                        nombre: JSON.parse(res._body)['result'].records[i].name,
                        estado: stateAux
                    };
            }
        }).catch(function (err) {
            alert(err);
        });
    };
    TransfertemplatePage.prototype.ver_mas = function (indice) {
        var _this = this;
        console.log(JSON.stringify(this.arraypedidos[indice]));
        this.odooRPC.obtener_movimiento(this.arraypedidos[indice].id).then(function (res) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__detailledview_detailledview__["a" /* DetailledviewPage */], { body: JSON.parse(res._body)['result'].records[0] });
        });
    };
    TransfertemplatePage.prototype.aEmpaquetar = function () {
        this.navCtrl.push(TransfertemplatePage_1, { id: 4 });
    };
    TransfertemplatePage = TransfertemplatePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-transfertemplate',template:/*ion-inline-start:"C:\Proyectos_Aplicaciones\Proyecto de Ciclo 1_SNA-Conf\proyecto_ciclo_1_SNA-CONF\src\pages\transfertemplate\transfertemplate.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <ion-buttons right [hidden]=ocultar_boton color="primary">\n      <button ion-button large block  (click)="aEmpaquetar()">\n        <ion-icon name="pizza"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>\n      {{titulo}}\n     </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-item>\n    <ion-list *ngFor=" let item of arraypedidos; let i=index">\n      <ion-item (click)="ver_mas(i)">\n        <ion-label>{{item.nombre}}</ion-label>\n        <ion-label>{{item.estado}}</ion-label>\n      </ion-item>\n    </ion-list>\n  </ion-item>\n</ion-content>\n'/*ion-inline-end:"C:\Proyectos_Aplicaciones\Proyecto de Ciclo 1_SNA-Conf\proyecto_ciclo_1_SNA-CONF\src\pages\transfertemplate\transfertemplate.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_odoojsonrpc__["a" /* odooJsonRpc */]])
    ], TransfertemplatePage);
    return TransfertemplatePage;
    var TransfertemplatePage_1;
}());

//# sourceMappingURL=transfertemplate.js.map

/***/ }),

/***/ 161:
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
webpackEmptyAsyncContext.id = 161;

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/detailledview/detailledview.module": [
		677,
		1
	],
	"../pages/transfertemplate/transfertemplate.module": [
		678,
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
webpackAsyncContext.id = 207;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Utils; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
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

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__log_in_log_in__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__transfertemplate_transfertemplate__ = __webpack_require__(150);
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
        this.navCtrl = navCtrl;
        this.idleState = 'Not started.';
        this.timedOut = false;
        this.lastPing = null;
    }
    HomePage.prototype.ver_pedidos = function (id) {
        switch (id) {
            case 1:
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__transfertemplate_transfertemplate__["a" /* TransfertemplatePage */], { id: 1 });
                break;
            case 3:
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__transfertemplate_transfertemplate__["a" /* TransfertemplatePage */], { id: 3 });
                break;
            case 4:
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__transfertemplate_transfertemplate__["a" /* TransfertemplatePage */], { id: 4 });
                break;
        }
    };
    HomePage.prototype.logOut = function () {
        localStorage.removeItem("token");
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__log_in_log_in__["a" /* LogInPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Proyectos_Aplicaciones\Proyecto de Ciclo 1_SNA-Conf\proyecto_ciclo_1_SNA-CONF\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <ion-row>\n      <button ion-button icon-only (click)="logOut()" color="dark">\n        <ion-icon name="log-out"></ion-icon>\n      </button>\n      <ion-title align="center">\n        Página Principal\n      </ion-title>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-row>\n    <button ion-button block large color="orange" (click)="ver_pedidos(1)">\n      Ver Movimientos de Entrada \n    </button>\n  </ion-row>\n  <ion-row>\n    <button ion-button block large color="secondary" (click)="ver_pedidos(3)">\n      Ver Movimientos de Salida\n    </button>\n  </ion-row>\n  <ion-row>\n    <button ion-button block large color="primary" (click)="ver_pedidos(4)">\n      Empaquetar\n    </button>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"C:\Proyectos_Aplicaciones\Proyecto de Ciclo 1_SNA-Conf\proyecto_ciclo_1_SNA-CONF\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(352);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(676);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_odoojsonrpc__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_log_in_log_in__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_transfertemplate_transfertemplate__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_detailledview_detailledview__ = __webpack_require__(149);
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
                __WEBPACK_IMPORTED_MODULE_9__pages_log_in_log_in__["a" /* LogInPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_transfertemplate_transfertemplate__["a" /* TransfertemplatePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_detailledview_detailledview__["a" /* DetailledviewPage */]
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/detailledview/detailledview.module#DetailledviewPageModule', name: 'DetailledviewPage', segment: 'detailledview', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/transfertemplate/transfertemplate.module#TransfertemplatePageModule', name: 'TransfertemplatePage', segment: 'transfertemplate', priority: 'low', defaultHistory: [] }
                    ]
                })],
            // , NgIdleKeepaliveModule
            // ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_log_in_log_in__["a" /* LogInPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_transfertemplate_transfertemplate__["a" /* TransfertemplatePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_detailledview_detailledview__["a" /* DetailledviewPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_8__services_odoojsonrpc__["a" /* odooJsonRpc */],
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

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return odooJsonRpc; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(162);
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
        this.odoo_api = "http://172.18.8.48:8069"; //Dirección Ip donde está la API de Odoo
        this.odoo_db = "ValperApp1"; //Nombre de la base de datos a acceder en Odoo
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
     *
     * @param id Identificador de movimiento
     */
    odooJsonRpc.prototype.obtener_movimiento = function (id) {
        var condicion = [
            ['id', '=', id]
        ];
        return this.leerInstancia('stock.picking', condicion, [], 0, 0, '');
    };
    /**
     *
     * @param picking_type_id Esta variable muestra el tipo de movimieto de almacén que importaremos, por ejemplo:
     *  '3' sera los movimientos de pick o recogida desde el almacen a "zona de servir", 4 el valor de los movimientos a empaquetar
     */
    odooJsonRpc.prototype.obtener_movimiento_de = function (picking_type_id) {
        var condicion = [
            ['picking_type_id', '=', picking_type_id]
        ];
        return this.leerInstancia('stock.picking', condicion, [], 0, 0, '');
    };
    /**
     *
     * @param id Identificación de las lineas de movimiento que corresponden a los movimientos y contienen los productos
     */
    odooJsonRpc.prototype.obtener_movimientos_productos = function (id) {
        var condicion = [['id', '=', id]];
        return this.leerInstancia('stock.move.line', condicion, [], 0, 0, '');
    };
    /**
     *
     * @param id Identificador del producto
     */
    odooJsonRpc.prototype.obtener_detalles_productos = function (id) {
        var condicion = [['id', '=', id]];
        return this.leerInstancia('product.template', condicion, [], 0, 0, '');
    };
    odooJsonRpc = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], odooJsonRpc);
    return odooJsonRpc;
}());

//# sourceMappingURL=odoojsonrpc.js.map

/***/ }),

/***/ 676:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_log_in_log_in__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_odoojsonrpc__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_utils__ = __webpack_require__(345);
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

},[347]);
//# sourceMappingURL=main.js.map