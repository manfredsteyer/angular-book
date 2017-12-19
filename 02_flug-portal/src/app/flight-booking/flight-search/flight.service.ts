
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Flight } from '../../entities/flight';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BASE_URL } from '../../app.tokens';

@Injectable()
export class FlightService {

  constructor(
    private http: HttpClient,
    @Inject(BASE_URL) private baseUrl: string) {
  }

  flights: Flight[] = [];

  load(from: string, to: string): void {
    this.find(from, to).subscribe(
      flights => { this.flights = flights },
      err => {console.error('error loading flights', err); }
    );
  }

  find(from: string, to: string): Observable<Flight[]> {
    let url = this.baseUrl + '/flight';

    let params = new HttpParams()
      .set('from', from)
      .set('to', to);

    let headers = new HttpHeaders().set('Accept', 'application/json');

    return this.http.get<Flight[]>(url, {params, headers});
  }
}


