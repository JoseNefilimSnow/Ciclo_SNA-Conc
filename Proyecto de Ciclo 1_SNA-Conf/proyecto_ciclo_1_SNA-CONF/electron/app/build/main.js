webpackJsonp([2],{

/***/ 126:
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

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogInPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_odoojsonrpc__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_utils__ = __webpack_require__(126);
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
        this.odooUrl = "http://172.18.8.25:8069";
        this.selectedDatabase = "ValperApp";
    }
    LogInPage.prototype.reinit = function () {
        this.odooRpc.init({
            odoo_server: this.odooUrl,
            http_auth: "username:password"
        });
    };
    LogInPage.prototype.login = function () {
        var _this = this;
        this.reinit();
        this.utils.presentLoading("Iniciando Sesión", 0, true);
        this.odooRpc
            .login(this.selectedDatabase, this.email, this.password)
            .then(function (res) {
            console.log(JSON.parse(res._body));
            if (Number(JSON.parse(res._body)["result"].partner_id)) {
                var logiData = JSON.parse(res._body)["result"];
                logiData.password = _this.password;
                localStorage.setItem("token", JSON.stringify(logiData));
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
        this.reinit();
        this.utils.presentLoading("Iniciando Sesión", 0, true);
        this.odooRpc
            .login(this.selectedDatabase, "admin@prueba.com", "prueba")
            .then(function (res) {
            console.log(JSON.parse(res._body));
            if (Number(JSON.parse(res._body)["result"].partner_id)) {
                var logiData = JSON.parse(res._body)["result"];
                logiData.password = _this.password;
                localStorage.setItem("token", JSON.stringify(logiData));
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
    LogInPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-log-in',template:/*ion-inline-start:"C:\Proyectos_Aplicaciones\Proyecto de Ciclo 1_SNA-Conf\proyecto_ciclo_1_SNA-CONF\src\pages\log-in\log-in.html"*/'<!--\n  Generated template for the LogInPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Inicio de Sesión</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div text-center>\n    <img src="assets/imgs/valper.jpg" alt="No Image" />\n  </div>\n  <ion-card>\n    <div>\n      <form (ngSubmit)="login()" #registerForm="ngForm">\n        <div class="spacer" style="height: 10px;"></div>\n\n        <ion-item class="border-box">\n          <ion-input type="email" placeholder="Usuario(Email)" [(ngModel)]="email" name="email" required></ion-input>\n        </ion-item>\n        <div class="spacer" style="height: 10px;"></div>\n\n        <ion-item class="border-box">\n          <ion-input type="password" [(ngModel)]="password" name="pass" placeholder="Contraseña" required></ion-input>\n        </ion-item>\n        <div class="spacer" style="height: 10px;"></div>\n        <button ion-button block round outline type="submit">\n          Iniciar Sesión\n        </button>\n      </form>\n      <button ion-button block round outline color="danger" (click)="wallJumper()">\n          Dev: Inicio de Sesion\n        </button>\n    </div>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Proyectos_Aplicaciones\Proyecto de Ciclo 1_SNA-Conf\proyecto_ciclo_1_SNA-CONF\src\pages\log-in\log-in.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__services_odoojsonrpc__["a" /* OdooJsonRpc */],
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransfersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_odoojsonrpc__ = __webpack_require__(73);
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
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.odooRpc = odooRpc;
        this.stateAux = "";
        this.transfers = [];
        this.odooRpc.getTransfersIn().then(function (res) {
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
                _this.transfers[i] = {
                    id: Number(JSON.parse(res._body)["result"].records[i].id),
                    name: String(JSON.parse(res._body)["result"].records[i].name),
                    state: _this.stateAux
                };
            }
        }).catch(function (err) {
            alert(err);
        });
        this.changeStatusColor();
    }
    TransfersPage.prototype.view = function (index) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__transfer_view_transfer_view__["a" /* TransferViewPage */], {
            id: this.transfers[index].id
        });
    };
    TransfersPage.prototype.changeStatusColor = function () {
        switch (this.stateAux) {
            case 'Hecho':
                this.statusColor = "secondary";
                break;
            case 'Borrador':
                this.statusColor = "dark";
                break;
            case 'En Espera':
                this.statusColor = "yellow";
                break;
            case 'Disponible Parcialmente':
                this.statusColor = "purple";
                break;
            case 'Disponible':
                this.statusColor = "primary";
                break;
            case 'Cancelado':
                this.statusColor = "danger";
                break;
        }
    };
    TransfersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-transfers',template:/*ion-inline-start:"C:\Proyectos_Aplicaciones\Proyecto de Ciclo 1_SNA-Conf\proyecto_ciclo_1_SNA-CONF\src\pages\transfers\transfers.html"*/'<!--\n  Generated template for the TransfersPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="secondary">\n    <ion-title>Pedidos</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list *ngFor="let items of transfers;let i=index">\n    <ion-item (click)="view(i)">\n      <h2>Nombre: {{items.name}}</h2>\n      <h3>Estado: {{items.state}}</h3>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Proyectos_Aplicaciones\Proyecto de Ciclo 1_SNA-Conf\proyecto_ciclo_1_SNA-CONF\src\pages\transfers\transfers.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_odoojsonrpc__["a" /* OdooJsonRpc */]])
    ], TransfersPage);
    return TransfersPage;
}());

//# sourceMappingURL=transfers.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransferViewPage; });
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


/**
 * Generated class for the TransferViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TransferViewPage = /** @class */ (function () {
    function TransferViewPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TransferViewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TransferViewPage');
    };
    TransferViewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-transfer-view',template:/*ion-inline-start:"C:\Proyectos_Aplicaciones\Proyecto de Ciclo 1_SNA-Conf\proyecto_ciclo_1_SNA-CONF\src\pages\transfer-view\transfer-view.html"*/'<!--\n  Generated template for the TransferViewPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title></ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Proyectos_Aplicaciones\Proyecto de Ciclo 1_SNA-Conf\proyecto_ciclo_1_SNA-CONF\src\pages\transfer-view\transfer-view.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], TransferViewPage);
    return TransferViewPage;
}());

//# sourceMappingURL=transfer-view.js.map

/***/ }),

/***/ 162:
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
webpackEmptyAsyncContext.id = 162;

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/transfer-view/transfer-view.module": [
		678,
		1
	],
	"../pages/transfers/transfers.module": [
		677,
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
webpackAsyncContext.id = 208;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transfers_transfers__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__log_in_log_in__ = __webpack_require__(149);
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
    HomePage.prototype.logOut = function () {
        localStorage.removeItem("token");
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__log_in_log_in__["a" /* LogInPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Proyectos_Aplicaciones\Proyecto de Ciclo 1_SNA-Conf\proyecto_ciclo_1_SNA-CONF\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <ion-row>\n      <button ion-button icon-only (click)="logOut()" color="dark">\n        <ion-icon name="log-out"></ion-icon>\n      </button>\n      <ion-title align="center">\n        Página Principal\n      </ion-title>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-row>\n    <button ion-button block large color="secondary" (click)="toServeTransfers()">\n      Ver Pedidos\n    </button>\n  </ion-row>\n  <ion-row>\n    <button ion-button block large color="orange">\n      Enviar Pedidos (No implementado)\n    </button>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"C:\Proyectos_Aplicaciones\Proyecto de Ciclo 1_SNA-Conf\proyecto_ciclo_1_SNA-CONF\src\pages\home\home.html"*/
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(676);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_transfers_transfers__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_odoojsonrpc__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_log_in_log_in__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_transfer_view_transfer_view__ = __webpack_require__(151);
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
                __WEBPACK_IMPORTED_MODULE_11__pages_transfer_view_transfer_view__["a" /* TransferViewPage */]
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/transfers/transfers.module#TransfersPageModule', name: 'TransfersPage', segment: 'transfers', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/transfer-view/transfer-view.module#TransferViewPageModule', name: 'TransferViewPage', segment: 'transfer-view', priority: 'low', defaultHistory: [] }
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
                __WEBPACK_IMPORTED_MODULE_11__pages_transfer_view_transfer_view__["a" /* TransferViewPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_9__services_odoojsonrpc__["a" /* OdooJsonRpc */],
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

/***/ 676:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_log_in_log_in__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_odoojsonrpc__ = __webpack_require__(73);
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
            providers: [__WEBPACK_IMPORTED_MODULE_5__services_odoojsonrpc__["a" /* OdooJsonRpc */], __WEBPACK_IMPORTED_MODULE_6__services_utils__["a" /* Utils */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OdooJsonRpc; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OdooJsonRpc = /** @class */ (function () {
    function OdooJsonRpc(http, utils) {
        this.http = http;
        this.utils = utils;
        this.jsonRpcID = 0;
        this.list = "/web/database/list";
        this.get_list = "/web/database/get_list";
        this.jsonrpc = "/jsonrpc";
        this.http = http;
    }
    /**--------------------Métodos de Odoo--------------------- */
    OdooJsonRpc.prototype.init = function (configs) {
        this.odoo_server = configs.odoo_server;
        console.log(this.odoo_server);
        this.http_auth = configs.http_auth || null;
    };
    OdooJsonRpc.prototype.setOdooServer = function (odoo_server) {
        this.odoo_server = odoo_server;
    };
    OdooJsonRpc.prototype.setHttpAuth = function (http_auth) {
        this.http_auth = http_auth;
    };
    /**
     * @param response Error
     */
    OdooJsonRpc.prototype.handleOdooErrors = function (response) {
        var err = response.error.data.message;
        var msg = err.split("\n");
        var errMsg = msg[0];
        this.utils.presentAlert("Error", errMsg, [{
                text: "Ok",
                role: "cancel"
            }]);
    };
    OdooJsonRpc.prototype.handleHttpErrors = function (error) {
        return Promise.reject(error.message || error);
    };
    /**
     * Calls the method of that particular model
     * @param model Nombre del modelo
     * @param method Method name of particular model
     * @param args Array of fields
     * @param kwargs Object
     */
    OdooJsonRpc.prototype.call = function (model, method, args, kwargs) {
        kwargs = kwargs || {};
        var params = {
            model: model,
            method: method,
            args: args,
            kwargs: kwargs == false ? {} : kwargs,
            context: this.getContext()
        };
        return this.sendRequest("/web/dataset/call_kw", params);
    };
    /**
     * Envia una request de JSON a odoo server
     * @param url Url de odoo
     * @param params Objeto
     */
    OdooJsonRpc.prototype.sendRequest = function (url, params) {
        var options = this.buildRequest(params);
        var token = localStorage.getItem("token");
        this.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json; charset=utf-8',
            'access-control-allow-origin': '*',
            'access-control-allow-methods': 'POST,OPTIONS',
            'access-control-allow-headers': 'Content-Type, access-control-allow-origin, accept',
        });
        var result = this.http.post(this.odoo_server + url, options, {
            headers: this.headers
        })
            .toPromise();
        return result;
    };
    /**
     * Construye una request a Odoo
     * @param url Url Odoo
     * @param params Objeto
     */
    OdooJsonRpc.prototype.buildRequest = function (params) {
        this.jsonRpcID += 1;
        return JSON.stringify({
            jsonrpc: "2.0",
            method: "call",
            id: this.jsonRpcID,
            params: params,
        });
    };
    /**
     * Devuelve todos los moulos
     */
    OdooJsonRpc.prototype.modules = function () {
        var params = {
            context: {}
        };
        return this.sendRequest("/web/session/modules", params);
    };
    /**
     * Login a la database
     * @param db Base de datos
     * @param login Usuario
     * @param password contraseña
     */
    OdooJsonRpc.prototype.login = function (db, login, password) {
        var params = {
            db: db,
            login: login,
            password: password,
            base_location: this.odoo_server,
            context: {}
        };
        return this.sendRequest("/web/session/authenticate", params);
    };
    /**---------------------CRUD de Instancias en modelos------------------------- */
    /**
     * Crea una nueva entrada
     * @param model Nombre del modelo
     * @param mArgs Campos y sus valores
     */
    OdooJsonRpc.prototype.createRecord = function (model, mArgs) {
        var args = [mArgs];
        return this.call(model, "create", args, null);
    };
    /**
     * Obtiene una entrada que cumple con las condiciones
     * @param model Nombre del modelo
     * @param domain Condiciones
     *              (e.g) let domain = [
     *                         ["id","=",11]
     *                    ]
     * @param fields Campos a obtener
     *              (e.g) let fields = [
     *                         ["id","name","email"]
     *                    ]
     * @param limit limite
     * @param offset
     * @param sort
     */
    OdooJsonRpc.prototype.getRecord = function (model, domain, fields, limit, offset, sort) {
        var params = {
            model: model,
            fields: fields,
            domain: domain,
            offset: offset,
            limit: limit,
            sort: sort,
            context: this.getContext()
        };
        return this.sendRequest("/web/dataset/search_read", params);
    };
    /**
     * Borra una entrada con id:x
     * @param model Nombre del modelo
     * @param id Id del elemento a borrar
     */
    OdooJsonRpc.prototype.deleteRecord = function (model, id) {
        var mArgs = [id];
        return this.call(model, "unlink", mArgs, null);
    };
    /**
     * Actualiza una entrada con Id:x
     * @param model Nombre del modelo
     * @param id Id del elemento a actualizar
     * @param mArgs Campos a actualizar
     *              (e.g)
     *              let args = {
     *                 "name": "Vlp"
     *              }
     */
    OdooJsonRpc.prototype.updateRecord = function (model, id, mArgs) {
        var args = [
            [id], mArgs
        ];
        return this.call(model, "write", args, null);
    };
    /**------------Fin del CRUD------------------- */
    /**----------------Metodos para el proyecto de Ciclo SNA ------------ */
    OdooJsonRpc.prototype.getTransfersIn = function () {
        var dom = [['picking_type_id', '=', 1]];
        return this.getRecord('stock.picking', dom, [], 0, 0, "");
    };
    /** --------------------Otros metodos utiles ------------------*/
    /**
     * @param model Nombre del modelo
     * @param id Id del dato que quieres cargar
     */
    OdooJsonRpc.prototype.load = function (model, id) {
        var params = {
            model: model,
            id: id,
            fields: [],
            context: this.getContext()
        };
        return this.sendRequest("/web/dataset/load", params);
    };
    OdooJsonRpc.prototype.check = function () {
        var params = {
            context: this.getContext()
        };
        return this.sendRequest("/web/session/check", params);
    };
    /**
     * Destruye la sesion
     */
    OdooJsonRpc.prototype.destroy = function () {
        var params = {
            context: {}
        };
        return this.sendRequest("/web/session/destroy", params);
    };
    /**
     * Reads that perticular fields of that particular ID
     * @param model Nombre del modelo
     * @param id Id del objeto a leer
     * @param mArgs Array de los
     */
    OdooJsonRpc.prototype.read = function (model, id, mArgs) {
        var args = [
            id, mArgs
        ];
        return this.call(model, 'read', args);
    };
    /**
     * Obriene el contexto
     */
    OdooJsonRpc.prototype.getContext = function () {
        var response = localStorage.getItem("token");
        var jsonData = JSON.parse(response);
        var context = jsonData["user_context"];
        return context;
    };
    OdooJsonRpc = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__utils__["a" /* Utils */]])
    ], OdooJsonRpc);
    return OdooJsonRpc;
}());

//# sourceMappingURL=odoojsonrpc.js.map

/***/ })

},[347]);
//# sourceMappingURL=main.js.map