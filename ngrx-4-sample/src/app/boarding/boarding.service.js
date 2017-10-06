System.register(['angular2/http', 'angular2/core', '@ngrx/store'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var http_1, core_1, store_1;
    var BoardingService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (store_1_1) {
                store_1 = store_1_1;
            }],
        execute: function() {
            BoardingService = (function () {
                function BoardingService(http, store) {
                    this.http = http;
                    this.store = store;
                    this.buchungen = [];
                    this.error = "";
                }
                BoardingService.prototype.find = function (flugId) {
                    var url = "http://www.angular.at/api/buchung";
                    var search = new http_1.URLSearchParams();
                    search.set('flugNummer', flugId);
                    var headers = new http_1.Headers({
                        'Accept': 'text/json'
                    });
                    var that = this;
                    return this.http
                        .get(url, { headers: headers, search: search })
                        .map(function (r) { return r.json(); });
                };
                BoardingService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, store_1.Store])
                ], BoardingService);
                return BoardingService;
            }());
            exports_1("BoardingService", BoardingService);
        }
    }
});
//# sourceMappingURL=boarding.service.js.map