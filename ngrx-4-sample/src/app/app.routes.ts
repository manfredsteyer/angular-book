import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {FlightSearchComponent} from "./flug/flight-booking/flight-search/flight-search.component";
import {FlightEditComponent} from "./flug/flight-booking/flight-edit/flight-edit.component";
import {PassengerSearchComponent} from "./flug/flight-booking/passenger-search/passenger-search.component";

const ROUTE_CONFIG: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'flight-search',
        component: FlightSearchComponent
    },
    {
        path: 'flight-edit/:id',
        component: FlightEditComponent
    },
    {
        path: 'passenger-search',
        component: PassengerSearchComponent
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];

export let AppRouterModule = RouterModule.forRoot(ROUTE_CONFIG);