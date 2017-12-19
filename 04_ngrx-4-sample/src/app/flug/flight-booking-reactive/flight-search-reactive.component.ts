import { Component } from '@angular/core';
import {Flight} from "../../entities/flight";
import { Http, URLSearchParams } from '@angular/http';
import {FlightService} from "../services/flight.service";
import {FormBuilder, FormGroup,Validators} from "@angular/forms";
import {CityValidator} from "../../shared/validation/city.validator";
import {CityAsyncValidator} from "../../shared/validation/city.asyc-validator";

@Component({
    selector: 'flight-search-reactive',
    templateUrl: './flight-search-reactive.component.html',
    providers: [FlightService],
    styles: ['./flight-search-reactive.component.css']
})
export class FlightSearchReactiveComponent {


    public filter: FormGroup;

    public flights: Array<Flight> = [];
    public selectedFlight: Flight;

    public metadata = [];

    constructor(private flightService: FlightService, private fb: FormBuilder) {

        this.metadata.push({
            label: 'Von',
            name: 'from'
        });

        this.metadata.push({
            label: 'Nach',
            name: 'to'
        });

        this.filter = fb.group({
            from: [
                'Hamburg',
                [
                    Validators.required,
                    Validators.minLength(3),
                    Validators.maxLength(30),
                    CityValidator.validateStatic
                ],
                [
                    CityAsyncValidator.staticValidate
                ]
            ],
            to: ['Graz']
        });

        this.filter.valueChanges.subscribe((val) => {
            console.debug('valueChanges', val);
        })

        this.filter.controls['from'].valueChanges.subscribe((val) => {
            console.debug('valueChanges/from', val);
        })

    }

    search() {

        let value = this.filter.value;

        this.flightService
            .find(value.from, value.to)
            .subscribe(flights => {
                this.flights = flights;
            },
            err => {
                console.error('Fehler beim Laden', err);
            }
        );

    }

    select(flight: Flight) {
        this.selectedFlight = flight;
    }

}