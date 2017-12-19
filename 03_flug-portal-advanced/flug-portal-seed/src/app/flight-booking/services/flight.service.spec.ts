import { TestBed, inject, async, fakeAsync, tick } from '@angular/core/testing';
import { ConnectionBackend, BaseRequestOptions, Http, Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { OAuthService } from 'angular-oauth2-oidc';
import { BASE_URL } from '../../app.tokens';
import 'rxjs/add/operator/map';

import { Flight } from '../../entities/flight';
import { FlightService } from './flight.service';

let flightService: FlightService;

const flight: Flight = {
    id: 12,
    date: new Date().toISOString(),
    from: 'Graz',
    to: 'Hamburg'
};

describe('FlightService', () => {

    beforeEach(() => {
        const oAuthServiceStub = {
            getAccessToken: () => {
                return 'ACCESS_TOKEN';
            }
        };

        TestBed.configureTestingModule({
            providers: [
                FlightService,
                MockBackend,
                BaseRequestOptions,
                {provide: OAuthService, useValue: oAuthServiceStub},
                {provide: BASE_URL, useValue: 'localhost'},
                {
                    provide: Http,
                    useFactory: function (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) {
                        return new Http(backend, defaultOptions);
                    },
                    deps: [MockBackend, BaseRequestOptions]
                }
            ]
        });
    });

    beforeEach(inject([MockBackend, FlightService], (mockBackend: MockBackend, _flightService: FlightService) => {

        flightService = _flightService;

        mockBackend.connections.subscribe((mockConnection: MockConnection) => {

            // Timeout zur Simulation längerer Response Zeit
            setTimeout(() => {

                // HTTP Response
                mockConnection.mockRespond(new Response(
                    new ResponseOptions(
                        {
                            body: JSON.stringify(flight)
                        }
                    )
                ));

            }, 200);

        });

    }));

    it('should find a flight by id with jasmine.done', (done) => {
        flightService.findById('12').subscribe(item => {
            expect(item).toEqual(flight);
            done();
        });
    });

    it('should find a flight by id with async', async(() => {
        flightService.findById('12').subscribe(item => {
            expect(item).toEqual(flight);
        });
    }));

    it('should find a flight by id with fakeAsync', fakeAsync(() => {
        let response;
        flightService.findById('12').subscribe(item => response = item);

        tick(100);
        expect(response).toBeUndefined();

        tick(100);
        expect(response).toEqual(flight);
    }));

});
