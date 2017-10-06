///<reference path='../../node_modules/immutable/dist/immutable.d.ts'/>
System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var BOOKINGS_LOADED, BOOKING_STATE_CHANGED, BOOKING_UNDO, BOOKING_REDO, initialBoardingState, boardingReducer;
    function statusNumberToName(num) {
        switch (num) {
            case 0: return 'countBooked';
            case 1: return 'countCheckedIn';
            case 2: return 'countBoarded';
        }
    }
    function calcStatistic(buchungen) {
        var statistik = {
            countBoarded: 0,
            countBooked: 0,
            countCheckedIn: 0
        };
        for (var _i = 0, buchungen_1 = buchungen; _i < buchungen_1.length; _i++) {
            var buchung = buchungen_1[_i];
            var statusName = statusNumberToName(buchung.buchungsStatus);
            statistik[statusName] = statistik[statusName] + 1;
        }
        return statistik;
    }
    function bookingsLoaded(state, bookings) {
        return {
            undoStack: state.undoStack.concat([state]),
            redoStack: [],
            bookings: bookings,
            statistics: calcStatistic(bookings),
            message: ""
        };
    }
    function bookingStateChanged(state, booking) {
        var idx = state.bookings.findIndex(function (b) { return b.flugID == booking.flugID && b.passagierID == booking.passagierID; });
        // var newBookings = state.bookings.slice(0); // Shallow Copy of Array
        // newBookings[idx] = booking;     
        var oldBookings = state.bookings;
        var newBookings = oldBookings.slice(0, idx).concat([
            booking
        ], oldBookings.slice(idx + 1));
        return {
            undoStack: state.undoStack.concat([state]),
            redoStack: [],
            bookings: newBookings,
            statistics: calcStatistic(newBookings),
            message: ""
        };
    }
    function undo(state) {
        var oldState = state;
        var prevState = state.undoStack[state.undoStack.length - 1];
        var newUndoStack = state.undoStack.slice(0, state.undoStack.length - 1);
        return {
            undoStack: newUndoStack,
            redoStack: oldState.redoStack.concat([oldState]),
            bookings: prevState.bookings,
            message: prevState.message,
            statistics: prevState.statistics
        };
    }
    function redo(state) {
        var oldState = state;
        var redoState = state.redoStack[state.redoStack.length - 1];
        var newRedoStack = oldState.redoStack.slice(0, oldState.redoStack.length - 1);
        return {
            undoStack: redoState.undoStack,
            redoStack: newRedoStack,
            message: redoState.message,
            bookings: redoState.bookings,
            statistics: redoState.statistics
        };
    }
    return {
        setters:[],
        execute: function() {
            exports_1("BOOKINGS_LOADED", BOOKINGS_LOADED = 'BOOKINGS_LOADED');
            exports_1("BOOKING_STATE_CHANGED", BOOKING_STATE_CHANGED = 'BOOKING_STATE_CHANGED');
            exports_1("BOOKING_UNDO", BOOKING_UNDO = "BOOKING_UNDO");
            exports_1("BOOKING_REDO", BOOKING_REDO = "BOOKING_REDO");
            exports_1("initialBoardingState", initialBoardingState = {
                undoStack: [],
                redoStack: [],
                bookings: [],
                message: "",
                statistics: {
                    countBoarded: 0,
                    countBooked: 0,
                    countCheckedIn: 0
                }
            });
            exports_1("boardingReducer", boardingReducer = function (state, action) {
                switch (action.type) {
                    case BOOKINGS_LOADED: return bookingsLoaded(state, action.payload);
                    case BOOKING_STATE_CHANGED: return bookingStateChanged(state, action.payload);
                    case BOOKING_UNDO: return undo(state);
                    case BOOKING_REDO: return redo(state);
                    default: return state;
                }
            });
        }
    }
});
//# sourceMappingURL=boarding.reducer.js.map