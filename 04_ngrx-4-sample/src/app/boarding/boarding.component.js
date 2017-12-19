System.register(['angular2/core', './boarding.service', '@ngrx/store', './boarding.reducer', './buchungs-status.pipe', './buchungs-status-color.pipe'], function(exports_1, context_1) {
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
    var core_1, boarding_service_1, store_1, boarding_reducer_1, buchungs_status_pipe_1, buchungs_status_color_pipe_1;
    var BoardingComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (boarding_service_1_1) {
                boarding_service_1 = boarding_service_1_1;
            },
            function (store_1_1) {
                store_1 = store_1_1;
            },
            function (boarding_reducer_1_1) {
                boarding_reducer_1 = boarding_reducer_1_1;
            },
            function (buchungs_status_pipe_1_1) {
                buchungs_status_pipe_1 = buchungs_status_pipe_1_1;
            },
            function (buchungs_status_color_pipe_1_1) {
                buchungs_status_color_pipe_1 = buchungs_status_color_pipe_1_1;
            }],
        execute: function() {
            BoardingComponent = (function () {
                function BoardingComponent(boardingService, store) {
                    this.boardingService = boardingService;
                    this.store = store;
                }
                BoardingComponent.prototype.ngOnInit = function () {
                    var that = this;
                    this.boardingService.find(1).subscribe(function (buchungen) {
                        that.store.dispatch({ type: boarding_reducer_1.BOOKINGS_LOADED, payload: buchungen });
                    }, function (err) {
                        console.debug(err);
                    });
                    this.statistics = this.store.select(function (s) { return s.boarding.statistics; });
                };
                Object.defineProperty(BoardingComponent.prototype, "bookings", {
                    get: function () {
                        return this.store.select(function (s) { return s.boarding.bookings; });
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BoardingComponent.prototype, "message", {
                    get: function () {
                        return this.store.select(function (s) { return s.boarding.message; });
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BoardingComponent.prototype, "countBoarded", {
                    get: function () {
                        return this.statistics.map(function (s) { return s.countBoarded; });
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BoardingComponent.prototype, "countBooked", {
                    get: function () {
                        return this.statistics.map(function (s) { return s.countBooked; });
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BoardingComponent.prototype, "countCheckedIn", {
                    get: function () {
                        return this.statistics.map(function (s) { return s.countCheckedIn; });
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BoardingComponent.prototype, "undoDisabled", {
                    get: function () {
                        return this.store.select(function (s) { return s.boarding.undoStack; }).map(function (s) { return s.length <= 1; });
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BoardingComponent.prototype, "redoDisabled", {
                    get: function () {
                        return this.store.select(function (s) { return s.boarding.redoStack; }).map(function (s) { return s.length == 0; });
                    },
                    enumerable: true,
                    configurable: true
                });
                BoardingComponent.prototype.changeState = function (buchung, state) {
                    if (buchung.buchungsStatus == state)
                        return;
                    var newBuchung = Object.assign({}, buchung, { buchungsStatus: state });
                    this.store.dispatch({ type: boarding_reducer_1.BOOKING_STATE_CHANGED, payload: newBuchung });
                };
                BoardingComponent.prototype.undo = function () {
                    this.store.dispatch({ type: boarding_reducer_1.BOOKING_UNDO });
                };
                BoardingComponent.prototype.redo = function () {
                    this.store.dispatch({ type: boarding_reducer_1.BOOKING_REDO });
                };
                BoardingComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/boarding/boarding.component.html',
                        providers: [boarding_service_1.BoardingService],
                        pipes: [buchungs_status_pipe_1.BuchungsStatusPipe, buchungs_status_color_pipe_1.BuchungsStatusColorPipe],
                        changeDetection: core_1.ChangeDetectionStrategy.OnPush
                    }), 
                    __metadata('design:paramtypes', [boarding_service_1.BoardingService, store_1.Store])
                ], BoardingComponent);
                return BoardingComponent;
            }());
            exports_1("BoardingComponent", BoardingComponent);
        }
    }
});
//# sourceMappingURL=boarding.component.js.map