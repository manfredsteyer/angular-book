import { Buchung } from '../entities/booking';
export interface AppState {
    boarding: BoardingState;

    // ... here you could find further properties ...    
}

export interface BoardingState {
    undoStack: Array<BoardingState>;
    redoStack: Array<BoardingState>;
    bookings: Array<Buchung>,
    message: string,
    statistics: BoardingStatistic;
}

export interface BoardingStatistic {
    countBoarded: number;
    countCheckedIn: number;
    countBooked: number;
}