webpackJsonp(["game.module"],{

/***/ "./node_modules/ngx-auto-scroll/ngx-auto-scroll.es5.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export NgxAutoScroll */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgxAutoScrollModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");

var NgxAutoScroll = (function () {
    /**
     * @param {?} element
     */
    function NgxAutoScroll(element) {
        this.lockYOffset = 10;
        this.observeAttributes = "false";
        this._isLocked = false;
        this.nativeElement = element.nativeElement;
    }
    /**
     * @return {?}
     */
    NgxAutoScroll.prototype.getObserveAttributes = function () {
        return this.observeAttributes !== "" && this.observeAttributes.toLowerCase() !== "false";
    };
    /**
     * @return {?}
     */
    NgxAutoScroll.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.mutationObserver = new MutationObserver(function () {
            if (!_this._isLocked) {
                _this.scrollDown();
            }
        });
        this.mutationObserver.observe(this.nativeElement, {
            childList: true,
            subtree: true,
            attributes: this.getObserveAttributes(),
        });
    };
    /**
     * @return {?}
     */
    NgxAutoScroll.prototype.ngOnDestroy = function () {
        this.mutationObserver.disconnect();
    };
    /**
     * @return {?}
     */
    NgxAutoScroll.prototype.forceScrollDown = function () {
        this.scrollDown();
    };
    /**
     * @return {?}
     */
    NgxAutoScroll.prototype.isLocked = function () {
        return this._isLocked;
    };
    /**
     * @return {?}
     */
    NgxAutoScroll.prototype.scrollDown = function () {
        this.nativeElement.scrollTop = this.nativeElement.scrollHeight;
    };
    /**
     * @return {?}
     */
    NgxAutoScroll.prototype.scrollHandler = function () {
        var /** @type {?} */ scrollFromBottom = this.nativeElement.scrollHeight - this.nativeElement.scrollTop - this.nativeElement.clientHeight;
        this._isLocked = scrollFromBottom > this.lockYOffset;
    };
    return NgxAutoScroll;
}());
NgxAutoScroll.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */], args: [{
                selector: "[ngx-auto-scroll]",
            },] },
];
/**
 * @nocollapse
 */
NgxAutoScroll.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], },
]; };
NgxAutoScroll.propDecorators = {
    'lockYOffset': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */], args: ["lock-y-offset",] },],
    'observeAttributes': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */], args: ["observe-attributes",] },],
    'scrollHandler': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */], args: ["scroll",] },],
};
var NgxAutoScrollModule = (function () {
    function NgxAutoScrollModule() {
    }
    return NgxAutoScrollModule;
}());
NgxAutoScrollModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */], args: [{
                declarations: [NgxAutoScroll],
                imports: [],
                exports: [NgxAutoScroll]
            },] },
];
/**
 * @nocollapse
 */
NgxAutoScrollModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=ngx-auto-scroll.es5.js.map


/***/ }),

/***/ "./src/app/game/game.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameModule", function() { return GameModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_auto_scroll__ = __webpack_require__("./node_modules/ngx-auto-scroll/ngx-auto-scroll.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__game_game_component__ = __webpack_require__("./src/app/game/game/game.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lobby_lobby_component__ = __webpack_require__("./src/app/game/lobby/lobby.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__table_table_component__ = __webpack_require__("./src/app/game/table/table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__game_routing__ = __webpack_require__("./src/app/game/game.routing.ts");
<<<<<<< HEAD
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var GameModule = /** @class */ (function () {
    function GameModule() {
    }
    GameModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__game_routing__["a" /* GameRouting */],
                __WEBPACK_IMPORTED_MODULE_3_ngx_auto_scroll__["a" /* NgxAutoScrollModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__game_game_component__["a" /* GameComponent */], __WEBPACK_IMPORTED_MODULE_5__lobby_lobby_component__["a" /* LobbyComponent */], __WEBPACK_IMPORTED_MODULE_6__table_table_component__["a" /* TableComponent */]]
        })
    ], GameModule);
    return GameModule;
}());

=======
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var GameModule = /** @class */ (function () {
    function GameModule() {
    }
    GameModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__game_routing__["a" /* GameRouting */],
                __WEBPACK_IMPORTED_MODULE_3_ngx_auto_scroll__["a" /* NgxAutoScrollModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__game_game_component__["a" /* GameComponent */], __WEBPACK_IMPORTED_MODULE_5__lobby_lobby_component__["a" /* LobbyComponent */], __WEBPACK_IMPORTED_MODULE_6__table_table_component__["a" /* TableComponent */]]
        })
    ], GameModule);
    return GameModule;
}());

>>>>>>> 2cf866e831323375498409332ac3b4c0fc02454c


/***/ }),

/***/ "./src/app/game/game.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_game_component__ = __webpack_require__("./src/app/game/game/game.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lobby_lobby_component__ = __webpack_require__("./src/app/game/lobby/lobby.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__table_table_component__ = __webpack_require__("./src/app/game/table/table.component.ts");
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
        component: __WEBPACK_IMPORTED_MODULE_2__game_game_component__["a" /* GameComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_3__lobby_lobby_component__["a" /* LobbyComponent */] },
            { path: 'table/:id', component: __WEBPACK_IMPORTED_MODULE_4__table_table_component__["a" /* TableComponent */] },
        ]
    }
];
var GameRouting = /** @class */ (function () {
    function GameRouting() {
    }
    GameRouting = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]],
            providers: []
        })
    ], GameRouting);
    return GameRouting;
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
        component: __WEBPACK_IMPORTED_MODULE_2__game_game_component__["a" /* GameComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_3__lobby_lobby_component__["a" /* LobbyComponent */] },
            { path: 'table/:id', component: __WEBPACK_IMPORTED_MODULE_4__table_table_component__["a" /* TableComponent */] },
        ]
    }
];
var GameRouting = /** @class */ (function () {
    function GameRouting() {
    }
    GameRouting = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]],
            providers: []
        })
    ], GameRouting);
    return GameRouting;
}());

>>>>>>> 2cf866e831323375498409332ac3b4c0fc02454c


/***/ }),

/***/ "./src/app/game/game/game.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/game/game/game.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"full-screen\" style=\"display: flex;flex-flow: column;\">\n\t<nav class=\"navbar navbar-dark bg-dark\">\n\t\t<a routerLink=\"/game\" class=\"navbar-brand\">\n\t\t\t<img src=\"assets/logo.png\" width=\"30\" height=\"30\" class=\"d-inline-block align-top\" alt=\"\">\n\t\t</a>\n\t\t<span class=\"navbar-text float-xs-right\" style=\"margin-right:5px;\">\n\t\t\tWelcome {{user.name}}\n\t\t</span>\n\t</nav>\n\t<router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/game/game/game.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user__ = __webpack_require__("./src/app/game/game/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_service__ = __webpack_require__("./src/app/api.service.ts");
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



var GameComponent = /** @class */ (function () {
    function GameComponent(api) {
        this.api = api;
        this.user = new __WEBPACK_IMPORTED_MODULE_1__user__["a" /* User */];
    }
    GameComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.getAll('user/details')
            .subscribe(function (data) {
            _this.user = data;
        });
    };
    GameComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-game',
            template: __webpack_require__("./src/app/game/game/game.component.html"),
            styles: [__webpack_require__("./src/app/game/game/game.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* ApiService */]])
    ], GameComponent);
    return GameComponent;
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



var GameComponent = /** @class */ (function () {
    function GameComponent(api) {
        this.api = api;
        this.user = new __WEBPACK_IMPORTED_MODULE_1__user__["a" /* User */];
    }
    GameComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.getAll('user/details')
            .subscribe(function (data) {
            _this.user = data;
        });
    };
    GameComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-game',
            template: __webpack_require__("./src/app/game/game/game.component.html"),
            styles: [__webpack_require__("./src/app/game/game/game.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* ApiService */]])
    ], GameComponent);
    return GameComponent;
}());

>>>>>>> 2cf866e831323375498409332ac3b4c0fc02454c


/***/ }),

/***/ "./src/app/game/game/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
<<<<<<< HEAD
var User = /** @class */ (function () {
    function User() {
        this.name = '';
        this.username = '';
        this.email = '';
    }
    return User;
}());

=======
var User = /** @class */ (function () {
    function User() {
        this.name = '';
        this.username = '';
        this.email = '';
    }
    return User;
}());

>>>>>>> 2cf866e831323375498409332ac3b4c0fc02454c


/***/ }),

/***/ "./src/app/game/lobby/lobby.component.css":
/***/ (function(module, exports) {

<<<<<<< HEAD
module.exports = ".chat{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: column;\n            flex-flow: column;\n    width: 280px;\n    height: 300px;\n    position: fixed;\n    bottom: 0px;\n    right: 5px;\n}\n.chat_header{\n    border-bottom-left-radius: 0px;\n    border-bottom-right-radius: 0px;\n    color: #e5e5e5;\n}\n.chat_box{\n    border: 1px solid #bababa;\n    width: 100%;\n    padding: 0px;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: column;\n            flex-flow: column;\n}\n.chat_area{\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    padding: 0px;\n    background: #f5f5f5;\n}\n.chat_message{\n    width: 100%;\n    padding: 0px;\n    height: 30px;\n    border-top: 1px solid #e5e5e5;\n}\n.chat_input{\n    border: 0px;\n    outline: none;\n    padding: 0px 5px;\n    height: 30px;\n    width: 232px;\n}\n.chat_send{\n    line-height: 30px;\n    border-left: 1px solid #bababa;\n    background: #b5b5b5;\n    float: right;\n    padding:0px 7px;\n    font-size: 14px;\n}\ndiv.chat-messages{\n    height: 221px;\n    padding: 0;\n    overflow-y: scroll;\n    background: #ffffff;\n}\ndiv.chat-messages > div.message-wrapper{\n    padding: 0px;\n    margin: 0px;\n    max-width: 100%;\n}\ndiv.chat-messages > div.message-wrapper > div.alert{\n    padding: 5px;\n    margin: 5px;\n    max-width: 80%;\n    display: inline-block;\n}\ndiv.chat-messages > div.message-wrapper.left{\n    text-align: left;\n}\ndiv.chat-messages > div.message-wrapper.right{\n    text-align: right;\n}\ndiv.chat-messages > div.message-wrapper.center{\n    text-align: center !important;\n    font-style: italic;\n}"
=======
module.exports = ".chat{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-flow: column;\r\n            flex-flow: column;\r\n    width: 280px;\r\n    height: 300px;\r\n    position: fixed;\r\n    bottom: 0px;\r\n    right: 5px;\r\n}\r\n.chat_header{\r\n    border-bottom-left-radius: 0px;\r\n    border-bottom-right-radius: 0px;\r\n    color: #e5e5e5;\r\n}\r\n.chat_box{\r\n    border: 1px solid #bababa;\r\n    width: 100%;\r\n    padding: 0px;\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-flow: column;\r\n            flex-flow: column;\r\n}\r\n.chat_area{\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n    padding: 0px;\r\n    background: #f5f5f5;\r\n}\r\n.chat_message{\r\n    width: 100%;\r\n    padding: 0px;\r\n    height: 30px;\r\n    border-top: 1px solid #e5e5e5;\r\n}\r\n.chat_input{\r\n    border: 0px;\r\n    outline: none;\r\n    padding: 0px 5px;\r\n    height: 30px;\r\n    width: 232px;\r\n}\r\n.chat_send{\r\n    line-height: 30px;\r\n    border-left: 1px solid #bababa;\r\n    background: #b5b5b5;\r\n    float: right;\r\n    padding:0px 7px;\r\n    font-size: 14px;\r\n}\r\ndiv.chat-messages{\r\n    height: 221px;\r\n    padding: 0;\r\n    overflow-y: scroll;\r\n    background: #ffffff;\r\n}\r\ndiv.chat-messages > div.message-wrapper{\r\n    padding: 0px;\r\n    margin: 0px;\r\n    max-width: 100%;\r\n}\r\ndiv.chat-messages > div.message-wrapper > div.alert{\r\n    padding: 5px;\r\n    margin: 5px;\r\n    max-width: 80%;\r\n    display: inline-block;\r\n}\r\ndiv.chat-messages > div.message-wrapper.left{\r\n    text-align: left;\r\n}\r\ndiv.chat-messages > div.message-wrapper.right{\r\n    text-align: right;\r\n}\r\ndiv.chat-messages > div.message-wrapper.center{\r\n    text-align: center !important;\r\n    font-style: italic;\r\n}"
>>>>>>> 2cf866e831323375498409332ac3b4c0fc02454c

/***/ }),

/***/ "./src/app/game/lobby/lobby.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"full-screen\" style=\"display: flex;flex-flow: column;\">\n\t<nav class=\"navbar\">\n\t\t<span class=\"navbar-brand\">\n\t\t\tLobbies\n    </span>\n\t\t<span class=\"navbar-text float-xs-right\" style=\"margin-right:5px;\">\n\t\t\t<button class=\"btn btn-info\" (click)=\"create()\">Create</button>\n\t\t</span>\n\t</nav>\n\t<div class=\"container-fluid\">\n    <table class=\"table\">\n      <thead class=\"thead-dark\">\n        <tr>\n          <th scope=\"col\">#</th>\n          <th scope=\"col\">Name</th>\n          <th scope=\"col\">Players</th>\n          <th scope=\"col\">Join</th>\n        </tr>\n      </thead>\n      <tbody *ngIf=\"lobbies\">\n        <tr *ngFor=\"let lobby of lobbies;let i=index;\">\n          <th scope=\"row\">{{i+1}}</th>\n          <td>{{lobby.User.username}}</td>\n          <td>{{lobby.GameUsers.length}}/4</td>\n          <td *ngIf=\"lobby.UserId==userId || check(lobby.GameUsers)==true\"><button (click)=\"go(lobby.id)\" class=\"btn btn-info btn-xs\">Go</button></td>\n          <td *ngIf=\"lobby.UserId!=userId && check(lobby.GameUsers)==false\"><button (click)=\"join(lobby.id)\" class=\"btn btn-success btn-xs\">Join</button></td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n<div class=\"chat\">\n  <nav class=\"navbar navbar-inverse bg-dark chat_header\">\n      <span class=\"nav-brand\">\n        Chat Room\n      </span>\n  </nav>\n  <div class=\"container-fluid chat_box\">\n      <div ngx-auto-scroll lock-y-offset=\"10\" observe-attributes class=\"chat-messages\">\n        <div class=\"message-wrapper\" *ngFor=\"let msg of chatMessages;let i=index\" [ngClass]=\"{'right':msg.UserId==userId,'left':msg.UserId!=userId}\" role=\"alert\"\n>\n            <div class=\"alert\" [ngClass]=\"{'alert-info': msg.UserId == userId, 'alert-warning': msg.UserId != userId}\">\n              {{msg.User.username}} : {{msg.message}}\n            </div>\n        </div>\n      </div>\n      <div class=\"container-fluid chat_message\">\n        <form (ngSubmit)=\"sendMessage()\" ngNativeValidate>\n          <div class=\"input-group\">\n            <input type=\"text\" class=\"form-control\" style=\"outline:none;\" placeholder=\"Message...\" [ngModelOptions]=\"{standalone: true}\"  [(ngModel)]=\"chatMessage\" required>\n            <button type=\"submit\" class=\"btn btn-success input-group-addon\">Send</button>\n          </div>\n        </form>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/game/lobby/lobby.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LobbyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__socket_service__ = __webpack_require__("./src/app/socket.service.ts");
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




var LobbyComponent = /** @class */ (function () {
    function LobbyComponent(socket, api, router) {
        this.socket = socket;
        this.api = api;
        this.router = router;
        this.userId = '';
        this.lobbies = [];
        this.chatMessage = '';
        this.chatMessages = [];
    }
    LobbyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.socket.connect('lobby');
        this.socket.receive('auth').subscribe(function (data) {
            _this.userId = data['userId'];
        });
        this.socket.receive('status').subscribe(function (data) {
            _this.lobbies = data;
        });
        this.socket.receive('create:response').subscribe(function (data) {
            alert(data.Message);
        });
        this.socket.receive('lobby:response').subscribe(function (data) {
            _this.chatMessages.push(data);
        });
    };
    LobbyComponent.prototype.sendMessage = function () {
        this.socket.send('lobby:msg', this.chatMessage);
        this.chatMessage = '';
    };
    LobbyComponent.prototype.check = function (gameUsers) {
        for (var i = 0; i < gameUsers.length; i++) {
            if (gameUsers[i].UserId === this.userId) {
                return true;
            }
        }
        return false;
    };
    LobbyComponent.prototype.join = function (gameId) {
        var _this = this;
        this.api.get('game/join', { game: gameId }).subscribe(function (data) {
            console.log(data);
            if (data[0] === 'Success') {
                _this.router.navigate(['game/table', gameId]);
            }
        });
    };
    LobbyComponent.prototype.go = function (gameId) {
        var _this = this;
        this.api.get('game/go', { game: gameId }).subscribe(function (data) {
            if (data[0] === 'Success') {
                _this.router.navigate(['game/table', gameId]);
            }
        });
    };
    LobbyComponent.prototype.create = function () {
        this.socket.send('create', '');
    };
    LobbyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-lobby',
            template: __webpack_require__("./src/app/game/lobby/lobby.component.html"),
            styles: [__webpack_require__("./src/app/game/lobby/lobby.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__socket_service__["a" /* SocketService */], __WEBPACK_IMPORTED_MODULE_3__api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], LobbyComponent);
    return LobbyComponent;
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




var LobbyComponent = /** @class */ (function () {
    function LobbyComponent(socket, api, router) {
        this.socket = socket;
        this.api = api;
        this.router = router;
        this.userId = '';
        this.lobbies = [];
        this.chatMessage = '';
        this.chatMessages = [];
    }
    LobbyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.socket.connect('lobby');
        this.socket.receive('auth').subscribe(function (data) {
            _this.userId = data['userId'];
        });
        this.socket.receive('status').subscribe(function (data) {
            _this.lobbies = data;
        });
        this.socket.receive('create:response').subscribe(function (data) {
            alert(data.Message);
        });
        this.socket.receive('lobby:response').subscribe(function (data) {
            _this.chatMessages.push(data);
        });
    };
    LobbyComponent.prototype.sendMessage = function () {
        this.socket.send('lobby:msg', this.chatMessage);
        this.chatMessage = '';
    };
    LobbyComponent.prototype.check = function (gameUsers) {
        for (var i = 0; i < gameUsers.length; i++) {
            if (gameUsers[i].UserId === this.userId) {
                return true;
            }
        }
        return false;
    };
    LobbyComponent.prototype.join = function (gameId) {
        var _this = this;
        this.api.get('game/join', { game: gameId }).subscribe(function (data) {
            console.log(data);
            if (data[0] === 'Success') {
                _this.router.navigate(['game/table', gameId]);
            }
        });
    };
    LobbyComponent.prototype.go = function (gameId) {
        var _this = this;
        this.api.get('game/go', { game: gameId }).subscribe(function (data) {
            if (data[0] === 'Success') {
                _this.router.navigate(['game/table', gameId]);
            }
        });
    };
    LobbyComponent.prototype.create = function () {
        this.socket.send('create', '');
    };
    LobbyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-lobby',
            template: __webpack_require__("./src/app/game/lobby/lobby.component.html"),
            styles: [__webpack_require__("./src/app/game/lobby/lobby.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__socket_service__["a" /* SocketService */], __WEBPACK_IMPORTED_MODULE_3__api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], LobbyComponent);
    return LobbyComponent;
}());

>>>>>>> 2cf866e831323375498409332ac3b4c0fc02454c


/***/ }),

/***/ "./src/app/game/table/table.component.css":
/***/ (function(module, exports) {

<<<<<<< HEAD
module.exports = ".chat{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: column;\n            flex-flow: column;\n    width: 280px;\n    height: 300px;\n    position: fixed;\n    bottom: 0px;\n    right: 5px;\n}\n.chat_header{\n    border-bottom-left-radius: 0px;\n    border-bottom-right-radius: 0px;\n    color: #e5e5e5;\n}\n.chat_box{\n    border: 1px solid #bababa;\n    width: 100%;\n    padding: 0px;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: column;\n            flex-flow: column;\n}\n.chat_area{\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    padding: 0px;\n    background: #f5f5f5;\n}\n.chat_message{\n    width: 100%;\n    padding: 0px;\n    height: 30px;\n    border-top: 1px solid #e5e5e5;\n}\n.chat_input{\n    border: 0px;\n    outline: none;\n    padding: 0px 5px;\n    height: 30px;\n    width: 232px;\n}\n.chat_send{\n    line-height: 30px;\n    border-left: 1px solid #bababa;\n    background: #b5b5b5;\n    float: right;\n    padding:0px 7px;\n    font-size: 14px;\n}\ndiv.chat-messages{\n    height: 221px;\n    padding: 0;\n    overflow-y: scroll;\n    background: #ffffff;\n}\ndiv.chat-messages > div.message-wrapper{\n    padding: 0px;\n    margin: 0px;\n    max-width: 100%;\n}\ndiv.chat-messages > div.message-wrapper > div.alert{\n    padding: 5px;\n    margin: 5px;\n    max-width: 80%;\n    display: inline-block;\n}\ndiv.chat-messages > div.message-wrapper.left{\n    text-align: left;\n}\ndiv.chat-messages > div.message-wrapper.right{\n    text-align: right;\n}\ndiv.chat-messages > div.message-wrapper.center{\n    text-align: center !important;\n    font-style: italic;\n}\n.board{\n    border:5px solid #5a5a5a;\n    background:#bababa;\n    width: 400px;\n    height: 400px;\n    position: absolute;\n    margin: auto;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n}\n.card{\n    width:60px;\n    height:92px;\n    background:url('uno.0c12f5ec439c6a88a98a.png');\n    background-size: 1014%;\n\n}\n.player{\n    position: absolute;\n    top: 400px;\n    width: 400px;\n    height: 100px;\n}\n.player1{\n    top:0px;\n    left:-400px;\n}\n.player2{\n    top:-300px;\n}\n.player3{\n    top:0px;\n    left:400px;\n}"
=======
module.exports = ".chat{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-flow: column;\r\n            flex-flow: column;\r\n    width: 280px;\r\n    height: 300px;\r\n    position: fixed;\r\n    bottom: 0px;\r\n    right: 5px;\r\n}\r\n.chat_header{\r\n    border-bottom-left-radius: 0px;\r\n    border-bottom-right-radius: 0px;\r\n    color: #e5e5e5;\r\n}\r\n.chat_box{\r\n    border: 1px solid #bababa;\r\n    width: 100%;\r\n    padding: 0px;\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-flow: column;\r\n            flex-flow: column;\r\n}\r\n.chat_area{\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n    padding: 0px;\r\n    background: #f5f5f5;\r\n}\r\n.chat_message{\r\n    width: 100%;\r\n    padding: 0px;\r\n    height: 30px;\r\n    border-top: 1px solid #e5e5e5;\r\n}\r\n.chat_input{\r\n    border: 0px;\r\n    outline: none;\r\n    padding: 0px 5px;\r\n    height: 30px;\r\n    width: 232px;\r\n}\r\n.chat_send{\r\n    line-height: 30px;\r\n    border-left: 1px solid #bababa;\r\n    background: #b5b5b5;\r\n    float: right;\r\n    padding:0px 7px;\r\n    font-size: 14px;\r\n}\r\ndiv.chat-messages{\r\n    height: 221px;\r\n    padding: 0;\r\n    overflow-y: scroll;\r\n    background: #ffffff;\r\n}\r\ndiv.chat-messages > div.message-wrapper{\r\n    padding: 0px;\r\n    margin: 0px;\r\n    max-width: 100%;\r\n}\r\ndiv.chat-messages > div.message-wrapper > div.alert{\r\n    padding: 5px;\r\n    margin: 5px;\r\n    max-width: 80%;\r\n    display: inline-block;\r\n}\r\ndiv.chat-messages > div.message-wrapper.left{\r\n    text-align: left;\r\n}\r\ndiv.chat-messages > div.message-wrapper.right{\r\n    text-align: right;\r\n}\r\ndiv.chat-messages > div.message-wrapper.center{\r\n    text-align: center !important;\r\n    font-style: italic;\r\n}\r\n.board{\r\n    border:5px solid #5a5a5a;\r\n    background:#bababa;\r\n    width: 400px;\r\n    height: 400px;\r\n    position: absolute;\r\n    margin: auto;\r\n    left: 0;\r\n    right: 0;\r\n    top: 0;\r\n    bottom: 0;\r\n}\r\n.card{\r\n    width:60px;\r\n    height:92px;\r\n    background:url('uno.0c12f5ec439c6a88a98a.png');\r\n    background-size: 1014%;\r\n\r\n}\r\n.player{\r\n    position: absolute;\r\n    top: 400px;\r\n    width: 400px;\r\n    height: 100px;\r\n}\r\n.player1{\r\n    top:0px;\r\n    left:-400px;\r\n}\r\n.player2{\r\n    top:-300px;\r\n}\r\n.player3{\r\n    top:0px;\r\n    left:400px;\r\n}"
>>>>>>> 2cf866e831323375498409332ac3b4c0fc02454c

/***/ }),

/***/ "./src/app/game/table/table.component.html":
/***/ (function(module, exports) {

<<<<<<< HEAD
module.exports = "<div class=\"full-screen\" style=\"display: flex;flex-flow: column;\" *ngIf=\"game\">\n    <nav class=\"navbar\" *ngIf=\"game.status==1\">\n      <span class=\"navbar-brand\">\n        Host : {{game.User.username}}\n      </span>\n      <span class=\"navbar-text float-xs-right\" style=\"margin-right:5px;\" *ngIf=\"game.UserId==userId\">\n        <button class=\"btn btn-danger\" (click)=\"cancel()\">Cancel</button>\n        <button class=\"btn btn-info\" [disabled]=\"game.GameUsers.length<2\" (click)=\"start()\">Start</button>\n      </span>\n    </nav>\n    <div class=\"container-fluid\" *ngIf=\"game.status==1\">\n      <table class=\"table\">\n        <thead class=\"thead-dark\">\n          <tr>\n            <th scope=\"col\">#</th>\n            <th scope=\"col\">Player</th>\n            <th scope=\"col\">Status</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let user of game.GameUsers;let i=index;\">\n            <th scope=\"row\">{{i+1}}</th>\n            <td>{{user.User.username}}</td>\n            <td *ngIf=\"user.User.id!=game.UserId && game.UserId==userId\"><button (click)=\"remove(user.User.id)\" class=\"btn btn-danger btn-xs\">Remove</button></td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <div class=\"container-fluid\" *ngIf=\"game.status==2\">\n      <div class=\"board\" *ngIf=\"gamestate\">\n        <div class=\"card\" style=\"position: absolute;margin:auto;left: 0;right: 0;top: 0;bottom: 0;\" [ngStyle]=\"{'background-position-x.px':gamestate.GameCards[0].Card.xCoord,'background-position-y.px':gamestate.GameCards[0].Card.yCoord}\"></div>\n        <div class=\"player\">\n          <div class=\"container-fluid\" style=\"text-align:center;\">\n            {{gamestate.Users[0].User.username}}\n            <button *ngIf=\"gamestate.Users[0].isCurrent==true\" class=\"btn btn-info btn-xs\" (click)=\"draw()\">Draw</button>\n            <div *ngIf=\"showColor\">\n              <button class=\"btn btn-xs\" (click)=\"addColor(1)\">Red</button>\n              <button class=\"btn btn-xs\" (click)=\"addColor(2)\">Blue</button>\n              <button class=\"btn btn-xs\" (click)=\"addColor(3)\">Green</button>\n              <button class=\"btn btn-xs\" (click)=\"addColor(4)\">Yellow</button>\n            </div>\n          </div>\n          <div class=\"container-fluid\">\n              <div style=\"float:left;\"(click)=\"play(card)\" *ngFor=\"let card of gamestate.Users[0].UserCards\" class=\"card\" [ngStyle]=\"{'background-position-x.px':card.Card.xCoord,'background-position-y.px':card.Card.yCoord}\"></div>\n          </div>\n        </div>\n        <div *ngIf=\"gamestate.Users.length>=2\" class=\"player player1\">\n            <div class=\"container-fluid\" style=\"text-align:center;\">\n                {{gamestate.Users[1].User.username}}\n              </div>\n              <div class=\"container-fluid\">\n                  <div style=\"float:left;\" *ngFor=\"let card of gamestate.Users[1].UserCards\" class=\"card\" [ngStyle]=\"{'background-position-x.px':'646','background-position-y.px':'90'}\"></div>\n              </div>\n        </div>\n        <div *ngIf=\"gamestate.Users.length>=3\" class=\"player player2\">\n            <div class=\"container-fluid\" style=\"text-align:center;\">\n                {{gamestate.Users[2].User.username}}\n              </div>\n              <div class=\"container-fluid\">\n                  <div style=\"float:left;\" *ngFor=\"let card of gamestate.Users[2].UserCards\" class=\"card\" [ngStyle]=\"{'background-position-x.px':'646','background-position-y.px':'90'}\"></div>\n              </div>\n        </div>\n        <div *ngIf=\"gamestate.Users.length==4\" class=\"player player3\">\n            <div class=\"container-fluid\" style=\"text-align:center;\">\n                {{gamestate.Users[3].User.username}}\n              </div>\n              <div class=\"container-fluid\">\n                  <div style=\"float:left;\" *ngFor=\"let card of gamestate.Users[3].UserCards\" class=\"card\" [ngStyle]=\"{'background-position-x.px':'646','background-position-y.px':'90'}\"></div>\n              </div>\n        </div>\n      </div>\n    </div>\n</div>\n<div class=\"chat\">\n    <nav class=\"navbar navbar-inverse bg-dark chat_header\">\n        <span class=\"nav-brand\">\n          Chat Room\n        </span>\n    </nav>\n    <div class=\"container-fluid chat_box\">\n        <div ngx-auto-scroll lock-y-offset=\"10\" observe-attributes class=\"chat-messages\">\n          <div class=\"message-wrapper\" *ngFor=\"let msg of chatMessages;let i=index\" [ngClass]=\"{'right':msg.GameUser.UserId==userId,'left':msg.GameUser.UserId!=userId}\" role=\"alert\"\n  >\n              <div class=\"alert\" [ngClass]=\"{'alert-info': msg.GameUser.UserId == userId, 'alert-warning': msg.GameUser.UserId != userId}\">\n                {{msg.GameUser.User.username}} : {{msg.message}}\n              </div>\n          </div>\n        </div>\n        <div class=\"container-fluid chat_message\">\n          <form (ngSubmit)=\"sendMessage()\" ngNativeValidate>\n            <div class=\"input-group\">\n              <input type=\"text\" class=\"form-control\" style=\"outline:none;\" placeholder=\"Message...\" [ngModelOptions]=\"{standalone: true}\"  [(ngModel)]=\"chatMessage\" required>\n              <button type=\"submit\" class=\"btn btn-success input-group-addon\">Send</button>\n            </div>\n          </form>\n        </div>\n    </div>\n  </div>"
=======
module.exports = "<div class=\"full-screen\" style=\"display: flex;flex-flow: column;\" *ngIf=\"game\">\n    <nav class=\"navbar\" *ngIf=\"game.status==1\">\n      <span class=\"navbar-brand\">\n        Host : {{game.User.username}}\n      </span>\n      <span class=\"navbar-text float-xs-right\" style=\"margin-right:5px;\" *ngIf=\"game.UserId==userId\">\n        <button class=\"btn btn-danger\" (click)=\"cancel()\">Cancel</button>\n        <button class=\"btn btn-info\" (click)=\"start()\">Start</button>\n      </span>\n    </nav>\n    <div class=\"container-fluid\" *ngIf=\"game.status==1\">\n      <table class=\"table\">\n        <thead class=\"thead-dark\">\n          <tr>\n            <th scope=\"col\">#</th>\n            <th scope=\"col\">Player</th>\n            <th scope=\"col\">Status</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let user of game.GameUsers;let i=index;\">\n            <th scope=\"row\">{{i+1}}</th>\n            <td>{{user.User.username}}</td>\n            <td *ngIf=\"user.User.id!=game.UserId && game.UserId==userId\"><button (click)=\"remove(user.User.id)\" class=\"btn btn-danger btn-xs\">Remove</button></td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <div class=\"container-fluid\" style=\"position: fixed;color:white;background:#4a4a4a;width:100%;height:100%;top:0px;left:0px;z-index:100;text-align:center;line-height:500px;font-size:100px;\" *ngIf=\"game.status==10\">\n      Completed\n    </div>\n    <div class=\"container-fluid\" *ngIf=\"game.status==2\">\n      <div class=\"board\" *ngIf=\"gamestate\">\n        <div class=\"card\" style=\"position: absolute;margin:auto;left: 0;right: 0;top: 0;bottom: 0;\" [ngStyle]=\"{'background-position-x.px':gamestate.GameCards[0].Card.xCoord,'background-position-y.px':gamestate.GameCards[0].Card.yCoord}\"></div>\n        <div class=\"player\">\n          <div class=\"container-fluid\" style=\"text-align:center;\">\n            {{gamestate.Users[0].User.username}}\n            <button *ngIf=\"gamestate.Users[0].isCurrent==true\" class=\"btn btn-info btn-xs\" (click)=\"draw()\">Draw</button>\n            <div *ngIf=\"showColor\">\n              <button class=\"btn btn-xs\" (click)=\"addColor(1)\">Red</button>\n              <button class=\"btn btn-xs\" (click)=\"addColor(2)\">Blue</button>\n              <button class=\"btn btn-xs\" (click)=\"addColor(3)\">Green</button>\n              <button class=\"btn btn-xs\" (click)=\"addColor(4)\">Yellow</button>\n            </div>\n          </div>\n          <div class=\"container-fluid\">\n              <div style=\"float:left;\"(click)=\"play(card)\" *ngFor=\"let card of gamestate.Users[0].UserCards\" class=\"card\" [ngStyle]=\"{'background-position-x.px':card.Card.xCoord,'background-position-y.px':card.Card.yCoord}\"></div>\n          </div>\n        </div>\n        <div *ngIf=\"gamestate.Users.length>=2\" class=\"player player1\">\n            <div class=\"container-fluid\" style=\"text-align:center;\">\n                {{gamestate.Users[1].User.username}}\n              </div>\n              <div class=\"container-fluid\">\n                  <div style=\"float:left;\" *ngFor=\"let card of gamestate.Users[1].UserCards\" class=\"card\" [ngStyle]=\"{'background-position-x.px':'646','background-position-y.px':'90'}\"></div>\n              </div>\n        </div>\n        <div *ngIf=\"gamestate.Users.length>=3\" class=\"player player2\">\n            <div class=\"container-fluid\" style=\"text-align:center;\">\n                {{gamestate.Users[2].User.username}}\n              </div>\n              <div class=\"container-fluid\">\n                  <div style=\"float:left;\" *ngFor=\"let card of gamestate.Users[2].UserCards\" class=\"card\" [ngStyle]=\"{'background-position-x.px':'646','background-position-y.px':'90'}\"></div>\n              </div>\n        </div>\n        <div *ngIf=\"gamestate.Users.length==4\" class=\"player player3\">\n            <div class=\"container-fluid\" style=\"text-align:center;\">\n                {{gamestate.Users[3].User.username}}\n              </div>\n              <div class=\"container-fluid\">\n                  <div style=\"float:left;\" *ngFor=\"let card of gamestate.Users[3].UserCards\" class=\"card\" [ngStyle]=\"{'background-position-x.px':'646','background-position-y.px':'90'}\"></div>\n              </div>\n        </div>\n      </div>\n    </div>\n</div>\n<div class=\"chat\">\n    <nav class=\"navbar navbar-inverse bg-dark chat_header\">\n        <span class=\"nav-brand\">\n          Chat Room\n        </span>\n    </nav>\n    <div class=\"container-fluid chat_box\">\n        <div ngx-auto-scroll lock-y-offset=\"10\" observe-attributes class=\"chat-messages\">\n          <div class=\"message-wrapper\" *ngFor=\"let msg of chatMessages;let i=index\" [ngClass]=\"{'right':msg.GameUser.UserId==userId,'left':msg.GameUser.UserId!=userId}\" role=\"alert\"\n  >\n              <div class=\"alert\" [ngClass]=\"{'alert-info': msg.GameUser.UserId == userId, 'alert-warning': msg.GameUser.UserId != userId}\">\n                {{msg.GameUser.User.username}} : {{msg.message}}\n              </div>\n          </div>\n        </div>\n        <div class=\"container-fluid chat_message\">\n          <form (ngSubmit)=\"sendMessage()\" ngNativeValidate>\n            <div class=\"input-group\">\n              <input type=\"text\" class=\"form-control\" style=\"outline:none;\" placeholder=\"Message...\" [ngModelOptions]=\"{standalone: true}\"  [(ngModel)]=\"chatMessage\" required>\n              <button type=\"submit\" class=\"btn btn-success input-group-addon\">Send</button>\n            </div>\n          </form>\n        </div>\n    </div>\n  </div>"
>>>>>>> 2cf866e831323375498409332ac3b4c0fc02454c

/***/ }),

/***/ "./src/app/game/table/table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__socket_service__ = __webpack_require__("./src/app/socket.service.ts");
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



var TableComponent = /** @class */ (function () {
    function TableComponent(socket, router, activatedRoute) {
        var _this = this;
        this.socket = socket;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.userId = '';
        this.gamestate = {};
        this.game = {};
        this.chatMessage = '';
        this.chatMessages = [];
        this.playCard = {};
        this.showColor = false;
        this.activatedRoute.params.subscribe(function (params) {
            _this.tableId = params['id'];
        });
    }
    TableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.socket.connect(this.tableId);
        this.socket.receive('auth').subscribe(function (data) {
            _this.userId = data['userId'];
        });
        this.socket.receive('table:status').subscribe(function (data) {
            _this.gamestate = data;
            var counter = 0;
            var arr = [];
            var flag = false;
            for (var i = 0; i < _this.gamestate.GameUsers.length; i++) {
                if (_this.gamestate.GameUsers[i].UserId == _this.userId) {
                    flag = true;
                    counter = i;
                }
                if (counter <= i && flag == true) {
                    arr.push(_this.gamestate.GameUsers[i]);
                }
            }
            for (var i = 0; i < counter; i++) {
                arr.push(_this.gamestate.GameUsers[i]);
            }
            _this.gamestate.Users = arr;
        });
        this.socket.receive('status').subscribe(function (data) {
            _this.game = data;
        });
        this.socket.receive('closed').subscribe(function (data) {
            _this.router.navigate(['./game']);
        });
        this.socket.receive('removeUser').subscribe(function (data) {
            if (data.user == _this.userId) {
                _this.router.navigate(['./game']);
            }
        });
        this.socket.receive('table:response').subscribe(function (data) {
            _this.chatMessages.push(data);
        });
    };
    TableComponent.prototype.checkPlayable = function (card1, card2) {
        if (card1.Card.name[1] == card2.Card.name[1]) {
            return true;
        }
        if (card1.Card.color == card2.Card.color) {
            return true;
        }
        if (card1.Card.type == card2.Card.type && card1.Card.type > 1) {
            return true;
        }
        if (card2.Card.type >= 5) {
            var oldPos = this.gamestate.UserPlays[0].GameUser.position;
            var cPos = this.gamestate.Users[0].position;
            var flag = false;
            if (this.gamestate.direction) {
                if (oldPos == cPos - 1) {
                    flag = true;
                }
                if (cPos == 1 && oldPos == this.gamestate.GameUsers.length) {
                    flag = true;
                }
            }
            if (card1.Card.color == this.gamestate.UserPlays[0].color && flag == false) {
                return true;
            }
        }
        if (card1.Card.type == 5 && card2.Card.type <= 5) {
            return true;
        }
        if (card1.Card.type == 6) {
            return true;
        }
        return false;
    };
    TableComponent.prototype.getDrawCount = function (card) {
        var oldPos = this.gamestate.UserPlays[0].GameUser.position;
        var cPos = this.gamestate.Users[0].position;
        var flag = false;
        if (this.gamestate.direction) {
            if (oldPos == cPos - 1) {
                flag = true;
            }
            if (cPos == 1 && oldPos == this.gamestate.GameUsers.length) {
                flag = true;
            }
        }
        else {
            if (oldPos == cPos + 1) {
                flag = true;
            }
            if (oldPos == 1 && cPos == this.gamestate.GameUsers.length) {
                flag = true;
            }
        }
        if (card.Card.type == 6 && flag == true) {
            return 4;
        }
        if (card.Card.type == 4 && flag == true) {
            return 2;
        }
        return 1;
    };
    TableComponent.prototype.play = function (card) {
        if (this.gamestate.Users[0].isCurrent) {
            if (this.checkPlayable(card, this.gamestate.GameCards[0])) {
                if (card.Card.type >= 5) {
                    this.playCard = card;
                    this.showColor = true;
                }
                else {
                    this.socket.send('table:play', card);
                }
            }
        }
    };
    TableComponent.prototype.addColor = function (color) {
        this.showColor = false;
        this.playCard.color = color;
        this.socket.send('table:play', this.playCard);
        this.playCard = {};
    };
    TableComponent.prototype.draw = function () {
        if (this.gamestate.Users[0].isCurrent) {
            this.socket.send('table:draw', { 'num': this.getDrawCount(this.gamestate.GameCards[0]) });
        }
    };
    TableComponent.prototype.cancel = function () {
        this.socket.send('table:cancel', {});
    };
    TableComponent.prototype.start = function () {
        this.socket.send('table:start', {});
    };
    TableComponent.prototype.remove = function (user) {
        this.socket.send('table:remove', user);
    };
    TableComponent.prototype.sendMessage = function () {
        this.socket.send('table:msg', this.chatMessage);
        this.chatMessage = '';
    };
    TableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-table',
            template: __webpack_require__("./src/app/game/table/table.component.html"),
            styles: [__webpack_require__("./src/app/game/table/table.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__socket_service__["a" /* SocketService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], TableComponent);
    return TableComponent;
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



var TableComponent = /** @class */ (function () {
    function TableComponent(socket, router, activatedRoute) {
        var _this = this;
        this.socket = socket;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.userId = '';
        this.gamestate = {};
        this.game = {};
        this.chatMessage = '';
        this.chatMessages = [];
        this.playCard = {};
        this.showColor = false;
        this.activatedRoute.params.subscribe(function (params) {
            _this.tableId = params['id'];
        });
    }
    TableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.socket.connect(this.tableId);
        this.socket.receive('auth').subscribe(function (data) {
            _this.userId = data['userId'];
        });
        this.socket.receive('table:status').subscribe(function (data) {
            _this.gamestate = data;
            var counter = 0;
            var arr = [];
            var flag = false;
            for (var i = 0; i < _this.gamestate.GameUsers.length; i++) {
                if (_this.gamestate.GameUsers[i].UserId == _this.userId) {
                    flag = true;
                    counter = i;
                }
                if (counter <= i && flag == true) {
                    arr.push(_this.gamestate.GameUsers[i]);
                }
            }
            for (var i = 0; i < counter; i++) {
                arr.push(_this.gamestate.GameUsers[i]);
            }
            _this.gamestate.Users = arr;
        });
        this.socket.receive('status').subscribe(function (data) {
            _this.game = data;
        });
        this.socket.receive('closed').subscribe(function (data) {
            _this.router.navigate(['./game']);
        });
        this.socket.receive('removeUser').subscribe(function (data) {
            if (data.user == _this.userId) {
                _this.router.navigate(['./game']);
            }
        });
        this.socket.receive('table:response').subscribe(function (data) {
            _this.chatMessages.push(data);
        });
    };
    TableComponent.prototype.checkPlayable = function (card1, card2) {
        if (card1.Card.name[1] == card2.Card.name[1]) {
            return true;
        }
        if (card1.Card.color == card2.Card.color) {
            return true;
        }
        if (card1.Card.type == card2.Card.type && card1.Card.type > 1) {
            return true;
        }
        if (card2.Card.type >= 5) {
            var oldPos = this.gamestate.UserPlays[0].GameUser.position;
            var cPos = this.gamestate.Users[0].position;
            var flag = false;
            if (this.gamestate.direction) {
                if (oldPos == cPos - 1) {
                    flag = true;
                }
                if (cPos == 1 && oldPos == this.gamestate.GameUsers.length) {
                    flag = true;
                }
            }
            if (card1.Card.color == this.gamestate.UserPlays[0].color && flag == false) {
                return true;
            }
        }
        if (card1.Card.type == 5 && card2.Card.type <= 5) {
            return true;
        }
        if (card1.Card.type == 6) {
            return true;
        }
        return false;
    };
    TableComponent.prototype.getDrawCount = function (card) {
        var oldPos = this.gamestate.UserPlays[0].GameUser.position;
        var cPos = this.gamestate.Users[0].position;
        var flag = false;
        if (this.gamestate.direction) {
            if (oldPos == cPos - 1) {
                flag = true;
            }
            if (cPos == 1 && oldPos == this.gamestate.GameUsers.length) {
                flag = true;
            }
        }
        else {
            if (oldPos == cPos + 1) {
                flag = true;
            }
            if (oldPos == 1 && cPos == this.gamestate.GameUsers.length) {
                flag = true;
            }
        }
        if (card.Card.type == 6 && flag == true) {
            return 4;
        }
        if (card.Card.type == 4 && flag == true) {
            return 2;
        }
        return 1;
    };
    TableComponent.prototype.play = function (card) {
        if (this.gamestate.Users[0].isCurrent) {
            if (this.checkPlayable(card, this.gamestate.GameCards[0])) {
                if (card.Card.type >= 5) {
                    this.playCard = card;
                    this.showColor = true;
                }
                else {
                    this.socket.send('table:play', card);
                }
            }
        }
    };
    TableComponent.prototype.addColor = function (color) {
        this.showColor = false;
        this.playCard.color = color;
        this.socket.send('table:play', this.playCard);
        this.playCard = {};
    };
    TableComponent.prototype.draw = function () {
        if (this.gamestate.Users[0].isCurrent) {
            this.socket.send('table:draw', { 'num': this.getDrawCount(this.gamestate.GameCards[0]) });
        }
    };
    TableComponent.prototype.cancel = function () {
        this.socket.send('table:cancel', {});
    };
    TableComponent.prototype.start = function () {
        this.socket.send('table:start', {});
    };
    TableComponent.prototype.remove = function (user) {
        this.socket.send('table:remove', user);
    };
    TableComponent.prototype.sendMessage = function () {
        this.socket.send('table:msg', this.chatMessage);
        this.chatMessage = '';
    };
    TableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-table',
            template: __webpack_require__("./src/app/game/table/table.component.html"),
            styles: [__webpack_require__("./src/app/game/table/table.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__socket_service__["a" /* SocketService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], TableComponent);
    return TableComponent;
}());

>>>>>>> 2cf866e831323375498409332ac3b4c0fc02454c


/***/ })

});
//# sourceMappingURL=game.module.chunk.js.map