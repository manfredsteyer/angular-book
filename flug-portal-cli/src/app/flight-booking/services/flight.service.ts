import { Injectable, Inject } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { BASE_URL } from '../../app.tokens';
import { Observable } from 'rxjs/Observable';
import { Flight } from '../../entities/flight';
import { OAuthService } from 'angular-oauth2-oidc';

@Injectable()
export class FlightService {

    public flights: Array<Flight> = [];

    constructor(private oauthService: OAuthService,
                private http: Http,
                @Inject(BASE_URL) private baseUrl: string) {
    }

    findById(id: string): Observable<Flight> {

        // let url = this.baseUrl + '/api/secureflight';
        // let url = '/data/flight.json';
        const url = this.baseUrl + '/api/flight';

        const headers = new Headers();
        headers.set('Accept', 'text/json');
        headers.set('Authorization', 'Bearer ' + this.oauthService.getAccessToken());

        const search = new URLSearchParams();
        search.set('id', id);

        return this
            .http
            .get(url, {headers, search})
            .map(resp => resp.json());

    }

    find(from: string, to: string): void {

        const url = this.baseUrl + '/api/flight';
        // let url = this.baseUrl + '/api/secureflight';
        // let url = '/data/flights.json';

        const headers = new Headers();
        headers.set('Accept', 'text/json');
        headers.set('Authorization', 'Bearer ' + this.oauthService.getAccessToken());

        // this.oauthService.hasValidAccessToken();
        // this.oauthService.hasValidIdToken();

        const search = new URLSearchParams();
        search.set('from', from);
        search.set('to', to);

        this
            .http
            .get(url, {headers, search})
            .map(resp => resp.json())
            .subscribe(
                (flights) => {
                    this.flights = flights;
                },
                (err) => {
                    console.warn(err);
                }
            );
    }
}
