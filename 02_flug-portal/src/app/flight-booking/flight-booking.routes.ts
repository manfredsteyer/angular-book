import { Routes } from '@angular/router';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { FlightEditComponent } from './flight-edit/flight-edit.component';

export const FLIGHT_BOOKING_ROUTES: Routes = [
  {
    path: 'flight-search',
    component: FlightSearchComponent
  },
  {
    path: 'passenger-search',
    component: PassengerSearchComponent
  },
  {
    path: 'flight-edit/:id',
    component: FlightEditComponent
  }
]
