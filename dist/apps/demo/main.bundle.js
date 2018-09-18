webpackJsonp(["main"],{

/***/ "../../../../../apps/demo/src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../apps/demo/src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../apps/demo/src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* \n   \n   Why i call this override.css, because this is the place where i will override the \n   ready-to-use frameworks like Bootstrap, Angular Material design as per my needs.\n*/\n\nhtml, body {\n    color: #424242;\n    background-color: #fff;\n}\n\n.spacer {\n   margin-top: 56px;\n}\n\n.navbar {\n    background-color: white;\n    border-bottom: 1px solid #eee;\n}\n\n.nav-link {\n    font-weight: bold;\n}\n\n.nav-item {\n    margin-right: 20px;\n}\n\n#navbarSupportedContent {\n    padding-left: 50px;\n}\n\nfooter {\n    background-color: #f7f7f7;\n    padding: 3rem 0;\n    margin-top: 4rem;\n    font-size: 85%;\n}\n\nfooter ul {\n    list-style-type: none;\n    padding: 0;\n}\n\n.footer-box {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n}\n\n.footer-box > div:first-child {\n    width:75%;\n}\n\n.block {\n    padding: 2rem;\n    padding-left: 0;\n}\n\n.block h2 {\n    font-weight: normal;\n    margin-bottom: 1.3rem;\n}\n\n.column-box {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap; \n}\n\n.column-item  {\n    width: 50%;\n    padding: 20px;\n    margin-bottom: 3rem;\n}\n\n.column-item:nth-child(1) {\n    padding-left: 0;\n}\n\n.md-default-theme {\n    background-color: #fff;\n}\n\nmd-content  {\n    min-height: 250px;\n    background-color: none;\n    padding: 1rem 0;\n}\n\nmd-tab code.hljs {\n    background: none;\n}\n\n.output-frame {\n    border: 1px solid #ddd;\n    border-radius: 4px 4px;\n    height: 300px;\n    display:-webkit-box;\n    display:-ms-flexbox;\n    display:flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n}\n\nh1 {\n    padding-bottom: 1.2rem;\n    border-bottom: 1px solid #ddd;\n    margin-bottom: 0.5rem;\n}\n\nh1.custom-heading  {\n    padding-bottom:0rem;\n    border: none;\n}\n\nh4 {\n    margin: 1rem 0;\n}\n\n@media screen and (max-width: 500px) {\n    .display-2 {\n        font-size: 2.7em;\n    }\n    .container {\n        margin: 0;\n        width: 100%;\n    }\n    .block {\n        padding: 0.4rem;\n    }\n\n    .column-box {\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n    }\n    .column-item {\n        width: 100%;\n    }\n\n    .output-frame {\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap;\n        height: auto;\n    }\n\n    #jumbo-action .btn, #jumbo-action .btn-group {\n        width: 100%;\n    }\n\n    .footer-box {\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n    }\n    .footer-box div {\n        width: 100%;\n        text-align: center;\n    }\n    .footer-box > div:nth-child(2) {\n        margin-top: 20px;\n    }\n    .footer-box  ul {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n    }\n\n    .footer-box li {\n        margin-right: 1rem;\n    }\n\n}\n\n/*@media screen and (max-width: 700px) {\n    .container.block {\n        margin: 0;\n        width: 100%;\n    }\n    .block {\n        padding: 0.4rem;\n    }\n    .output-frame {\n        flex-direction: column;\n        flex-wrap: wrap;\n        height: auto;\n    }\n     .column-box {\n        flex-direction: column;\n    }\n    .column-item {\n        width: 100%;\n    }\n}*/\n\n.playground {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n}\n\n.playground > .playground-section {\n    width: 47%;\n    min-width: 300px;\n    padding: 20px;\n}\n\n.playground > .playground-section:last-child {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n\n.custom-width {\n    width: 80%;\n}\n\n@media screen and (max-width: 400px) {\n    .badge {\n        position:relative;\n    }\n    .footer-box {\n        font-size: 0.8rem;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../apps/demo/src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<a href=\"https://github.com/ashish-chopra/ngx-gauge\" class=\"github-corner\" aria-label=\"View source on Github\" title=\"Fork it on GitHub\">\n  <svg width=\"80\" height=\"80\" viewBox=\"0 0 250 250\" style=\"fill:#64CEAA; color:#fff; position: fixed; top: 0; border: 0; right: 0; z-index:2000\"\n      aria-hidden=\"true\">\n      <path d=\"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z\"></path>\n      <path d=\"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2\"\n          fill=\"currentColor\" style=\"transform-origin: 130px 106px;\" class=\"octo-arm\"></path>\n      <path d=\"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z\"\n          fill=\"currentColor\" class=\"octo-body\"></path>\n  </svg>\n</a>\n<nav class=\"navbar navbar-toggleable-md fixed-top navbar-light\">\n  <div class=\"container\">\n      <a class=\"navbar-brand\" href=\"#/\">ngx-gauge</a>\n      <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n          aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n          </button>\n\n      <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n          <ul class=\"navbar-nav mr-auto\">\n              <li class=\"nav-item\">\n                  <a class=\"nav-link\" href=\"#getting-started\" target=\"_self\">Getting Started</a>\n              </li>\n              <li class=\"nav-item\">\n                  <a class=\"nav-link\" href=\"#documentation\" target=\"_self\">Documentation</a>\n              </li>\n              <li class=\"nav-item\">\n                  <a class=\"nav-link\" href=\"#demos\" target=\"_self\">Demos</a>\n              </li>\n              <li class=\"nav-item\">\n                  <a class=\"nav-link\" href=\"#playground\" target=\"_self\">Playground</a>\n              </li>\n          </ul>\n      </div>\n  </div>\n</nav>\n<div class=\"spacer\">\n  <app-getting-started id=\"getting-started\" class=\"jumptarget\"></app-getting-started>\n  <app-documentation id=\"documentation\" class=\"jumptarget\"></app-documentation>\n  <!--<div ng-view autoscroll></div>-->\n  <!-- <section id=\"getting-started\" class=\"jumptarget\" ng-include=\"'templates/getting-started.html'\"></section>\n  <section id=\"documentation\" class=\"jumptarget\" ng-include=\"'templates/documentation.html'\"></section>\n  <section id=\"demos\" class=\"jumptarget\" ng-include=\"'templates/demos.html'\"></section>\n  <section id=\"playground\" class=\"jumptarget\" ng-include=\"'templates/playground.html'\"></section> -->\n\n  <footer>\n      <div class=\"container footer-box\">\n          <div>\n              <div>&copy; copyright 2017 Ashish Chopra. <br> Thanks to <b> GitHub &middot; Angular &middot; Highlightjs &middot; Bootstrap 4 &middot; Font Awesome</b>                        for giving technologies to build this website.\n              </div>\n              <br>\n              <div>\n                  Made with hands &amp; <i class=\"fa fa-heart\"></i> by <a href=\"https://ashish-chopra.github.io\">Ashish Chopra</a>.\n                  <br> Checkout my other <a href=\"https://github.com/ashish-chopra?tab=repositories\">projects</a>.\n              </div>\n          </div>\n          <div>\n              <b class=\"hidden-sm-down\">Other Links</b>\n              <ul>\n                  <li><a href=\"https://ashish-chopra.github.io\" target=\"_blank\">Website</a></li>\n                  <li><a href=\"https://github.com/ashish-chopra\" target=\"_blank\">GitHub</a></li>\n                  <li><a href=\"https://www.facebook.com/ashish.chopra22\" target=\"_blank\">Facebook</a></li>\n                  <li><a href=\"mailto://sendtoashishchopra@gmail.com\">Email</a></li>\n              </ul>\n          </div>\n      </div>\n  </footer>\n</div>"

/***/ }),

/***/ "../../../../../apps/demo/src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../apps/demo/src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../apps/demo/src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../apps/demo/src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../apps/demo/src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_highlight_js__ = __webpack_require__("../../../../angular2-highlight-js/lib/highlight-js.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_highlight_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_highlight_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__getting_started_getting_started_component__ = __webpack_require__("../../../../../apps/demo/src/app/getting-started/getting-started.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__documentation_documentation_component__ = __webpack_require__("../../../../../apps/demo/src/app/documentation/documentation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_ngx_gauge__ = __webpack_require__("../../../../../libs/ngx-gauge/index.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__getting_started_getting_started_component__["a" /* GettingStartedComponent */],
                __WEBPACK_IMPORTED_MODULE_5__documentation_documentation_component__["a" /* DocumentationComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_angular2_highlight_js__["HighlightJsModule"],
                __WEBPACK_IMPORTED_MODULE_6__ngx_ngx_gauge__["a" /* NgxGaugeModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../apps/demo/src/app/documentation/documentation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../apps/demo/src/app/documentation/documentation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container block\">\n    <h1>Documentation</h1>\n    <h4>Usage</h4>\n    <p>Once you are setup with angular-gauge and its dependencies, you can straight forward use it on any HTML page like: </p>\n\n    <h4>Config Options</h4>\n    <p>\n        There are plenty of configurable options available to tune the Gauge as per your needs. Following is the extensive list of\n        configurable options <a href=\"https://github.com/ashish-chopra/angular-gauge#config-options\" class=\"hidden-sm-up\">here</a>.\n    </p>\n    <p></p>\n    <table class=\"table table-striped table-bordered hidden-sm-down\">\n        <thead>\n            <tr>\n                <th>Name</th>\n                <th width=\"450\">Description</th>\n                <th>Required</th>\n                <th>Default value</th>\n                <th>Possible Values</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr>\n                <td>size</td>\n                <td>Specifies the size of the canvas in which Gauge will be drawn. It is used as width and height both.</td>\n                <td>No</td>\n                <td>200</td>\n                <td>Positive Integer</td>\n            </tr>\n             <tr>\n                <td>type</td>\n                <td>Specifies the gauge's type.</td>\n                <td>No</td>\n                <td>\"full\"</td>\n                <td>\"full\", \"semi\", \"arch\"</td>\n            </tr>\n            <tr>\n                <td>min</td>\n                <td>Specifies the minimum numeric value for gauge's scale.</td>\n                <td>No</td>\n                <td>0</td>\n                <td>Any numeric value</td>\n            </tr>\n             <tr>\n                <td>max</td>\n                <td>Specified the maximum numeric value for gauge's scale.</td>\n                <td>No</td>\n                <td>100</td>\n                <td>Any numeric value</td>\n            </tr>\n             <tr>\n                <td>value</td>\n                <td>Specifies the current value of the Gauge in the range specified by min and max. It is a required attribute.</td>\n                <td>Yes</td>\n                <td>undefined</td>\n                <td>A numeric value</td>\n            </tr>\n            <tr>\n                <td>cap</td>\n                <td>The style of line ending at the gauge's end.</td>\n                <td>No</td>\n                <td>\"butt\"</td>\n                <td>\"round\", \"butt\"</td>\n            </tr>\n            <tr>\n                <td>thick</td>\n                <td>Specified the thickness of the gauge's bar.</td>\n                <td>No</td>\n                <td>6</td>\n                <td>Any Positive Integer</td>\n            </tr>\n            <tr>\n                <td>label</td>\n                <td>Specifies the text to display below the Gauge's reading.</td>\n                <td>No</td>\n                <td>undefined</td>\n                <td>Any string</td>\n            </tr>\n            <tr>\n                <td>foreground-color</td>\n                <td>Specifies the foreground color of the Gauge's bar./td>\n                <td>No</td>\n                <td>rgba(0, 150, 136, 1)</td>\n                <td>Any color value string</td>\n            </tr>\n            <tr>\n                <td>background-color</td>\n                <td>Specifies the background color of the Gauge's bar.</td>\n                <td>No</td>\n                <td>rgba(0, 0, 0, 0.1)</td>\n                <td>Any color value string</td>\n            </tr>\n            <tr>\n                <td>append</td>\n                <td>Specifies a string appended to the Gauge's reading. For example \"%\" most commonly used.</td>\n                <td>No</td>\n                <td>undefined</td>\n                <td>Any string</td>\n            </tr>\n            <tr>\n                <td>prepend</td>\n                <td>Specifies a string prepended to the Gauge's reading. For example \"$\" in case of financial data displayed\n                    in Gauge.</td>\n                <td>No</td>\n                <td>undefined</td>\n                <td>Any string</td>\n            </tr>\n            <tr>\n                <td>duration</td>\n                <td>Specifies the duration (in milliseconds) of the Gauge's animation</td>\n                <td>No</td>\n                <td>1500</td>\n                <td>A positive integer</td>\n            </tr>\n             <tr>\n                <td>thresholds</td>\n                <td>Specifies an object of threshold values at which the gauge's color changes. Checkout the example given below at 'Configure Threshold color ranges' section.</td>\n                <td>No</td>\n                <td>None</td>\n                <td>A special object</td>\n            </tr>\n        </tbody>\n    </table>\n    <h4>CSS</h4>\n    <p>\n        There are no CSS dependencies needs to be included. Even the fonts used in Gauge's text are driven by application-wide font\n        stylings. However, if you like the fonts which are displayed in demos section, use <em><a target=\"_blank\" href=\"https://fonts.google.com/specimen/Open+Sans\">Open Sans</a></em> Google Fonts.\n    </p>\n  </div>"

/***/ }),

/***/ "../../../../../apps/demo/src/app/documentation/documentation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DocumentationComponent = /** @class */ (function () {
    function DocumentationComponent() {
    }
    DocumentationComponent.prototype.ngOnInit = function () {
    };
    DocumentationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-documentation',
            template: __webpack_require__("../../../../../apps/demo/src/app/documentation/documentation.component.html"),
            styles: [__webpack_require__("../../../../../apps/demo/src/app/documentation/documentation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DocumentationComponent);
    return DocumentationComponent;
}());



/***/ }),

/***/ "../../../../../apps/demo/src/app/getting-started/getting-started.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.jumbotron {\n    background:#16a085;\n    color: white;\n}\n\n.jumptarget::before {\n  content:\"\";\n  display:block;\n  height:56px; /* fixed header height*/\n  margin:-56px 0 0; /* negative fixed header height */\n}\n\n.custom-heading {\n    position: relative;\n    display: inline-block;\n    margin-bottom: 1.2rem;\n}\n\n#jumbo-action .btn {\n    color: white;\n    border-color: #ffe484;\n    font-size: 1.25rem;\n    padding: 1rem 2rem;\n    font-weight: 500;\n    background-color: transparent;\n\n}\n\n#jumbo-action .btn:hover {\n    color: #424242;\n    background-color: #ffe484;\n}\n\n#jumbo-action .btn-fill {\n    color: #424242;\n    background-color: #ffe484;\n}\n\n.badge {\n    font-size: 3rem;\n    /* position:absolute; */\n    right: -10rem;\n    top:0;\n    color: #ffe484;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../apps/demo/src/app/getting-started/getting-started.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"custom-heading display-2\">ngx-gauge\n      <span class=\"badge badge-default\">1.0.0-beta</span>\n    </h1>\n    <p class=\"lead\">A highly customizable gauge directive for Angular JS apps and dashboards. </p>\n    <br>\n    <div id=\"jumbo-action\">\n      <a class=\"btn btn-fill btn-lg\" role=\"button\" href=\"https://github.com/ashish-chopra/angular-gauge/releases\" target=\"_blank\">Download</a> &nbsp;\n      <a class=\"btn btn-lg\" role=\"button\" href=\"https://github.com/ashish-chopra/angular-gauge\" target=\"_blank\">Code on GitHub</a>\n    </div>\n  </div>\n</section>\n<div class=\"container block\">\n  <h1>Getting Started</h1>\n  <p>\n    ngx-gauge is a highly customizable gauge directive for Angular JS apps and dashboards. It provides multitude of options\n    to customize as per your needs.\n  </p>\n  <h4>Dependencies</h4>\n  <p>\n    This repository contains Angular JS directive for gauge widget. The only required dependency is:\n  </p>\n  <ul>\n      <li>\n          <a href=\"https://angularjs.org/\" target=\"_blank\">Angular JS</a> (1.4.14 or higher and anything less than or equal\n          to 1.6.x)\n      </li>\n    </ul>\n\n    <h4>How to Download?</h4>\n    <p>The easiest way to download is with <b>npm</b>: </p>\n\n    <div hljs hljs-language=\"bash\" hljs-include=\"'code/npm'\"></div>\n\n    <p>or, you can install it with <b>bower</b>: </p>\n    <div hljs hljs-language=\"bash\" hljs-include=\"'code/bower'\"></div>\n    <p>otherwise, you can manually clone the <b>git</b> repository.</p>\n\n    <h4>Installation</h4>\n    <p>\n        You need to include the dependencies in your page: </p>\n    <div hljs hljs-include=\"'code/scripts'\"></div>\n    <p>\n        As soon as you've got all the files downloaded and included in your page you just need to declare a dependency on the chart.js\n        module:\n    </p>\n    <div hljs hljs-include=\"'code/import'\"></div>\n</div>"

/***/ }),

/***/ "../../../../../apps/demo/src/app/getting-started/getting-started.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GettingStartedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GettingStartedComponent = /** @class */ (function () {
    function GettingStartedComponent() {
    }
    GettingStartedComponent.prototype.ngOnInit = function () {
    };
    GettingStartedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-getting-started',
            template: __webpack_require__("../../../../../apps/demo/src/app/getting-started/getting-started.component.html"),
            styles: [__webpack_require__("../../../../../apps/demo/src/app/getting-started/getting-started.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], GettingStartedComponent);
    return GettingStartedComponent;
}());



/***/ }),

/***/ "../../../../../apps/demo/src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../apps/demo/src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../apps/demo/src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../apps/demo/src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])()
    .bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../../libs/ngx-gauge/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_ngx_gauge_module__ = __webpack_require__("../../../../../libs/ngx-gauge/src/ngx-gauge.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src_ngx_gauge_module__["a"]; });



/***/ }),

/***/ "../../../../../libs/ngx-gauge/src/common/util.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = clamp;
/* unused harmony export coerceBooleanProperty */
/* harmony export (immutable) */ __webpack_exports__["b"] = coerceNumberProperty;
/* harmony export (immutable) */ __webpack_exports__["c"] = cssUnit;
/* harmony export (immutable) */ __webpack_exports__["d"] = isNumber;
function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}
function coerceBooleanProperty(value) {
    return value != null && "" + value !== 'false';
}
function coerceNumberProperty(value, fallbackValue) {
    if (fallbackValue === void 0) { fallbackValue = 0; }
    return isNaN(parseFloat(value)) || isNaN(Number(value)) ? fallbackValue : Number(value);
}
function cssUnit(value) {
    return value + "px";
}
function isNumber(value) {
    return value != undefined && !isNaN(parseFloat(value)) && !isNaN(Number(value));
}


/***/ }),

/***/ "../../../../../libs/ngx-gauge/src/gauge/gauge-directives.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgxGaugeAppend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return NgxGaugePrepend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return NgxGaugeValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NgxGaugeLabel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NgxGaugeAppend = /** @class */ (function () {
    function NgxGaugeAppend() {
    }
    NgxGaugeAppend = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: "ngx-gauge-append",
            exportAs: "ngxGaugeAppend"
        })
    ], NgxGaugeAppend);
    return NgxGaugeAppend;
}());

var NgxGaugePrepend = /** @class */ (function () {
    function NgxGaugePrepend() {
    }
    NgxGaugePrepend = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: "ngx-gauge-prepend",
            exportAs: "ngxGaugePrepend"
        })
    ], NgxGaugePrepend);
    return NgxGaugePrepend;
}());

var NgxGaugeValue = /** @class */ (function () {
    function NgxGaugeValue() {
    }
    NgxGaugeValue = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: "ngx-gauge-value",
            exportAs: "ngxGaugeValue"
        })
    ], NgxGaugeValue);
    return NgxGaugeValue;
}());

var NgxGaugeLabel = /** @class */ (function () {
    function NgxGaugeLabel() {
    }
    NgxGaugeLabel = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: "ngx-gauge-label",
            exportAs: "ngxGaugeLabel"
        })
    ], NgxGaugeLabel);
    return NgxGaugeLabel;
}());



/***/ }),

/***/ "../../../../../libs/ngx-gauge/src/gauge/gauge.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ngx-gauge-meter {\n    display: inline-block;\n    text-align: center;\n    position: relative;\n}\n\n.reading-block {\n    position: absolute;\n    width: 100%;\n    font-weight: normal;\n    white-space: nowrap;\n    text-align: center;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.reading-label {\n    font-family: inherit;\n    width: 100%;\n    display: inline-block;\n    position: absolute;\n    text-align: center;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    font-weight: normal;\n}\n\n.reading-affix {\n    text-decoration: none;\n    font-size: 0.6em;\n    opacity: 0.8;\n    font-weight: 200;\n    padding: 0 0.18em;\n}\n\n.reading-affix:first-child {\n    padding-left: 0;\n}\n\n.reading-affix:last-child {\n    padding-right: 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../libs/ngx-gauge/src/gauge/gauge.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"reading-block\" #reading [style.fontSize]=\"size * 0.22 + 'px'\" [style.lineHeight]=\"size + 'px'\">\n  <!-- This block can not be indented correctly, because line breaks cause layout spacing, related problem: https://pt.stackoverflow.com/q/276760/2998 -->\n  <u class=\"reading-affix\" [ngSwitch]=\"_prependChild != null\"><ng-content select=\"ngx-gauge-prepend\" *ngSwitchCase=\"true\"></ng-content><ng-container *ngSwitchCase=\"false\">{{prepend}}</ng-container></u><ng-container [ngSwitch]=\"_valueDisplayChild != null\"><ng-content *ngSwitchCase=\"true\" select=\"ngx-gauge-value\"></ng-content><ng-container *ngSwitchCase=\"false\">{{value | number}}</ng-container></ng-container><u class=\"reading-affix\" [ngSwitch]=\"_appendChild != null\"><ng-content select=\"ngx-gauge-append\" *ngSwitchCase=\"true\"></ng-content><ng-container *ngSwitchCase=\"false\">{{append}}</ng-container></u>\n</div>\n<div class=\"reading-label\" \n     [style.fontSize]=\"size / 13 + 'px'\" \n     [style.lineHeight]=\"(5 * size / 13) + size + 'px'\" \n     [ngSwitch]=\"_labelChild != null\">\n  <ng-content select=\"ngx-gauge-label\" *ngSwitchCase=\"true\"></ng-content>\n  <ng-container *ngSwitchCase=\"false\">{{label}}</ng-container>\n</div>\n<canvas #canvas [width]=\"size\" [height]=\"size\"></canvas>"

/***/ }),

/***/ "../../../../../libs/ngx-gauge/src/gauge/gauge.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgxGauge; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_util__ = __webpack_require__("../../../../../libs/ngx-gauge/src/common/util.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gauge_directives__ = __webpack_require__("../../../../../libs/ngx-gauge/src/gauge/gauge-directives.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DEFAULTS = {
    MIN: 0,
    MAX: 100,
    TYPE: 'arch',
    THICK: 4,
    FOREGROUND_COLOR: 'rgba(0, 150, 136, 1)',
    BACKGROUND_COLOR: 'rgba(0, 0, 0, 0.1)',
    CAP: 'butt',
    SIZE: 200
};
var NgxGauge = /** @class */ (function () {
    function NgxGauge(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._size = DEFAULTS.SIZE;
        this._min = DEFAULTS.MIN;
        this._max = DEFAULTS.MAX;
        this._initialized = false;
        this._animationRequestID = 0;
        this.max = DEFAULTS.MAX;
        this.type = DEFAULTS.TYPE;
        this.cap = DEFAULTS.CAP;
        this.thick = DEFAULTS.THICK;
        this.foregroundColor = DEFAULTS.FOREGROUND_COLOR;
        this.backgroundColor = DEFAULTS.BACKGROUND_COLOR;
        this.thresholds = Object.create(null);
        this._value = 0;
        this.duration = 1200;
    }
    Object.defineProperty(NgxGauge.prototype, "size", {
        get: function () { return this._size; },
        set: function (value) {
            this._size = Object(__WEBPACK_IMPORTED_MODULE_1__common_util__["b" /* coerceNumberProperty */])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxGauge.prototype, "min", {
        get: function () { return this._min; },
        set: function (value) {
            this._min = Object(__WEBPACK_IMPORTED_MODULE_1__common_util__["b" /* coerceNumberProperty */])(value, DEFAULTS.MIN);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxGauge.prototype, "value", {
        get: function () { return this._value; },
        set: function (val) {
            this._value = Object(__WEBPACK_IMPORTED_MODULE_1__common_util__["b" /* coerceNumberProperty */])(val);
        },
        enumerable: true,
        configurable: true
    });
    NgxGauge.prototype.ngOnChanges = function (changes) {
        var isTextChanged = changes['label'] || changes['append'] || changes['prepend'];
        var isDataChanged = changes['value'] || changes['min'] || changes['max'];
        if (this._initialized) {
            if (isDataChanged) {
                var nv = void 0, ov = void 0;
                if (changes['value']) {
                    nv = changes['value'].currentValue;
                    ov = changes['value'].previousValue;
                }
                this._update(nv, ov);
            }
            else if (!isTextChanged) {
                this._destroy();
                this._init();
            }
        }
    };
    NgxGauge.prototype._updateSize = function () {
        this._renderer.setElementStyle(this._elementRef.nativeElement, 'width', Object(__WEBPACK_IMPORTED_MODULE_1__common_util__["c" /* cssUnit */])(this._size));
        this._renderer.setElementStyle(this._elementRef.nativeElement, 'height', Object(__WEBPACK_IMPORTED_MODULE_1__common_util__["c" /* cssUnit */])(this._size));
    };
    NgxGauge.prototype.ngAfterViewInit = function () {
        if (this._canvas) {
            this._init();
        }
    };
    NgxGauge.prototype.ngOnDestroy = function () {
        this._destroy();
    };
    NgxGauge.prototype._getBounds = function (type) {
        var head, tail;
        if (type == 'semi') {
            head = Math.PI;
            tail = 2 * Math.PI;
        }
        else if (type == 'full') {
            head = 1.5 * Math.PI;
            tail = 3.5 * Math.PI;
        }
        else if (type === 'arch') {
            head = 0.8 * Math.PI;
            tail = 2.2 * Math.PI;
        }
        return { head: head, tail: tail };
    };
    NgxGauge.prototype._drawShell = function (start, middle, tail, color) {
        var center = this._getCenter(), radius = this._getRadius();
        middle = Math.max(middle, start); // never below 0%
        middle = Math.min(middle, tail); // never exceed 100%
        this._clear();
        this._context.beginPath();
        this._context.strokeStyle = this.backgroundColor;
        this._context.arc(center.x, center.y, radius, middle, tail, false);
        this._context.stroke();
        this._context.beginPath();
        this._context.strokeStyle = color;
        this._context.arc(center.x, center.y, radius, start, middle, false);
        this._context.stroke();
    };
    NgxGauge.prototype._clear = function () {
        this._context.clearRect(0, 0, this._getWidth(), this._getHeight());
    };
    NgxGauge.prototype._getWidth = function () {
        return this.size;
    };
    NgxGauge.prototype._getHeight = function () {
        return this.size;
    };
    NgxGauge.prototype._getRadius = function () {
        var center = this._getCenter();
        return center.x - this.thick;
    };
    NgxGauge.prototype._getCenter = function () {
        var x = this._getWidth() / 2, y = this._getHeight() / 2;
        return { x: x, y: y };
    };
    NgxGauge.prototype._init = function () {
        this._context = this._canvas.nativeElement.getContext('2d');
        this._initialized = true;
        this._updateSize();
        this._setupStyles();
        this._create();
    };
    NgxGauge.prototype._destroy = function () {
        if (this._animationRequestID) {
            window.cancelAnimationFrame(this._animationRequestID);
            this._animationRequestID = 0;
        }
        this._clear();
        this._context = null;
    };
    NgxGauge.prototype._setupStyles = function () {
        this._context.canvas.width = this.size;
        this._context.canvas.height = this.size;
        this._context.lineCap = this.cap;
        this._context.lineWidth = this.thick;
    };
    NgxGauge.prototype._getForegroundColorByRange = function (value) {
        var match = Object.keys(this.thresholds)
            .filter(function (item) { return Object(__WEBPACK_IMPORTED_MODULE_1__common_util__["d" /* isNumber */])(item) && Number(item) <= value; })
            .sort(function (a, b) { return Number(a) - Number(b); })
            .reverse()[0];
        return match !== undefined
            ? this.thresholds[match].color || this.foregroundColor
            : this.foregroundColor;
    };
    NgxGauge.prototype._create = function (nv, ov) {
        var self = this, type = this.type, bounds = this._getBounds(type), duration = this.duration, min = this.min, max = this.max, value = Object(__WEBPACK_IMPORTED_MODULE_1__common_util__["a" /* clamp */])(this.value, this.min, this.max), start = bounds.head, unit = (bounds.tail - bounds.head) / (max - min), displacement = unit * (value - min), tail = bounds.tail, color = this._getForegroundColorByRange(value), startTime;
        if (nv != undefined && ov != undefined) {
            displacement = unit * nv - unit * ov;
        }
        function animate(timestamp) {
            var requestID = requestAnimationFrame(animate);
            timestamp = timestamp || new Date().getTime();
            var runtime = timestamp - startTime;
            var progress = Math.min(runtime / duration, 1);
            var previousProgress = ov ? ov * unit : 0;
            var middle = start + previousProgress + displacement * progress;
            self._drawShell(start, middle, tail, color);
            if (progress === 1) {
                cancelAnimationFrame(requestID);
            }
        }
        requestAnimationFrame(function (timestamp) {
            startTime = timestamp || new Date().getTime();
            animate(timestamp);
        });
    };
    NgxGauge.prototype._update = function (nv, ov) {
        this._clear();
        this._create(nv, ov);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('canvas'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], NgxGauge.prototype, "_canvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChild"])(__WEBPACK_IMPORTED_MODULE_2__gauge_directives__["b" /* NgxGaugeLabel */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__gauge_directives__["b" /* NgxGaugeLabel */])
    ], NgxGauge.prototype, "_labelChild", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChild"])(__WEBPACK_IMPORTED_MODULE_2__gauge_directives__["c" /* NgxGaugePrepend */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__gauge_directives__["c" /* NgxGaugePrepend */])
    ], NgxGauge.prototype, "_prependChild", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChild"])(__WEBPACK_IMPORTED_MODULE_2__gauge_directives__["a" /* NgxGaugeAppend */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__gauge_directives__["a" /* NgxGaugeAppend */])
    ], NgxGauge.prototype, "_appendChild", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChild"])(__WEBPACK_IMPORTED_MODULE_2__gauge_directives__["d" /* NgxGaugeValue */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__gauge_directives__["d" /* NgxGaugeValue */])
    ], NgxGauge.prototype, "_valueDisplayChild", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], NgxGauge.prototype, "size", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], NgxGauge.prototype, "min", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], NgxGauge.prototype, "max", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NgxGauge.prototype, "type", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NgxGauge.prototype, "cap", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], NgxGauge.prototype, "thick", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NgxGauge.prototype, "label", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NgxGauge.prototype, "append", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NgxGauge.prototype, "prepend", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NgxGauge.prototype, "foregroundColor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NgxGauge.prototype, "backgroundColor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], NgxGauge.prototype, "thresholds", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Number])
    ], NgxGauge.prototype, "value", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], NgxGauge.prototype, "duration", void 0);
    NgxGauge = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-gauge',
            template: __webpack_require__("../../../../../libs/ngx-gauge/src/gauge/gauge.html"),
            styles: [__webpack_require__("../../../../../libs/ngx-gauge/src/gauge/gauge.css")],
            host: {
                'role': 'meter',
                '[class.ngx-gauge-meter]': 'true',
                '[attr.aria-valuemin]': 'min',
                '[attr.aria-valuemax]': 'max',
                '[attr.aria-valuenow]': 'value'
            },
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
    ], NgxGauge);
    return NgxGauge;
}());



/***/ }),

/***/ "../../../../../libs/ngx-gauge/src/ngx-gauge.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgxGaugeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gauge_gauge__ = __webpack_require__("../../../../../libs/ngx-gauge/src/gauge/gauge.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gauge_gauge_directives__ = __webpack_require__("../../../../../libs/ngx-gauge/src/gauge/gauge-directives.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NgxGaugeModule = /** @class */ (function () {
    function NgxGaugeModule() {
    }
    NgxGaugeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__gauge_gauge__["a" /* NgxGauge */], __WEBPACK_IMPORTED_MODULE_3__gauge_gauge_directives__["a" /* NgxGaugeAppend */], __WEBPACK_IMPORTED_MODULE_3__gauge_gauge_directives__["c" /* NgxGaugePrepend */], __WEBPACK_IMPORTED_MODULE_3__gauge_gauge_directives__["d" /* NgxGaugeValue */], __WEBPACK_IMPORTED_MODULE_3__gauge_gauge_directives__["b" /* NgxGaugeLabel */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__gauge_gauge__["a" /* NgxGauge */], __WEBPACK_IMPORTED_MODULE_3__gauge_gauge_directives__["a" /* NgxGaugeAppend */], __WEBPACK_IMPORTED_MODULE_3__gauge_gauge_directives__["c" /* NgxGaugePrepend */], __WEBPACK_IMPORTED_MODULE_3__gauge_gauge_directives__["d" /* NgxGaugeValue */], __WEBPACK_IMPORTED_MODULE_3__gauge_gauge_directives__["b" /* NgxGaugeLabel */]]
        })
    ], NgxGaugeModule);
    return NgxGaugeModule;
}());



/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../apps/demo/src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map