import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { FlightSearchComponent } from './flight-search.component';
import { FlightService } from '../services/flight.service';
import { NO_ERRORS_SCHEMA, DebugElement } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Flight } from '../../entities/flight';

let fixture: ComponentFixture<FlightSearchComponent>;
const flightServiceStub = {
    flights: [],
    find: () => {
    }
};
const activatedRouteStub = {
    queryParams: {
        subscribe: () => {
        }
    }
};

describe('FlightSearchComponent', () => {

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FlightSearchComponent],
            providers: [
                {provide: FlightService, useValue: flightServiceStub},
                {provide: ActivatedRoute, useValue: activatedRouteStub}
            ],
            imports: [FormsModule],
            schemas: [NO_ERRORS_SCHEMA]
        })

        // Lädt css und html Dateien welche über styleUrls oder templateUrl angegeben werden
        TestBed.compileComponents().then(() => {
            fixture = TestBed.createComponent(FlightSearchComponent);
        });

    }));

    it('should show flights of FlightService', () => {
        const flightService: FlightService = TestBed.get(FlightService);

        const flightItem: Flight = {
            id: 1,
            from: 'Graz',
            to: 'Hamburg',
            date: new Date().toISOString()
        };
        flightService.flights = [flightItem, flightItem, flightItem];

        fixture.detectChanges();

        const flightCards = fixture.debugElement.queryAll(By.css('flight-card'));
        expect(flightCards.length).toBe(3);

    });


    it('should search if button is clicked', () => {
        const flightService: FlightService = fixture.debugElement.injector.get(FlightService);

        const searchForm: DebugElement = fixture.debugElement.query(By.css('form'));
        const button: DebugElement = searchForm.query(By.css('button'));

        spyOn(flightService, 'find');

        // Klick auf Button
        button.triggerEventHandler('click', null);
        expect(flightService.find).toHaveBeenCalled();

    });

});
