"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var dapp_1 = require('./dapp');
var dapp_service_1 = require('./dapp.service');
var DappDetailComponent = (function () {
    function DappDetailComponent(dappService, route, location) {
        this.dappService = dappService;
        this.route = route;
        this.location = location;
    }
    DappDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.dappService.getDapp(id)
                .then(function (dapp) { return _this.dapp = dapp; });
        });
    };
    DappDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', dapp_1.Dapp)
    ], DappDetailComponent.prototype, "dapp", void 0);
    DappDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-dapp-detail',
            templateUrl: 'dapp-detail.component.html',
            styleUrls: ['dapp-detail.component.css'],
        }), 
        __metadata('design:paramtypes', [dapp_service_1.DappService, router_1.ActivatedRoute, common_1.Location])
    ], DappDetailComponent);
    return DappDetailComponent;
}());
exports.DappDetailComponent = DappDetailComponent;
//# sourceMappingURL=dapp-detail.component.js.map