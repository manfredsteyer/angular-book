import { NgModule } from '@angular/core';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightCardComponent } from './flight-card/flight.card.component';
import { AltFlightCardComponent } from './alt-flight-card/alt-flight.card.component';
import { FlightListComponent } from './alt-flight-card/flight-list';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { FlightSearchReactiveComponent } from './flight-search-reactive/flight-search-reactive.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { FlightBookingRouterModule } from './flight-booking.routes';
import { FlightBookingComponent } from './flight-booking.component';
import { FlightService } from './services/flight.service';
import { FlightResolver } from './services/flight.resolver';
import { FlightSearchMultistopComponent } from './flight-search-multistop/flight-search-multistop.component';
import { FlightSearchDetailComponent } from './flight-search-detail/flight-search-detail.component';

@NgModule({
    imports: [
        CommonModule, // ngFor
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        FlightBookingRouterModule
    ],
    declarations: [
        FlightSearchComponent,
        FlightCardComponent,
        AltFlightCardComponent,
        FlightListComponent,
        FlightSearchReactiveComponent,
        PassengerSearchComponent,
        FlightEditComponent,
        FlightBookingComponent,
        FlightSearchMultistopComponent,
        FlightSearchDetailComponent
    ],
    providers: [
        FlightService,
        FlightResolver
    ],
    exports: []
})
export class FlightBookingModule {

}
