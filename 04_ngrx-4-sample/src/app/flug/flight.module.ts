import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {FlightSearchComponent} from "./flight-booking/flight-search/flight-search.component";
import {SharedModule} from "../shared/shared.module";
import {FlightCardComponent} from "./flight-booking/flight-search/flight-card.component";
import {FlightSearchReactiveComponent} from "./flight-booking-reactive/flight-search-reactive.component";
import {FlightService} from "./services/flight.service";
import {FlightEditComponent} from "./flight-booking/flight-edit/flight-edit.component";
import {PassengerSearchComponent} from "./flight-booking/passenger-search/passenger-search.component";
import {FlightRouterModule, FLIGHT_ROUTER_PROVIDERS} from "./flight.routes";
import {FlightBookingComponent} from "./flight-booking/flight-booking.component";
import {FlightHistoryComponent} from "./flight-history.component/flight-history.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        ReactiveFormsModule,
        FlightRouterModule
    ],
    declarations: [
        FlightSearchComponent,
        FlightCardComponent,
        FlightSearchReactiveComponent,
        FlightEditComponent,
        PassengerSearchComponent,
        FlightBookingComponent,
        FlightHistoryComponent
    ],
    providers: [
        FLIGHT_ROUTER_PROVIDERS
    ],
    exports: []
})
export class FlightModule {
}