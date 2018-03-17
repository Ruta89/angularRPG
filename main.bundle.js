webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_app_component__ = __webpack_require__("./src/app/components/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_character_creation_character_creation_component__ = __webpack_require__("./src/app/components/character-creation/character-creation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_fight_fight_component__ = __webpack_require__("./src/app/components/fight/fight.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_inventory_inventory_component__ = __webpack_require__("./src/app/components/inventory/inventory.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_start_start_component__ = __webpack_require__("./src/app/components/start/start.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_story_story_component__ = __webpack_require__("./src/app/components/story/story.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_8__components_start_start_component__["a" /* StartComponent */] },
    { path: 'story', component: __WEBPACK_IMPORTED_MODULE_9__components_story_story_component__["a" /* StoryComponent */] },
    { path: 'character-creation', component: __WEBPACK_IMPORTED_MODULE_5__components_character_creation_character_creation_component__["a" /* CharacterCreationComponent */] },
    { path: 'fight', component: __WEBPACK_IMPORTED_MODULE_6__components_fight_fight_component__["a" /* FightComponent */] },
    { path: '**', redirectTo: '' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__components_app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_character_creation_character_creation_component__["a" /* CharacterCreationComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_fight_fight_component__["a" /* FightComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_inventory_inventory_component__["a" /* InventoryComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_start_start_component__["a" /* StartComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_story_story_component__["a" /* StoryComponent */]
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(routes), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__components_app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/components/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
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
            template: __webpack_require__("./src/app/components/app.component.html"),
            styles: [__webpack_require__("./src/app/components/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/components/character-creation/character-creation.component.css":
/***/ (function(module, exports) {

module.exports = ".container-fluid {\r\n  height: 100vh;\r\n  background: rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.sidebar {\r\n  background-color: #d2b48c;\r\n}\r\n\r\n.sidebar ul {\r\n  list-style: none;\r\n  text-indent: 0;\r\n  padding: 0;\r\n}\r\n\r\n.sidebar li {\r\n  cursor: pointer;\r\n  display: block;\r\n  background-color: black;\r\n  color: white;\r\n  border-radius: 7px;\r\n}\r\n\r\n.sidebar li.activate {\r\n  background: rgb(0, 0, 150);\r\n}\r\n\r\n.gender-buttion {\r\n  cursor: pointer;\r\n  display: block;\r\n  background-color: black;\r\n  color: white;\r\n  border-radius: 7px;\r\n  width: 50px;\r\n  font-size: 30px;\r\n}\r\n\r\n.gender-buttion.active {\r\n  background: rgb(0, 0, 150);\r\n}\r\n\r\n.continue-button {\r\n  display: block;\r\n  cursor: pointer;\r\n  color: white;\r\n  background: rgb(0, 0, 150);\r\n  border: none;\r\n  border-radius: 7px;\r\n}\r\n\r\n.continue-button.disabled {\r\n  background-color: black;\r\n  cursor: auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/character-creation/character-creation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid \">\r\n  <div class=\"row h-100 \">\r\n    <div class=\"col-3 sidebar p-3 text-center\">\r\n      <h1>Wyscigi</h1>\r\n      <ul>\r\n        <li *ngFor=\"let race of races\" (click)=\"changeRace(race)\" [class.active]=\"character.race === race\" class=\"mb-3 py-2\">\r\n          {{race}}\r\n        </li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"col-6 text-center text-white p-3\">\r\n      <h2>Race</h2>\r\n      <p>{{ character.race }}</p>\r\n      <h2>Class</h2>\r\n      <p> {{ character.class }} </p>\r\n      <h2>Plec</h2>\r\n      <div class=\"d-flex justify-content-center\">\r\n        <div class=\"gender-button mr-1\" [class.active]=\"character.gender === 'Male'\" (click)=\"changeGender('Male')\">\r\n          <i class=\"fas fa-mars\"></i>\r\n        </div>\r\n        <div class=\"gender-button ml-1\" [class.active]=\"character.gender === 'Female'\" (click)=\"changeGender('Female')\">\r\n          <i class=\"fas fa-venus\"></i>\r\n        </div>\r\n      </div>\r\n      <h2>Name</h2>\r\n      <input type=\"text\" placeholder=\"name\" class=\"mb-5 px-2\" [(ngModel)]=\"character.name\" (input)=\"changeName()\">\r\n      <button class=\"btn continue-button px-5 py-2 mx-auto\" [class.disabled]=\"!characterComplete\" (click)=\"createCharacter()\">Create Charakter\r\n\r\n      </button>\r\n    </div>\r\n    <div class=\"col-3 sidebar p-3 text-center\">\r\n      <h1>Klasy</h1>\r\n      <ul>\r\n        <li *ngFor=\"let class of classes\" (click)=\"changeClass(class)\" [class.active]=\"character.class === class\" class=\"mb-3 py-2\">\r\n          {{class}}\r\n        </li>\r\n      </ul>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/character-creation/character-creation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharacterCreationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_character_options__ = __webpack_require__("./src/app/models/character-options.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CharacterCreationComponent = /** @class */ (function () {
    function CharacterCreationComponent() {
        this.character = {
            race: '--Choose--',
            class: '--Choose--',
            gender: undefined,
            name: undefined
        };
        this.characterComplete = false;
        this.races = __WEBPACK_IMPORTED_MODULE_1__models_character_options__["a" /* CharacterOptions */].races;
        this.classes = __WEBPACK_IMPORTED_MODULE_1__models_character_options__["a" /* CharacterOptions */].classes;
        this.gender = __WEBPACK_IMPORTED_MODULE_1__models_character_options__["a" /* CharacterOptions */].genders;
    }
    CharacterCreationComponent.prototype.ngOnInit = function () { };
    CharacterCreationComponent.prototype.changeRace = function (race) {
        this.character.race = race;
        this.checkCompleted();
    };
    CharacterCreationComponent.prototype.changeClass = function (newClass) {
        this.character.class = newClass;
        this.checkCompleted();
    };
    CharacterCreationComponent.prototype.changeGender = function (gender) {
        this.character.gender = gender;
        this.checkCompleted();
    };
    CharacterCreationComponent.prototype.changeName = function () {
        this.checkCompleted();
    };
    CharacterCreationComponent.prototype.checkCompleted = function () {
        this.characterComplete =
            this.character.race !== '--Choose--' &&
                this.character.class !== '--Choose--' &&
                this.character.gender &&
                this.character.name;
    };
    CharacterCreationComponent.prototype.createCharacter = function () {
        if (!this.characterComplete) {
            return;
        }
        console.log(this.character);
    };
    CharacterCreationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-character-creation',
            template: __webpack_require__("./src/app/components/character-creation/character-creation.component.html"),
            styles: [__webpack_require__("./src/app/components/character-creation/character-creation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CharacterCreationComponent);
    return CharacterCreationComponent;
}());



/***/ }),

/***/ "./src/app/components/fight/fight.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/fight/fight.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  fight works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/fight/fight.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FightComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FightComponent = /** @class */ (function () {
    function FightComponent() {
    }
    FightComponent.prototype.ngOnInit = function () {
    };
    FightComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-fight',
            template: __webpack_require__("./src/app/components/fight/fight.component.html"),
            styles: [__webpack_require__("./src/app/components/fight/fight.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FightComponent);
    return FightComponent;
}());



/***/ }),

/***/ "./src/app/components/inventory/inventory.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/inventory/inventory.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  inventory works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/inventory/inventory.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InventoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InventoryComponent = /** @class */ (function () {
    function InventoryComponent() {
    }
    InventoryComponent.prototype.ngOnInit = function () {
    };
    InventoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-inventory',
            template: __webpack_require__("./src/app/components/inventory/inventory.component.html"),
            styles: [__webpack_require__("./src/app/components/inventory/inventory.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InventoryComponent);
    return InventoryComponent;
}());



/***/ }),

/***/ "./src/app/components/start/start.component.css":
/***/ (function(module, exports) {

module.exports = ".container-fluid {\r\n  height: 100vh;\r\n  background: rgba(0, 0, 0, 0.5);\r\n  padding-top: calc(50vh - 200px);\r\n}\r\n\r\n.container-fluid h1 {\r\n  font-size: 70px;\r\n}\r\n\r\n.container-fluid a {\r\n  font-size: 20px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/start/start.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid text-center text-white\">\r\n  <h1 class=\"mb-5\">{{ gameTitle }}</h1>\r\n  <a routerLink=\"/character-creation\" class=\"btn btn-primary text-uppercase mb-2 px-5\"> Start</a>\r\n  <p>Stworzony by: Arek R</p>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/start/start.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StartComponent = /** @class */ (function () {
    function StartComponent() {
        this.gameTitle = 'Angular RPG';
    }
    StartComponent.prototype.ngOnInit = function () {
    };
    StartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-start',
            template: __webpack_require__("./src/app/components/start/start.component.html"),
            styles: [__webpack_require__("./src/app/components/start/start.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StartComponent);
    return StartComponent;
}());



/***/ }),

/***/ "./src/app/components/story/story.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/story/story.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  story works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/story/story.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StoryComponent = /** @class */ (function () {
    function StoryComponent() {
    }
    StoryComponent.prototype.ngOnInit = function () {
    };
    StoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-story',
            template: __webpack_require__("./src/app/components/story/story.component.html"),
            styles: [__webpack_require__("./src/app/components/story/story.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StoryComponent);
    return StoryComponent;
}());



/***/ }),

/***/ "./src/app/models/character-options.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RaceOptions */
/* unused harmony export ClassOptions */
/* unused harmony export GenderOptions */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharacterOptions; });
var RaceOptions;
(function (RaceOptions) {
    RaceOptions["human"] = "Human";
    RaceOptions["dwarf"] = "Dwarf";
    RaceOptions["elf"] = "Elf";
    RaceOptions["halfling"] = "Halfling";
})(RaceOptions || (RaceOptions = {}));
var ClassOptions;
(function (ClassOptions) {
    ClassOptions["warrior"] = "Warrior";
    ClassOptions["ranger"] = "Ranger";
    ClassOptions["rogue"] = "Rogue";
    ClassOptions["priest"] = "Priest";
})(ClassOptions || (ClassOptions = {}));
var GenderOptions;
(function (GenderOptions) {
    GenderOptions["male"] = "Male";
    GenderOptions["female"] = "Female";
})(GenderOptions || (GenderOptions = {}));
var CharacterOptions = {
    races: [
        RaceOptions.human,
        RaceOptions.dwarf,
        RaceOptions.elf,
        RaceOptions.halfling
    ],
    classes: [
        ClassOptions.warrior,
        ClassOptions.ranger,
        ClassOptions.rogue,
        ClassOptions.priest
    ],
    genders: [GenderOptions.male, GenderOptions.female]
};


/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map