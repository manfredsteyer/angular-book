import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Flight } from '../../entities/flight';
import { HttpClientTestingBackend } from '@angular/common/http/testing/src/backend';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { FlightService } from './flight.service';

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
  // providers: [FlightService]

})
export class FlightSearchComponent implements OnInit {

  from: string;
  to: string;
  // flights: Array<Flight> = [];
  selectedFlight: Flight;

  get flights() {
    return this.flightService.flights;
  }

  basket: object = {
    "3": true,
    "4": false,
    "5": true
  };

  // private http: HttpClient;
  constructor(private flightService: FlightService) {
    //this.http = http;
  }

  ngOnInit() {
  }

  search(): void {
    if (!this.from || !this.to) return;
    this.flightService.load(this.from, this.to);
  }


  select(f: Flight): void {
    this.selectedFlight = f;
  }
}
