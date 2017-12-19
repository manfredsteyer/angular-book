import { Component } from '@angular/core';
import { AnimationEvent } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';
import { FlightService } from '../services/flight.service';
import { Flight } from '../../entities/flight';

@Component({
    selector: 'flight-search',
    templateUrl: './flight-search.component.html',
    styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent {

    public from: string = 'Hamburg';
    public to: string = 'Graz';
    public date: string = (new Date()).toISOString();
    public selectedFlight: Flight;
    public animationInProgress = false;

    constructor(private flightService: FlightService, route: ActivatedRoute) {
        route.queryParams.subscribe((p) => {
            // console.debug('queryParams', p);
        });
    }

    // cmp.flights
    public get flights() {
        return this.flightService.flights;
    }

    public select(f: Flight): void {
        this.selectedFlight = f;
    }

    public search(): void {

        this.flightService
            .find(this.from, this.to);
        // .map(function(resp) { return resp.json() })
    }

    public disableButton(event: AnimationEvent): void {
        this.animationInProgress = event.phaseName === 'start';
        console.log(event);
    }
}
