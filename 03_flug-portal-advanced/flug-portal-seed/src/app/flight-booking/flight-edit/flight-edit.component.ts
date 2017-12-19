import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Flight } from '../../entities/flight';
import { FlightService } from '../services/flight.service';

@Component({
    templateUrl: './flight-edit.component.html'
})
export class FlightEditComponent implements OnInit {

    id: string;
    flight: Flight;

    exitWarning = {
        show: false,
        resolve: null
    };

    message;

    constructor(private flightService: FlightService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params.subscribe(p => {
            this.id = p['id'];
        });

        this.route.data.subscribe(data => {
            this.flight = data['flight'];
        });


    }

    save() {
        console.warn('save ist noch nicht implementiert');
    }

    decide(decision: boolean) {
        this.exitWarning.show = false;
        this.exitWarning.resolve(decision);
    }

    canDeactivate() {
        this.exitWarning.show = true;
        return new Promise((resolve) => {
            this.exitWarning.resolve = resolve;
        });
    }

    remove() {
        console.log('remove');
    }
}
