webpackJsonp([0],{

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__client_create_client_create_component__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__client_service__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ClientPage = (function () {
    function ClientPage(clientService, toastCtrl, navCtrl, alertCtrl) {
        this.clientService = clientService;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
    }
    ClientPage.prototype.ngOnInit = function () {
        this.loadAll();
    };
    ClientPage.prototype.loadAll = function () {
        var _this = this;
        this.clientService.findClients().subscribe(function (clients) {
            _this.clients = clients.body;
            var toast = _this.toastCtrl.create({
                message: 'La liste de clients est chargé',
                duration: 3000
            });
            toast.present();
        });
    };
    ClientPage.prototype.createClient = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__client_create_client_create_component__["a" /* ClientCreateComponent */]);
    };
    ClientPage.prototype.editClient = function (id) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__client_create_client_create_component__["a" /* ClientCreateComponent */], { 'id': id });
    };
    ClientPage.prototype.deleteClient = function (id) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Delete Client',
            message: 'Do you agree to delete client: ' + id,
            buttons: [
                {
                    text: 'Disagree',
                    handler: function () {
                        // console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Agree',
                    handler: function () {
                        _this.clientService.deleteClient(id).subscribe(function (response) {
                            _this.clients = _this.clients.filter(function (client) { return client.id != id; });
                            var toast = _this.toastCtrl.create({
                                message: 'Le client est supprimé: ' + id,
                                duration: 3000
                            });
                            toast.present();
                        });
                    }
                }
            ]
        });
        confirm.present();
    };
    ClientPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-client',template:/*ion-inline-start:"/media/akram/stock/akram/enseignement/2018/ionic/workspace/g2/spring_ionic_g2/project/ionic/src/pages/client/client.html"*/`<!--\n  Generated template for the ClientPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>client\n        <button ion-button> \n            <ion-icon name="add" (click)="createClient()"></ion-icon>\n          </button>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-row>\n    <ion-col col-1>\n      <ion-label>ID</ion-label>\n    </ion-col>\n    <ion-col col-1>\n      <ion-label>Nom</ion-label>\n    </ion-col>\n    <ion-col col-1>\n      <ion-label>Prénom</ion-label>\n    </ion-col>\n    <ion-col col-2>\n      <ion-label>Tel</ion-label>\n    </ion-col>\n    <ion-col col-2>\n      <ion-label>Email</ion-label>\n    </ion-col>\n    <ion-col col-2>\n      <ion-label>Message</ion-label>\n    </ion-col>\n    <ion-col col-3>\n      <!-- <ion-icon name="cog"></ion-icon> -->\n      <ion-label>Action</ion-label>\n    </ion-col>\n  </ion-row>\n  <ion-row *ngFor="let client of clients">\n    <ion-col col-1>\n      <ion-label>{{client.id}}</ion-label>\n    </ion-col>\n    <ion-col col-1>\n      <ion-label>{{client.nom}}</ion-label>\n    </ion-col>\n    <ion-col col-1>\n      <ion-label>{{client.prenom}}</ion-label>\n    </ion-col>\n    <ion-col col-2>\n      <ion-label>{{client.tel}}</ion-label>\n    </ion-col>\n    <ion-col col-2>\n      <ion-label>{{client.email}}</ion-label>\n    </ion-col>\n    <ion-col col-2>\n      <ion-label>{{client.message}}</ion-label>\n    </ion-col>\n    <ion-col col-3>\n      <ion-buttons>\n        <button ion-button>\n          <ion-icon name="eye"></ion-icon>\n        </button>\n        <button ion-button>\n          <ion-icon name="create" (click)="editClient(client.id)"></ion-icon>\n        </button>\n        <button ion-button>\n          <ion-icon name="trash" (click)="deleteClient(client.id)"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-col>\n\n\n  </ion-row>\n</ion-content>`/*ion-inline-end:"/media/akram/stock/akram/enseignement/2018/ionic/workspace/g2/spring_ionic_g2/project/ionic/src/pages/client/client.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__client_service__["a" /* ClientService */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */]])
    ], ClientPage);
    return ClientPage;
}());

//# sourceMappingURL=client.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_constants__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(220);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClientService = (function () {
    function ClientService(http) {
        this.http = http;
        this.resourceUrl = __WEBPACK_IMPORTED_MODULE_1__app_app_constants__["a" /* SERVEUR_URL */] + 'api/clients';
    }
    ClientService.prototype.findClients = function () {
        return this.http.
            get(this.resourceUrl, { observe: 'response' });
    };
    ClientService.prototype.createClient = function (client) {
        return this.http.post(this.resourceUrl, client, { observe: 'response' });
    };
    ClientService.prototype.updateClient = function (client) {
        return this.http.put(this.resourceUrl, client, { observe: 'response' });
    };
    ClientService.prototype.findClient = function (id) {
        return this.http.get(this.resourceUrl + "/" + id, { observe: 'response' });
    };
    ClientService.prototype.deleteClient = function (id) {
        return this.http.delete(this.resourceUrl + "/" + id, { observe: 'response' });
    };
    ClientService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], ClientService);
    return ClientService;
    var _a;
}());

//# sourceMappingURL=client.service.js.map

/***/ }),

/***/ 135:
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
webpackEmptyAsyncContext.id = 135;

/***/ }),

/***/ 179:
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
webpackEmptyAsyncContext.id = 179;

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__client_service__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__client_model__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__client__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ClientCreateComponent = (function () {
    function ClientCreateComponent(clientService, navController, navParams, toastCtrl) {
        this.clientService = clientService;
        this.navController = navController;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
    }
    ClientCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.client = new __WEBPACK_IMPORTED_MODULE_3__client_model__["a" /* Client */]();
        var id = this.navParams.get('id');
        // Edit
        if (id !== undefined) {
            this.clientService.findClient(id).subscribe(function (client) {
                _this.client = client.body;
            });
        }
    };
    ClientCreateComponent.prototype.save = function () {
        var _this = this;
        console.log(this.client);
        if (this.client.id === null) {
            this.clientService.createClient(this.client).
                subscribe(function (client) {
                var toast = _this.toastCtrl.create({
                    message: 'Le client est sauvegardé: ' + client.body.id,
                    duration: 3000
                });
                toast.present().then(function () {
                    _this.navController.setRoot(__WEBPACK_IMPORTED_MODULE_4__client__["a" /* ClientPage */]);
                });
            });
        }
        else {
            this.clientService.updateClient(this.client).
                subscribe(function (client) {
                var toast = _this.toastCtrl.create({
                    message: 'Le client est sauvegardé: ' + client.body.id,
                    duration: 3000
                });
                toast.present().then(function () {
                    _this.navController.setRoot(__WEBPACK_IMPORTED_MODULE_4__client__["a" /* ClientPage */]);
                });
            });
        }
    };
    ClientCreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'app-client-create',template:/*ion-inline-start:"/media/akram/stock/akram/enseignement/2018/ionic/workspace/g2/spring_ionic_g2/project/ionic/src/pages/client/client-create/client-create.component.html"*/`<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Create client</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <form name="editForm" #editForm="ngForm"\n   (ngSubmit)="save()" novalidate>\n\n    <ion-list>\n      <ion-item>\n        <ion-label>ID</ion-label>\n        <ion-input name="id" [(ngModel)]="client.id" readonly></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Nom</ion-label>\n        <ion-input name="nom" [(ngModel)]="client.nom" required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Prénom</ion-label>\n        <ion-input name="prenom" [(ngModel)]="client.prenom" required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Tel</ion-label>\n        <ion-input name="tel" [(ngModel)]="client.tel" required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Email</ion-label>\n        <ion-input name="email" [(ngModel)]="client.email"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Message</ion-label>\n        <ion-input name="message" [(ngModel)]="client.message"></ion-input>\n      </ion-item>\n    </ion-list>\n\n    <button ion-button [disabled]="editForm.form.invalid">Save</button>\n  </form>\n\n</ion-content>`/*ion-inline-end:"/media/akram/stock/akram/enseignement/2018/ionic/workspace/g2/spring_ionic_g2/project/ionic/src/pages/client/client-create/client-create.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__client_service__["a" /* ClientService */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* ToastController */]])
    ], ClientCreateComponent);
    return ClientCreateComponent;
}());

//# sourceMappingURL=client-create.component.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/media/akram/stock/akram/enseignement/2018/ionic/workspace/g2/spring_ionic_g2/project/ionic/src/pages/home/home.html"*/`<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Ionic Menu Starter</h3>\n\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n  </p>\n\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n</ion-content>\n`/*ion-inline-end:"/media/akram/stock/akram/enseignement/2018/ionic/workspace/g2/spring_ionic_g2/project/ionic/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/media/akram/stock/akram/enseignement/2018/ionic/workspace/g2/spring_ionic_g2/project/ionic/src/pages/list/list.html"*/`<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n`/*ion-inline-end:"/media/akram/stock/akram/enseignement/2018/ionic/workspace/g2/spring_ionic_g2/project/ionic/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(255);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_client_client_module__ = __webpack_require__(404);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_9__pages_client_client_module__["a" /* ClientPageModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_client_client__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(244);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_0__pages_client_client__["a" /* ClientPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */] },
            { title: 'Client', component: __WEBPACK_IMPORTED_MODULE_0__pages_client_client__["a" /* ClientPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/media/akram/stock/akram/enseignement/2018/ionic/workspace/g2/spring_ionic_g2/project/ionic/src/app/app.html"*/`<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>`/*ion-inline-end:"/media/akram/stock/akram/enseignement/2018/ionic/workspace/g2/spring_ionic_g2/project/ionic/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SERVEUR_URL; });
var SERVEUR_URL = 'http://localhost:8080/';
//# sourceMappingURL=app.constants.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Client; });
var Client = (function () {
    function Client(id, nom, prenom, tel, email, message) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.tel = tel;
        this.email = email;
        this.message = message;
    }
    return Client;
}());

//# sourceMappingURL=client.model.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__client_create_client_create_component__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__client_service__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__client__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ClientPageModule = (function () {
    function ClientPageModule() {
    }
    ClientPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__client__["a" /* ClientPage */],
                __WEBPACK_IMPORTED_MODULE_0__client_create_client_create_component__["a" /* ClientCreateComponent */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_0__client_create_client_create_component__["a" /* ClientCreateComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__client__["a" /* ClientPage */]),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_1__client_service__["a" /* ClientService */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__client_create_client_create_component__["a" /* ClientCreateComponent */]
            ]
        })
    ], ClientPageModule);
    return ClientPageModule;
}());

//# sourceMappingURL=client.module.js.map

/***/ })

},[245]);
//# sourceMappingURL=main.js.map