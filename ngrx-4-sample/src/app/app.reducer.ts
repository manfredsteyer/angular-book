import { boardingReducer, initialBoardingState } from './boarding/boarding.reducer';

export const appReducerMap = { 
    boarding: boardingReducer 
};

export const initAppState = { 
    boarding: initialBoardingState 
};