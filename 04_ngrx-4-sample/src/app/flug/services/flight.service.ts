import { Injectable, Inject} from '@angular/core';
import { Http, URLSearchParams, Headers } from '@angular/http';
import { Observable} from 'rxjs';
import {Flight} from "../../entities/flight";
import {BASE_URL_TOKEN} from "../../app.constants";

@Injectable()
export class FlightService {

    constructor(private http: Http, @Inject(BASE_URL_TOKEN) private baseUrl: string) {
    }

    find(from: string, to: string): Observable<Flight[]> {

        let search = new URLSearchParams();
        search.set('from', from);
        search.set('to', to);

        let headers = new Headers();
        headers.set('Accept', 'text/json');

        let url = this.baseUrl + "/api/flight";

        return this.http
                    .get(url, { headers, search })
                    .map(r => r.json());


    }

}