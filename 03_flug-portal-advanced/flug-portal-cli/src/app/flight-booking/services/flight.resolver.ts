import { Flight } from '../../entities/flight';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FlightService } from './flight.service';
import { Injectable } from '@angular/core';

@Injectable()
export class FlightResolver implements Resolve<Flight> {
    constructor(private flightService: FlightService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>|Promise<any>|any {
        const id = route.params['id'];
        return this.flightService.findById(id);
    }
}
