import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: 'input[city]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CityValidatorDirective,
      multi: true
    }
  ]
})
export class CityValidatorDirective implements Validator {
  @Input() city: string;

  validate(c: AbstractControl): object {

    let allowed = this.city.split(',');
    let value = c.value;

    if (allowed.indexOf(value) > -1) {
      return {};
    }

    return {
      city: {
        allowed: allowed,
        actual: c.value,
        reason: 42
      }
    }

  }

  registerOnValidatorChange?(fn: () => void): void {
    throw new Error("Method not implemented.");
  }

  constructor() { }

}
