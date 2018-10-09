(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _trip_trip_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trip/trip.component */ "./src/app/trip/trip.component.ts");
/* harmony import */ var _trip_arrival_arrival_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trip/arrival/arrival.component */ "./src/app/trip/arrival/arrival.component.ts");
/* harmony import */ var _trip_car_car_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./trip/car/car.component */ "./src/app/trip/car/car.component.ts");
/* harmony import */ var _trip_driver_driver_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./trip/driver/driver.component */ "./src/app/trip/driver/driver.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: 'trip', component: _trip_trip_component__WEBPACK_IMPORTED_MODULE_2__["TripComponent"] },
    { path: 'driver', component: _trip_driver_driver_component__WEBPACK_IMPORTED_MODULE_5__["DriverComponent"] },
    { path: 'car', component: _trip_car_car_component__WEBPACK_IMPORTED_MODULE_4__["CarComponent"] },
    { path: 'arrival', component: _trip_arrival_arrival_component__WEBPACK_IMPORTED_MODULE_3__["ArrivalComponent"] },
    { path: '', pathMatch: 'full', component: _trip_trip_component__WEBPACK_IMPORTED_MODULE_2__["TripComponent"] },
    { path: '**', redirectTo: '/' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav {\n    margin-left: 90%;\n}\nbutton{\n    border-radius: 0px;\n}\n.navbar {\n    padding: .8rem;\n  }\n.navbar h1{\n    color: white;\n  }\n.navbar-nav a{\n    color: rgb(172, 130, 109);\n  }\n.navbar-nav li {\n    padding-right: 20px;\n  }\n.navbar-light {\n    color: white;\n  }"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<div style=\"text-align:center\">\n    <img src=\"assets/img/logo.png\" alt=\"logo\">\n </div>\n <div class=\"nav\">\n   <img src=\"assets/img/nav.png\" alt=\"nav\">\n </div>\n <br>\n <div>\n  <button type=\"button\" class=\"btn btn-outline-secondary\" [routerLink]=\"['/']\">Home</button>|<button type=\"button\" class=\"btn btn-outline-secondary\" [routerLink]=\"['/driver']\">Driver</button>|<button type=\"button\" class=\"btn btn-outline-secondary\" [routerLink]=\"['/car']\">Your Car</button>|<button type=\"button\" class=\"btn btn-outline-secondary\" [routerLink]=\"['/arrival']\">Arrival</button>\n  </div>\n</div>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'public';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _trip_trip_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./trip/trip.component */ "./src/app/trip/trip.component.ts");
/* harmony import */ var _trip_driver_driver_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./trip/driver/driver.component */ "./src/app/trip/driver/driver.component.ts");
/* harmony import */ var _trip_car_car_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./trip/car/car.component */ "./src/app/trip/car/car.component.ts");
/* harmony import */ var _trip_arrival_arrival_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./trip/arrival/arrival.component */ "./src/app/trip/arrival/arrival.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _trip_trip_component__WEBPACK_IMPORTED_MODULE_4__["TripComponent"],
                _trip_driver_driver_component__WEBPACK_IMPORTED_MODULE_5__["DriverComponent"],
                _trip_car_car_component__WEBPACK_IMPORTED_MODULE_6__["CarComponent"],
                _trip_arrival_arrival_component__WEBPACK_IMPORTED_MODULE_7__["ArrivalComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/trip/arrival/arrival.component.css":
/*!****************************************************!*\
  !*** ./src/app/trip/arrival/arrival.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".map{\n    margin-top: 15px;\n    width: 100%;\n}\n.yourtrip{\n    color: rgb(172, 130, 109);\n    font-size: 11px;\n    margin-top: 40px;\n}\n.time{\n    font-size: 5rem;\n    margin-left: 10px;\n}\n.time-color{\n    font-family: 'grotesk-light';\n    color: rgb(63, 56, 37);\n}\n.arrival{\n    color: #5A523E;\n    font-size: 13px;\n    margin-left: 16px;\n}\n.target{\n    margin-left: 90%;\n}\n.light{\n    color: #918E84;\n    font-size: 10px;\n}\n.number{\n    color: #585341;\n    font-size: 13px;\n    margin-bottom: 85px;\n}\n.btn-block{\n    font-family: 'grotesk-light';\n    border-radius: 0px;\n    color:white;\n    font-size: 15px;\n    background-color: rgb(172, 130, 109);\n}\nfooter{\n    padding: 10px;\n    width: 100%;\n}\n.airport{\n    color: #54503D;\n    font-size: 13px;\n    font-weight: bold;\n}\n.timer{\n    color: #918E84;\n    font-size: 10px;\n    margin-top: -13px;\n    margin-left: 15px;\n}\n"

/***/ }),

/***/ "./src/app/trip/arrival/arrival.component.html":
/*!*****************************************************!*\
  !*** ./src/app/trip/arrival/arrival.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <img class=\"map\" src=\"assets/img/mapoverview.png\" alt=\"map\">\n    <img class=\"target\" src=\"assets/img/target.png\" alt=\"target\">\n    <p class=\"yourtrip\">YOUR TRIP</p>\n    <h2 class=\"time-color\"><span class=\"time\">5:39</span> PM</h2>\n    <h6 class=\"arrival\">Estimated arrival at DFW Int'l Airport - Terminal E</h6>\n    <div class=\"row\">\n        <div class=\"col-12\">\n          <hr>\n        </div>\n        <div class=\"col-6\">\n          <p class=\"light\">Current Vibe:</p>\n          <p class=\"number\">Vaporwave Beats</p>\n        </div>\n      </div>\n      <div>\n          <button type=\"button\" class=\"btn btn-outline-secondary btn-lg btn-block\">CHANGE VEHICLE VIBE</button>\n        </div>\n        <hr>\n        <footer>\n           <div class=\"row\">\n               <div class=\"col-3 col-md-3 col-lg-4\">\n                  <img src=\"assets/img/profile.png\" alt=\"profile\">\n               </div>\n               <div class=\"col-6 col-md-3 col-lg-4\">\n                 <p class=\"airport\">DFW Int'l Airport</p>\n                 <p class=\"timer\">En Route...</p>\n               </div>\n               <div class=\"col-3 col-md-3 col-lg-4\">\n                 <img src=\"assets/img/vibes.png\" alt=\"vibe\">\n               </div>\n             </div>\n        </footer>\n        </div>\n\n"

/***/ }),

/***/ "./src/app/trip/arrival/arrival.component.ts":
/*!***************************************************!*\
  !*** ./src/app/trip/arrival/arrival.component.ts ***!
  \***************************************************/
/*! exports provided: ArrivalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrivalComponent", function() { return ArrivalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ArrivalComponent = /** @class */ (function () {
    function ArrivalComponent() {
    }
    ArrivalComponent.prototype.ngOnInit = function () {
    };
    ArrivalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-arrival',
            template: __webpack_require__(/*! ./arrival.component.html */ "./src/app/trip/arrival/arrival.component.html"),
            styles: [__webpack_require__(/*! ./arrival.component.css */ "./src/app/trip/arrival/arrival.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ArrivalComponent);
    return ArrivalComponent;
}());



/***/ }),

/***/ "./src/app/trip/car/car.component.css":
/*!********************************************!*\
  !*** ./src/app/trip/car/car.component.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".car{\n    margin-top: 15px;\n    width: 80%;\n}\n.vehicle{\n    color: rgb(172, 130, 109);\n    font-size: 11px;\n    margin-top: 40px;\n}\n.name{\n    font-family: 'grotesk';\n    font-size: 3.8rem;\n    font-weight: light;\n    color:rgb(63, 56, 37);\n}\n.light{\n    color: #918E84;\n    font-size: 10px;\n}\n.number{\n    color: #585341;\n    font-size: 13px;\n    margin-bottom: 85px;\n}\nfooter{\n    padding: 10px;\n    width: 100%;\n}\n.airport{\n    color: #54503D;\n    font-size: 13px;\n    font-weight: bold;\n}\n.timer{\n    color: #918E84;\n    font-size: 10px;\n    margin-top: -13px;\n    margin-left: 15px;\n}\n.btn-block{\n    border-radius: 0px;\n    color: #DBDACE;\n}\n.btn-outline{\n    color: #DBDACE;\n}"

/***/ }),

/***/ "./src/app/trip/car/car.component.html":
/*!*********************************************!*\
  !*** ./src/app/trip/car/car.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <img class=\"car\" src=\"assets/img/vehicle.png\" alt=\"car\">\n  <p class=\"vehicle\">YOUR VEHICLE</p>\n  <h3 class=\"name\">Alto 09</h3>\n  <div class=\"row\">\n      <div class=\"col-6\">\n        <hr>\n        <p class=\"light\">Make / Model</p>\n        <p class=\"number\">2019 Volkswagen Atlas</p>\n      </div>\n      <div class=\"col-6\">\n        <hr>\n        <p class=\"light\">Color:</p>\n        <p class=\"number\">Pure White</p>\n      </div>\n    </div>\n    <div>\n        <button type=\"button\" class=\"btn btn-outline-secondary btn-lg btn-block\">Identify Vehicle</button>\n      </div>\n      <hr>\n      <footer>\n         <div class=\"row\">\n             <div class=\"col-3 col-md-3 col-lg-4\">\n                <img src=\"assets/img/profile.png\" alt=\"profile\">\n             </div>\n             <div class=\"col-6 col-md-3 col-lg-4\">\n               <p class=\"airport\">DFW Int'l Airport</p>\n               <p class=\"timer\">ETA: 5:39 PM</p>\n             </div>\n             <div class=\"col-3 col-md-3 col-lg-4\">\n               <img src=\"assets/img/vibes.png\" alt=\"vibe\">\n             </div>\n           </div>\n      </footer>\n      </div>\n\n"

/***/ }),

/***/ "./src/app/trip/car/car.component.ts":
/*!*******************************************!*\
  !*** ./src/app/trip/car/car.component.ts ***!
  \*******************************************/
/*! exports provided: CarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarComponent", function() { return CarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CarComponent = /** @class */ (function () {
    function CarComponent() {
    }
    CarComponent.prototype.ngOnInit = function () {
    };
    CarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-car',
            template: __webpack_require__(/*! ./car.component.html */ "./src/app/trip/car/car.component.html"),
            styles: [__webpack_require__(/*! ./car.component.css */ "./src/app/trip/car/car.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CarComponent);
    return CarComponent;
}());



/***/ }),

/***/ "./src/app/trip/driver/driver.component.css":
/*!**************************************************!*\
  !*** ./src/app/trip/driver/driver.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n    padding: 10px;\n}\n.mydriver{\n    width: 100%;\n    \n}\n.name{\n    font-family: 'grotesk';\n    font-size: 3.8rem;\n    font-weight: light;\n    color:rgb(63, 56, 37);\n}\n.driver{\n    color: rgb(172, 130, 109);\n    font-size: 11px;\n    margin-top: 20px;\n}\n.info{\n    color: #918E84;\n    font-size: 11.5px;\n    margin-bottom: 70px;\n}\n.btn-block{\n    border-radius: 0px;\n    color: #DBDACE;\n}\n.btn-outline{\n    color: #DBDACE;\n}\nfooter{\n    padding: 10px;\n    width: 100%;\n}\n.airport{\n    color: #54503D;\n    font-size: 13px;\n    font-weight: bold;\n}\n.timer{\n    color: #918E84;\n    font-size: 10px;\n    margin-top: -13px;\n    margin-left: 15px;\n}\n"

/***/ }),

/***/ "./src/app/trip/driver/driver.component.html":
/*!***************************************************!*\
  !*** ./src/app/trip/driver/driver.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <img class=\"mydriver\"src=\"assets/img/driver.png\" alt=\"driver\">\n  <p class=\"driver\">YOUR DRIVER</p>\n  <h3 class=\"name\">Steph</h3>\n  <div class=\"row\">\n    <div class=\"col-6\"><hr></div>\n  </div>\n  <div class=\"row\">\n      <div class=\"col-12\"><p class=\"info\">Steph Festiculma is a graduate of Parsons New School in New York and fluent in Portugese, Spanish and English. Steph has been driving with Alto since 2018.</p></div>\n  </div>\n  <div>\n    <button type=\"button\" class=\"btn btn-outline-secondary btn-lg btn-block\">Contact Driver</button>\n  </div>\n\n  <hr>\n<footer>\n   <div class=\"row\">\n       <div class=\"col-3 col-md-3 col-lg-4\">\n          <img src=\"assets/img/profile.png\" alt=\"profile\">\n       </div>\n       <div class=\"col-6 col-md-3 col-lg-4\">\n         <p class=\"airport\">DFW Int'l Airport</p>\n         <p class=\"timer\">ETA: 5:39 PM</p>\n       </div>\n       <div class=\"col-3 col-md-3 col-lg-4\">\n         <img src=\"assets/img/vibes.png\" alt=\"vibe\">\n       </div>\n     </div>\n</footer>\n</div>\n\n"

/***/ }),

/***/ "./src/app/trip/driver/driver.component.ts":
/*!*************************************************!*\
  !*** ./src/app/trip/driver/driver.component.ts ***!
  \*************************************************/
/*! exports provided: DriverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverComponent", function() { return DriverComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DriverComponent = /** @class */ (function () {
    function DriverComponent(_route, _router) {
        this._route = _route;
        this._router = _router;
    }
    DriverComponent.prototype.ngOnInit = function () {
        this._route.params.subscribe(function (params) {
            console.log("********");
        });
    };
    DriverComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-driver',
            template: __webpack_require__(/*! ./driver.component.html */ "./src/app/trip/driver/driver.component.html"),
            styles: [__webpack_require__(/*! ./driver.component.css */ "./src/app/trip/driver/driver.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], DriverComponent);
    return DriverComponent;
}());



/***/ }),

/***/ "./src/app/trip/trip.component.css":
/*!*****************************************!*\
  !*** ./src/app/trip/trip.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  \nh2{\n    margin-top: 50px;\n}\n.optima{\n    font-family: 'optima';\n    margin: 2px;\n    font-size: 2rem;\n    margin-left: 12px;\n    margin-top: 25px;\n}\n.time{\n    font-size: 5rem;\n    margin-left: 10px;\n}\n.time-color{\n    font-family: 'grotesk-light';\n    color: rgb(63, 56, 37);\n}\n.arrival{\n    color: #5A523E;\n    font-size: 13px;\n    margin-left: 16px;\n}\n.light{\n    color: #918E84;\n    font-size: 10px;\n}\n.number{\n    color: #585341;\n    font-size: 13px;\n}\n.address{\n    color: #918E84;\n    font-size: 13px;\n}\n.drop{\n    color: #918E84;\n    font-size: 11.5px;  \n    margin-bottom: 70px;\n}\n.date{\n    color: #49452C;\n    font-size: 14px;\n}\n.btn-block{\n    border-radius: 0px;\n    color: #DBDACE;\n}\n.btn-outline{\n    color: #DBDACE;\n}\n.nav {\n    margin-left: 90%;\n}\nfooter{\n    padding: 10px;\n    width: 100%;\n}\n.airport{\n    color: #54503D;\n    font-size: 13px;\n    font-weight: bold;\n}\n.timer{\n    color: #918E84;\n    font-size: 10px;\n    margin-top: -13px;\n    margin-left: 15px;\n}"

/***/ }),

/***/ "./src/app/trip/trip.component.html":
/*!******************************************!*\
  !*** ./src/app/trip/trip.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-8\">\n      <h3 class=\"optima\">Your Trip</h3>\n    </div>\n  </div>\n\n<h2 class=\"time-color\"><span class=\"time\">5:39</span> PM</h2>\n<h6 class=\"arrival\">Estimated arrival at DFW Int'l Airport - Terminal E</h6>\n\n    <div class=\"row\">\n      <div class=\"col-4\">\n        <hr>\n        <p class=\"light\">Estimated Fare:</p>\n        <p class=\"number\">$65 - $75 <img src=\"assets/img/info.png\" alt=\"info\"></p>\n      </div>\n      <div class=\"col-4\">\n        <hr>\n        <p class=\"light\">Passengers:</p>\n        <p class=\"number\">1 - 5</p>\n      </div>\n      <div class=\"col-4\">\n        <hr>\n        <p class=\"light\">Payment:</p>\n        <p class=\"number\">Amex01</p>\n      </div>\n    </div>\n    <br>\n    <div class=\"row\">\n        <div class=\"col-6\"><p class=\"address\">449 Flora St. Dallas, Texas 75201 </p><hr></div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-7\"><p class=\"date\">DFW International Airport American Airlines Terminal E Irving, Texas 75261</p></div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-7\"><p class=\"drop\">Can you drop me off at AA International Bag Drop please? <img src=\"assets/img/edit.png\"></p></div>\n    </div>\n    <button type=\"button\" class=\"btn btn-outline-secondary btn-lg btn-block\">Cancel Trip</button>\n  \n  <hr>\n<footer>\n   <div class=\"row\">\n       <div class=\"col-3 col-md-3 col-lg-4\">\n          <img src=\"assets/img/profile.png\" alt=\"profile\">\n       </div>\n       <div class=\"col-6 col-md-3 col-lg-4\">\n         <p class=\"airport\">DFW Int'l Airport</p>\n         <p class=\"timer\">ETA: 5:39 PM</p>\n       </div>\n       <div class=\"col-3 col-md-3 col-lg-4\">\n         <img src=\"assets/img/vibes.png\" alt=\"vibe\">\n       </div>\n     </div>\n</footer>\n</div>\n\n<router-outlet></router-outlet>\n\n\n\n"

/***/ }),

/***/ "./src/app/trip/trip.component.ts":
/*!****************************************!*\
  !*** ./src/app/trip/trip.component.ts ***!
  \****************************************/
/*! exports provided: TripComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripComponent", function() { return TripComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TripComponent = /** @class */ (function () {
    function TripComponent() {
    }
    TripComponent.prototype.ngOnInit = function () {
    };
    TripComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-trip',
            template: __webpack_require__(/*! ./trip.component.html */ "./src/app/trip/trip.component.html"),
            styles: [__webpack_require__(/*! ./trip.component.css */ "./src/app/trip/trip.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TripComponent);
    return TripComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/annapeck/Desktop/alto/public/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map