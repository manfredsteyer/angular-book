import {
    inject,
    async,
    fakeAsync,
    tick,
    ComponentFixture,
    TestBed
} from '@angular/core/testing';

import { HttpModule } from '@angular/http';
import {Observable} from 'rxjs';
import {FlightSearchComponent} from "./flight-search.component";
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import {FlightModule} from "../../flight.module";
import {FlightService} from "../../services/flight.service";
import {BASE_URL_TOKEN} from "../../../app.constants";
import {Flight} from "../../../entities/flight";


// This should only be called once.
TestBed.initTestEnvironment(
    BrowserDynamicTestingModule, platformBrowserDynamicTesting());

class FlightServiceMock {
    findById(id) { return null; }
    find(von, nach) {
        var result = [[{ id: 1, from: 'Graz', to: 'Hamburg', date: '2017-01-01' }]];
        return Observable.from(result);
    }
    save(flug) { return null; }
}

describe('FlugSuchen', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule, FlightModule],
            declarations: [],
            providers: [
                {provide: FlightService, useClass: FlightServiceMock},
                {provide: BASE_URL_TOKEN, useValue: { baseUrl: '' }}
            ]
        });
        TestBed.compileComponents();
    });

    it('should have no selected flight initially', () => {
        var flightSearch = TestBed.createComponent(FlightSearchComponent);
        expect(flightSearch.componentInstance.selectedFlight).toBeUndefined();
    });

    it('should load flights', async(() => {

        TestBed
            .overrideComponent(FlightSearchComponent, { set: { providers:[ {provide: FlightService, useClass: FlightServiceMock} ] }})
            .compileComponents()
            .then(() => {

                var flightSearch = TestBed.createComponent(FlightSearchComponent);

                flightSearch.componentInstance.from = "Graz";
                flightSearch.componentInstance.to = "Hamburg";

                flightSearch.componentInstance.search().then((fluege: Flight[]) => {
                    expect(fluege.length).toEqual(1);
                });
            });
    }));
});