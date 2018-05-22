webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/game/game.module": [
		"./src/app/game/game.module.ts",
		"game.module"
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
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
<<<<<<< HEAD
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService.prototype.jwt = function () {
        var authToken = localStorage.getItem('UnoToken');
        if (authToken) {
            var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'JWT-AuthToken': authToken });
            return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: header });
        }
    };
    ApiService.prototype.getAll = function (path) {
        return this.http.get('/api/' + path, this.jwt()).map(function (response) { return response.json(); });
    };
    ApiService.prototype.get = function (path, data) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        for (var key in data) {
            params.set(key, data[key]);
        }
        var req = this.jwt();
        req['search'] = params;
        return this.http.get('/api/' + path, req).map(function (response) { return response.json(); });
    };
    ApiService.prototype.post = function (path, data) {
        return this.http.post('/api/' + path, data, this.jwt()).map(function (response) { return response.json(); });
    };
    ApiService.prototype.put = function (path, data) {
        return this.http.put('/api/' + path, data, this.jwt()).map(function (response) { return response.json(); });
    };
    ApiService.prototype.delete = function (path, data) {
        return this.http.delete('/api/' + path + data, this.jwt()).map(function (response) { return response.json(); });
    };
    ApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ApiService);
    return ApiService;
}());

=======
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService.prototype.jwt = function () {
        var authToken = localStorage.getItem('UnoToken');
        if (authToken) {
            var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'JWT-AuthToken': authToken });
            return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: header });
        }
    };
    ApiService.prototype.getAll = function (path) {
        return this.http.get('/api/' + path, this.jwt()).map(function (response) { return response.json(); });
    };
    ApiService.prototype.get = function (path, data) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        for (var key in data) {
            params.set(key, data[key]);
        }
        var req = this.jwt();
        req['search'] = params;
        return this.http.get('/api/' + path, req).map(function (response) { return response.json(); });
    };
    ApiService.prototype.post = function (path, data) {
        return this.http.post('/api/' + path, data, this.jwt()).map(function (response) { return response.json(); });
    };
    ApiService.prototype.put = function (path, data) {
        return this.http.put('/api/' + path, data, this.jwt()).map(function (response) { return response.json(); });
    };
    ApiService.prototype.delete = function (path, data) {
        return this.http.delete('/api/' + path + data, this.jwt()).map(function (response) { return response.json(); });
    };
    ApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ApiService);
    return ApiService;
}());

>>>>>>> 2cf866e831323375498409332ac3b4c0fc02454c


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"full-screen\">\n\t<router-outlet></router-outlet>\n  </div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
<<<<<<< HEAD
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());

=======
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());

>>>>>>> 2cf866e831323375498409332ac3b4c0fc02454c


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__api_service__ = __webpack_require__("./src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__socket_service__ = __webpack_require__("./src/app/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_module__ = __webpack_require__("./src/app/home/home.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
<<<<<<< HEAD
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_9__app_routing__["a" /* AppRouting */],
                __WEBPACK_IMPORTED_MODULE_8__home_home_module__["a" /* HomeModule */]
            ],
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_4__angular_common__["g" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_4__angular_common__["d" /* HashLocationStrategy */] }, __WEBPACK_IMPORTED_MODULE_6__api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_7__socket_service__["a" /* SocketService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

=======
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_9__app_routing__["a" /* AppRouting */],
                __WEBPACK_IMPORTED_MODULE_8__home_home_module__["a" /* HomeModule */]
            ],
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_4__angular_common__["g" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_4__angular_common__["d" /* HashLocationStrategy */] }, __WEBPACK_IMPORTED_MODULE_6__api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_7__socket_service__["a" /* SocketService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

>>>>>>> 2cf866e831323375498409332ac3b4c0fc02454c


/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
<<<<<<< HEAD
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    { path: 'game', loadChildren: 'app/game/game.module#GameModule' },
];
var AppRouting = /** @class */ (function () {
    function AppRouting() {
    }
    AppRouting = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRouting);
    return AppRouting;
}());

=======
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    { path: 'game', loadChildren: 'app/game/game.module#GameModule' },
];
var AppRouting = /** @class */ (function () {
    function AppRouting() {
    }
    AppRouting = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRouting);
    return AppRouting;
}());

>>>>>>> 2cf866e831323375498409332ac3b4c0fc02454c


/***/ }),

/***/ "./src/app/home/forgot/forgot.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/forgot/forgot.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"full-screen\" style=\"display: flex;flex-flow: row;\">\n    <div class=\"container left_part\">\n      <nav class=\"navbar navbar-light\">\n        <a routerLink=\"\" class=\"navbar-brand\">\n          <img src=\"assets/logo.png\" width=\"30\" height=\"30\" class=\"d-inline-block align-top\" alt=\"\">\n          Pokr\n        </a>\n      </nav>\n      <div class=\"container\" style=\"padding-top: 20px;\">\n        <div class=\"row align-center\"><span style=\"font-weight: 300;font-size: 2.5rem;\">Forgot password</span></div>\n        <form (ngSubmit)=\"forgot()\">\n          <div class=\"form-group\">\n            <label for=\"companyName\">Email</label>\n            <input type=\"email\" class=\"form-control\" id=\"companyName\" placeholder=\"Enter your email...\" required>\n          </div>\n          <div class=\"form-group text-xs-center\" style=\"padding-top: 10px;\">\n            <button type=\"submit\" class=\"btn btn-success\">Submit</button>\n          </div>\n          <div class=\"form-group text-xs-center\">\n            <span>Remember your password? <a routerLink=\"/login\">Login</a></span>\n          </div>\n        </form>\n        <div class=\"alert alert-success\" role=\"alert\" style=\"text-align: center;margin-top: 15px;\" *ngIf=\"showMessage\">\n          Reset link sent to {{email}}\n        </div>\n      </div>\n    </div>\n    <div class=\"container\" style=\"background: #21b2fe\">\n      <nav class=\"navbar navbar-dark\" style=\"color: #ffffff !important;\">\n        <span class=\"navbar-text float-xs-right\">\n          Remember your password?\n          <a routerLink=\"/login\" style=\"color: #ffffff !important;\" class=\"btn btn-outline-success\">Login</a>\n        </span>\n      </nav>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/home/forgot/forgot.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
<<<<<<< HEAD
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ForgotComponent = /** @class */ (function () {
    function ForgotComponent() {
    }
    ForgotComponent.prototype.ngOnInit = function () {
    };
    ForgotComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-forgot',
            template: __webpack_require__("./src/app/home/forgot/forgot.component.html"),
            styles: [__webpack_require__("./src/app/home/forgot/forgot.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ForgotComponent);
    return ForgotComponent;
}());

=======
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ForgotComponent = /** @class */ (function () {
    function ForgotComponent() {
    }
    ForgotComponent.prototype.ngOnInit = function () {
    };
    ForgotComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-forgot',
            template: __webpack_require__("./src/app/home/forgot/forgot.component.html"),
            styles: [__webpack_require__("./src/app/home/forgot/forgot.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ForgotComponent);
    return ForgotComponent;
}());

>>>>>>> 2cf866e831323375498409332ac3b4c0fc02454c


/***/ }),

/***/ "./src/app/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_routing__ = __webpack_require__("./src/app/home/home.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__main_main_component__ = __webpack_require__("./src/app/home/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_register_component__ = __webpack_require__("./src/app/home/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__verify_verify_component__ = __webpack_require__("./src/app/home/verify/verify.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__("./src/app/home/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__reset_reset_component__ = __webpack_require__("./src/app/home/reset/reset.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__forgot_forgot_component__ = __webpack_require__("./src/app/home/forgot/forgot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home_component__ = __webpack_require__("./src/app/home/home/home.component.ts");
<<<<<<< HEAD
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__home_routing__["a" /* HomeRouting */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__main_main_component__["a" /* MainComponent */], __WEBPACK_IMPORTED_MODULE_5__register_register_component__["a" /* RegisterComponent */], __WEBPACK_IMPORTED_MODULE_6__verify_verify_component__["a" /* VerifyComponent */], __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_8__reset_reset_component__["a" /* ResetComponent */], __WEBPACK_IMPORTED_MODULE_9__forgot_forgot_component__["a" /* ForgotComponent */], __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */]]
        })
    ], HomeModule);
    return HomeModule;
}());

=======
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__home_routing__["a" /* HomeRouting */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__main_main_component__["a" /* MainComponent */], __WEBPACK_IMPORTED_MODULE_5__register_register_component__["a" /* RegisterComponent */], __WEBPACK_IMPORTED_MODULE_6__verify_verify_component__["a" /* VerifyComponent */], __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_8__reset_reset_component__["a" /* ResetComponent */], __WEBPACK_IMPORTED_MODULE_9__forgot_forgot_component__["a" /* ForgotComponent */], __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */]]
        })
    ], HomeModule);
    return HomeModule;
}());

>>>>>>> 2cf866e831323375498409332ac3b4c0fc02454c


/***/ }),

/***/ "./src/app/home/home.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_main_component__ = __webpack_require__("./src/app/home/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register_component__ = __webpack_require__("./src/app/home/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__verify_verify_component__ = __webpack_require__("./src/app/home/verify/verify.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__("./src/app/home/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__reset_reset_component__ = __webpack_require__("./src/app/home/reset/reset.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__forgot_forgot_component__ = __webpack_require__("./src/app/home/forgot/forgot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__("./src/app/home/home/home.component.ts");
<<<<<<< HEAD
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_2__main_main_component__["a" /* MainComponent */] },
            { path: 'forgot', component: __WEBPACK_IMPORTED_MODULE_7__forgot_forgot_component__["a" /* ForgotComponent */] },
            { path: 'login', component: __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */] },
            { path: 'register', component: __WEBPACK_IMPORTED_MODULE_3__register_register_component__["a" /* RegisterComponent */] },
            { path: 'reset', component: __WEBPACK_IMPORTED_MODULE_6__reset_reset_component__["a" /* ResetComponent */] },
            { path: 'verify', component: __WEBPACK_IMPORTED_MODULE_4__verify_verify_component__["a" /* VerifyComponent */] },
        ]
    }
];
var HomeRouting = /** @class */ (function () {
    function HomeRouting() {
    }
    HomeRouting = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]],
            providers: []
        })
    ], HomeRouting);
    return HomeRouting;
}());

=======
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_2__main_main_component__["a" /* MainComponent */] },
            { path: 'forgot', component: __WEBPACK_IMPORTED_MODULE_7__forgot_forgot_component__["a" /* ForgotComponent */] },
            { path: 'login', component: __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */] },
            { path: 'register', component: __WEBPACK_IMPORTED_MODULE_3__register_register_component__["a" /* RegisterComponent */] },
            { path: 'reset', component: __WEBPACK_IMPORTED_MODULE_6__reset_reset_component__["a" /* ResetComponent */] },
            { path: 'verify', component: __WEBPACK_IMPORTED_MODULE_4__verify_verify_component__["a" /* VerifyComponent */] },
        ]
    }
];
var HomeRouting = /** @class */ (function () {
    function HomeRouting() {
    }
    HomeRouting = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]],
            providers: []
        })
    ], HomeRouting);
    return HomeRouting;
}());

>>>>>>> 2cf866e831323375498409332ac3b4c0fc02454c


/***/ }),

/***/ "./src/app/home/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"full-screen\">\n\t<router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/home/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
<<<<<<< HEAD
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());

=======
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());

>>>>>>> 2cf866e831323375498409332ac3b4c0fc02454c


/***/ }),

/***/ "./src/app/home/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"full-screen\" style=\"display: flex;flex-flow: row;\">\n    <div class=\"container left_part\">\n      <nav class=\"navbar navbar-light\">\n        <a routerLink=\"\" class=\"navbar-brand\">\n          <img src=\"assets/logo.png\" width=\"30\" height=\"30\" class=\"d-inline-block align-top\" alt=\"\">\n        </a>\n      </nav>\n      <div class=\"container\" style=\"padding-top: 20px;\">\n        <div class=\"row align-center\"><span style=\"font-weight: 300;font-size: 2.5rem;\">Login</span></div>\n        <form (ngSubmit)=\"login()\" ngNativeValidate>\n          <div class=\"form-group\">\n            <label for=\"username\">Username</label>\n            <input type=\"text\" class=\"form-control\" id=\"username\" placeholder=\"Enter your username...\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"user.username\" required>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"password\">Password</label>\n            <input type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Enter your password...\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"user.password\" required>\n          </div>\n          <div class=\"form-group text-xs-center\" style=\"padding-top: 10px;\">\n            <button type=\"submit\" class=\"btn btn-success\">Login</button>\n          </div>\n          <div class=\"form-group text-xs-center\">\n            <span>Forgot your password? <a routerLink=\"/forgot\">Reset</a></span>\n          </div>\n          <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"errorMsg!=''\">\n            <strong>Oh snap!</strong> {{errorMsg}}\n          </div>\n        </form>\n      </div>\n    </div>\n    <div class=\"container\" style=\"background: #21b2fe\">\n      <nav class=\"navbar navbar-dark\" style=\"color: #ffffff !important;\">\n        <span class=\"navbar-text float-xs-right\">\n          Don't have a Uno account?\n          <a routerLink=\"/register\" style=\"color: #ffffff !important;\" class=\"btn btn-outline-success\">Register</a>\n        </span>\n      </nav>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/home/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user__ = __webpack_require__("./src/app/home/login/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_service__ = __webpack_require__("./src/app/api.service.ts");
<<<<<<< HEAD
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(api, router) {
        this.api = api;
        this.router = router;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__user__["a" /* User */];
        this.errorMsg = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.api.post('/home/login', this.user)
            .subscribe(function (data) {
            if (data[0] === 'Success') {
                localStorage.setItem('UnoToken', data[1]);
                _this.router.navigate(['/game']);
            }
            else if (data[0] === 'Verify') {
                localStorage.setItem('UnoToken', data[1]);
                _this.router.navigate(['/verify']);
            }
            else {
                _this.errorMsg = data[1];
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/home/login/login.component.html"),
            styles: [__webpack_require__("./src/app/home/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());

=======
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(api, router) {
        this.api = api;
        this.router = router;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__user__["a" /* User */];
        this.errorMsg = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.api.post('/home/login', this.user)
            .subscribe(function (data) {
            if (data[0] === 'Success') {
                localStorage.setItem('UnoToken', data[1]);
                _this.router.navigate(['/game']);
            }
            else if (data[0] === 'Verify') {
                localStorage.setItem('UnoToken', data[1]);
                _this.router.navigate(['/verify']);
            }
            else {
                _this.errorMsg = data[1];
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/home/login/login.component.html"),
            styles: [__webpack_require__("./src/app/home/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());

>>>>>>> 2cf866e831323375498409332ac3b4c0fc02454c


/***/ }),

/***/ "./src/app/home/login/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
<<<<<<< HEAD
var User = /** @class */ (function () {
    function User() {
        this.username = '';
        this.password = '';
    }
    return User;
}());

=======
var User = /** @class */ (function () {
    function User() {
        this.username = '';
        this.password = '';
    }
    return User;
}());

>>>>>>> 2cf866e831323375498409332ac3b4c0fc02454c


/***/ }),

/***/ "./src/app/home/main/main.component.css":
/***/ (function(module, exports) {

<<<<<<< HEAD
module.exports = ".background{\n    background: url('background.02e1fe71342026767c9c.jpg');\n    background-size: cover;\n}"
=======
module.exports = ".background{\r\n    background: url('background.02e1fe71342026767c9c.jpg');\r\n    background-size: cover;\r\n}"
>>>>>>> 2cf866e831323375498409332ac3b4c0fc02454c

/***/ }),

/***/ "./src/app/home/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"full-screen background\" style=\"display: flex;flex-flow: column;\">\n    <nav class=\"navbar navbar-dark bg-dark\">\n      <a routerLink=\"\" class=\"navbar-brand\">\n        <img src=\"assets/logo.png\" width=\"30\" height=\"30\" class=\"d-inline-block align-top\" alt=\"\">\n      </a>\n      <ul class=\"nav navbar-nav float-xs-right\">\n        <li class=\"nav-item\"><a routerLink=\"login\" class=\"btn btn-outline-success\">Login</a></li>\n      </ul>\n    </nav>\n    <div class=\"container-fluid\" style=\"background: rgba(0,0,0,0.7);display: flex;flex-flow: column;justify-content: center;align-items: center;flex: 1\">\n      <div class=\"container\" style=\"text-align: center;max-width: 1000px;\">\n        <h1 class=\"display-4  text-white smallhead\">Simple Uno Game to have some fun.</h1>\n        <div class=\"container col-xs-5\">\n          <div class=\"row\" style=\"display:grid\">\n            <div class=\"col-xs-12\">\n              <span class=\"text-white\">Don't have a Uno account yet?</span>\n              <a routerLink=\"register\" class=\"btn btn-info\">Register</a>\n            </div>\n          </div>\n          <div class=\"row text-white\" style=\"display:grid\">\n            <div class=\"col-xs-12\" style=\"padding-top:10px;\">\n              <span>Already joined Uno? </span><a routerLink=\"login\" class=\"text-white\" style=\"text-decoration: underline;\">Login</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/home/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
<<<<<<< HEAD
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-main',
            template: __webpack_require__("./src/app/home/main/main.component.html"),
            styles: [__webpack_require__("./src/app/home/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());

=======
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-main',
            template: __webpack_require__("./src/app/home/main/main.component.html"),
            styles: [__webpack_require__("./src/app/home/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());

>>>>>>> 2cf866e831323375498409332ac3b4c0fc02454c


/***/ }),

/***/ "./src/app/home/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"full-screen\" style=\"display: flex;flex-flow: row;\">\n    <div class=\"container left_part\">\n      <nav class=\"navbar navbar-light\">\n        <a routerLink=\"\" class=\"navbar-brand\">\n          <img src=\"assets/logo.png\" width=\"30\" height=\"30\" class=\"d-inline-block align-top\" alt=\"\">\n        </a>\n      </nav>\n      <div class=\"container\" style=\"padding-top: 20px;\">\n        <div class=\"row align-center\"><span style=\"font-weight: 300;font-size: 2.5rem;\">Register</span></div>\n        <form (ngSubmit)=\"register()\" ngNativeValidate>\n          <div class=\"form-group\">\n            <label for=\"username\">Username</label>\n            <input type=\"text\" class=\"form-control\" id=\"username\" placeholder=\"Enter your username...\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"user.username\" required>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"name\">Name</label>\n            <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Enter your name...\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"user.name\" required>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"email\">Email</label>\n            <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Enter your email...\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"user.email\" required>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"password\">Password</label>\n            <input type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Enter your password...\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"user.password\" required>\n          </div>\n          <div class=\"form-group text-xs-center\" style=\"padding-top: 10px;\">\n            <button type=\"submit\" class=\"btn btn-success\">Register</button>\n          </div>\n          <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"errorMsg!=''\">\n            <strong>Oh snap!</strong> {{errorMsg}}\n          </div>\n        </form>\n      </div>\n    </div>\n    <div class=\"container\" style=\"background: #21b2fe\">\n      <nav class=\"navbar navbar-dark\" style=\"color: #ffffff !important;\">\n        <span class=\"navbar-text float-xs-right\">\n          Already have a Uno account?\n          <a routerLink=\"/register\" style=\"color: #ffffff !important;\" class=\"btn btn-outline-success\">Login</a>\n        </span>\n      </nav>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/home/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user__ = __webpack_require__("./src/app/home/register/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_service__ = __webpack_require__("./src/app/api.service.ts");
<<<<<<< HEAD
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(api, router) {
        this.api = api;
        this.router = router;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__user__["a" /* User */];
        this.errorMsg = '';
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.api.put('home/register', this.user)
            .subscribe(function (data) {
            if (data[0] === 'Success') {
                localStorage.setItem('UnoToken', data[1]);
                _this.router.navigate(['/login']);
            }
            else {
                _this.errorMsg = data[1];
            }
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/home/register/register.component.html"),
            styles: [__webpack_require__("./src/app/home/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());

=======
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(api, router) {
        this.api = api;
        this.router = router;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__user__["a" /* User */];
        this.errorMsg = '';
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.api.put('home/register', this.user)
            .subscribe(function (data) {
            if (data[0] === 'Success') {
                localStorage.setItem('UnoToken', data[1]);
                _this.router.navigate(['/login']);
            }
            else {
                _this.errorMsg = data[1];
            }
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/home/register/register.component.html"),
            styles: [__webpack_require__("./src/app/home/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());

>>>>>>> 2cf866e831323375498409332ac3b4c0fc02454c


/***/ }),

/***/ "./src/app/home/register/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
<<<<<<< HEAD
var User = /** @class */ (function () {
    function User() {
        this.email = '';
        this.username = '';
        this.password = '';
        this.name = '';
    }
    return User;
}());

=======
var User = /** @class */ (function () {
    function User() {
        this.email = '';
        this.username = '';
        this.password = '';
        this.name = '';
    }
    return User;
}());

>>>>>>> 2cf866e831323375498409332ac3b4c0fc02454c


/***/ }),

/***/ "./src/app/home/reset/reset.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/reset/reset.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"full-screen\" style=\"display: flex;flex-flow: row;\">\n    <div class=\"container left_part\">\n      <nav class=\"navbar navbar-light\">\n        <a routerLink=\"\" class=\"navbar-brand\">\n          <img src=\"assets/logo.png\" width=\"30\" height=\"30\" class=\"d-inline-block align-top\" alt=\"\">\n          Pokr\n        </a>\n      </nav>\n      <div class=\"container\" style=\"padding-top: 20px;\">\n        <div class=\"row align-center\"><span style=\"font-weight: 300;font-size: 2.5rem;\">Reset password</span></div>\n        <form (ngSubmit)=\"reset()\">\n          <div class=\"form-group\">\n            <label for=\"password\">Password</label>\n            <input type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Password...\" required>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"confirm\">Confirm Password</label>\n            <input type=\"password\" class=\"form-control\" id=\"confirm\" placeholder=\"Confirm...\" required>\n          </div>\n          <div class=\"form-group text-xs-center\" style=\"padding-top: 10px;\">\n            <button type=\"submit\" class=\"btn btn-success\">Submit</button>\n          </div>\n        </form>\n      </div>\n    </div>\n    <div class=\"container hidden-md-down\" style=\"background: #21b2fe\">\n      <nav class=\"navbar navbar-dark\" style=\"color: #ffffff !important;\">\n        <span class=\"navbar-text float-xs-right\">\n          Remember your password?\n          <a routerLink=\"/login\" style=\"color: #ffffff !important;\" class=\"btn btn-outline-success\">Login</a>\n        </span>\n      </nav> \n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/home/reset/reset.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
<<<<<<< HEAD
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResetComponent = /** @class */ (function () {
    function ResetComponent() {
    }
    ResetComponent.prototype.ngOnInit = function () {
    };
    ResetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-reset',
            template: __webpack_require__("./src/app/home/reset/reset.component.html"),
            styles: [__webpack_require__("./src/app/home/reset/reset.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ResetComponent);
    return ResetComponent;
}());

=======
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResetComponent = /** @class */ (function () {
    function ResetComponent() {
    }
    ResetComponent.prototype.ngOnInit = function () {
    };
    ResetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-reset',
            template: __webpack_require__("./src/app/home/reset/reset.component.html"),
            styles: [__webpack_require__("./src/app/home/reset/reset.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ResetComponent);
    return ResetComponent;
}());

>>>>>>> 2cf866e831323375498409332ac3b4c0fc02454c


/***/ }),

/***/ "./src/app/home/verify/verify.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/verify/verify.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"full-screen\" style=\"display: flex;flex-flow: row;\">\n    <div class=\"container left_part\">\n      <nav class=\"navbar navbar-light\">\n        <a routerLink=\"\" class=\"navbar-brand\">\n          <img src=\"assets/logo.png\" width=\"30\" height=\"30\" class=\"d-inline-block align-top\" alt=\"\">\n          Pokr\n        </a>\n      </nav>\n      <div class=\"container\" style=\"padding-top: 20px;\">\n        <div class=\"row align-center\"><span style=\"font-weight: 300;font-size: 2.5rem;\">Email Verification</span></div>\n        <form (ngSubmit)=\"verify()\">\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" id=\"firstName\" placeholder=\"Verification Code...\" required>\n          </div>\n          <div class=\"form-group text-xs-center\" style=\"padding-top: 10px;\">\n            <button type=\"submit\" class=\"btn btn-success\">Submit</button>\n          </div>\n          <div class=\"form-group row align-center\">\n            <span class=\"btn\">Did not receive code?</span>\n            <button type=\"button\" class=\"btn btn-outline-info\" (click)=\"resend()\">Resend</button>\n          </div>\n          <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"errorMsg!=''\">\n            <strong>Oh snap!</strong> {{errorMsg}}\n          </div>\n          <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"showEmail!=''\">\n            <strong>Email sent to :</strong> {{showEmail}}\n          </div>\n        </form>\n      </div>\n    </div>\n    <div class=\"container hidden-md-down\" style=\"background: #21b2fe\">\n      <nav class=\"navbar navbar-dark\" style=\"color: #ffffff !important;\">\n        <span class=\"navbar-text float-xs-right\">\n          Already have a Pokr account?\n          <a routerLink=\"/register\" style=\"color: #ffffff !important;\" class=\"btn btn-outline-success\">Login</a>\n        </span>\n      </nav> \n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/home/verify/verify.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
<<<<<<< HEAD
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VerifyComponent = /** @class */ (function () {
    function VerifyComponent() {
    }
    VerifyComponent.prototype.ngOnInit = function () {
    };
    VerifyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-verify',
            template: __webpack_require__("./src/app/home/verify/verify.component.html"),
            styles: [__webpack_require__("./src/app/home/verify/verify.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], VerifyComponent);
    return VerifyComponent;
}());

=======
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VerifyComponent = /** @class */ (function () {
    function VerifyComponent() {
    }
    VerifyComponent.prototype.ngOnInit = function () {
    };
    VerifyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-verify',
            template: __webpack_require__("./src/app/home/verify/verify.component.html"),
            styles: [__webpack_require__("./src/app/home/verify/verify.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], VerifyComponent);
    return VerifyComponent;
}());

>>>>>>> 2cf866e831323375498409332ac3b4c0fc02454c


/***/ }),

/***/ "./src/app/socket.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__("./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
<<<<<<< HEAD
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import io from 'socket.io-client';

var SocketService = /** @class */ (function () {
    function SocketService() {
        this.url = 'https://team-c-uno.herokuapp.com';
        this.observables = {};
    }
    SocketService.prototype.connect = function (game) {
        this.socket = __WEBPACK_IMPORTED_MODULE_2_socket_io_client__(this.url, { query: 'game=' + game + '&userToken=' + localStorage.getItem('UnoToken') });
    };
    SocketService.prototype.send = function (method, data) {
        this.socket.emit(method, data);
    };
    SocketService.prototype.receive = function (method) {
        var _this = this;
        var observable = this.observables[method];
        if (!observable) {
            observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */](function (observer) {
                _this.socket.on(method, function (data) {
                    observer.next(data);
                });
            });
            this.observables[method] = observable;
        }
        return this.observables[method];
    };
    SocketService.prototype.on = function (method, cb) {
        return this.socket.on(method, cb);
    };
    SocketService.prototype.once = function (method, cb) {
        return this.socket.once(method, cb);
    };
    SocketService.prototype.close = function () {
        this.socket.disconnect();
    };
    SocketService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], SocketService);
    return SocketService;
}());

=======
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import io from 'socket.io-client';

var SocketService = /** @class */ (function () {
    function SocketService() {
        this.url = 'http://localhost:3000';
        this.observables = {};
    }
    SocketService.prototype.connect = function (game) {
        this.socket = __WEBPACK_IMPORTED_MODULE_2_socket_io_client__(this.url, { query: 'game=' + game + '&userToken=' + localStorage.getItem('UnoToken') });
    };
    SocketService.prototype.send = function (method, data) {
        this.socket.emit(method, data);
    };
    SocketService.prototype.receive = function (method) {
        var _this = this;
        var observable = this.observables[method];
        if (!observable) {
            observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */](function (observer) {
                _this.socket.on(method, function (data) {
                    observer.next(data);
                });
            });
            this.observables[method] = observable;
        }
        return this.observables[method];
    };
    SocketService.prototype.on = function (method, cb) {
        return this.socket.on(method, cb);
    };
    SocketService.prototype.once = function (method, cb) {
        return this.socket.once(method, cb);
    };
    SocketService.prototype.close = function () {
        this.socket.disconnect();
    };
    SocketService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], SocketService);
    return SocketService;
}());

>>>>>>> 2cf866e831323375498409332ac3b4c0fc02454c


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
<<<<<<< HEAD
var environment = {
    production: true
};
=======
var environment = {
    production: true
};
>>>>>>> 2cf866e831323375498409332ac3b4c0fc02454c


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
<<<<<<< HEAD




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
=======




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
>>>>>>> 2cf866e831323375498409332ac3b4c0fc02454c


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map