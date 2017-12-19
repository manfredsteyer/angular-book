import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityPipe } from './pipes/city.pipe';
import { CityValidatorDirective } from './validation/city-validator.directive';
import { RoundTripValidationDirective } from './validation/round-trip-validation.directive';
import { AsyncCityValidatorDirective } from './validation/async-city-validator.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CityPipe,
    CityValidatorDirective,
    RoundTripValidationDirective,
    AsyncCityValidatorDirective

  ],
  exports: [
    CityPipe,
    CityValidatorDirective,
    RoundTripValidationDirective,
    AsyncCityValidatorDirective
  ]
})
export class SharedModule { }
