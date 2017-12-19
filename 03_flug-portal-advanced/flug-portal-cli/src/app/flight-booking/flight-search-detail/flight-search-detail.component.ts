import { Component, OnInit } from '@angular/core';
import { AnimationEvent } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';
import { FlightService } from '../services/flight.service';
import { Flight } from '../../entities/flight';
import { LuggageOption, FlightClass } from './flight-request';

@Component({
    selector: 'flight-search-detail',
    templateUrl: 'flight-search-detail.component.html',
    styleUrls: ['flight-search-detail.component.css']
})
export class FlightSearchDetailComponent implements OnInit {

    from: string = 'Graz';
    to: string = 'Hamburg';
    flightClass: FlightClass;
    nonstop: boolean;
    luggage: LuggageOption;
    date: string = (new Date()).toISOString();

    public luggageOptions: Array<LuggageOption>;
    public flightClasses: Array<FlightClass>;

    public selectedFlight: Flight;
    public animationInProgress = false;

    constructor(private flightService: FlightService, route: ActivatedRoute) {
        route.queryParams.subscribe((p) => {
            // console.debug('queryParams', p);
        });
    }

    ngOnInit() {
        this.luggageOptions = [
            { id: 0, name: 'No luggage' },
            { id: 1, name: '1 piece of luggage' },
            { id: 2, name: '2 pieces of luggage' }
        ];

        this.flightClasses = [
            { id: 1, name: '1st Class' },
            { id: 2, name: 'Business Class' },
            { id: 3, name: 'Economy Class' }
        ];


    }

    // cmp.flights
    public get flights() {
        return this.flightService.flights;
    }

    public select(f: Flight): void {
        this.selectedFlight = f;
    }

    public search(): void {

        // Leider unterstützt die Web API nur from und to
        // die anderen Felder werden hier aber ausgegeben
        // und dienen der Veranschaulichung

        console.debug('search', this);

        this.flightService
            .find(this.from, this.to);
        // .map(function(resp) { return resp.json() })
    }

    public disableButton(event: AnimationEvent): void {
        this.animationInProgress = event.phaseName === 'start';
        console.log(event);
    }
}
