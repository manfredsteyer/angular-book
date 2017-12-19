import { Directive } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { FlightService } from '../../flight-booking/flight-search/flight.service';
import { map } from 'rxjs/operators/map';
import { delay } from 'rxjs/operators';

@Directive({
  selector: 'input[asyncCity]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: AsyncCityValidatorDirective,
      multi: true
    }
  ]
})
export class AsyncCityValidatorDirective implements AsyncValidator {

  constructor(private flightService: FlightService) {

  }

  validate(c: AbstractControl): Observable<object> {

    return this.flightService
              .find(c.value, '')
              .pipe(map(flights => (flights.length == 0)? {asyncCity:true}: {} ));


  }
}
