import { Directive } from '@angular/core';
import { AbstractControl, FormGroup, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: 'form[roundTrip]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: RoundTripValidationDirective, multi: true }
  ]
})
export class RoundTripValidationDirective implements Validator {

  validate(c: AbstractControl): object {

    let group = c as FormGroup;

    let fromCtrl = group.controls['from'];
    let toCtrl = group.controls['to'];

    if (!fromCtrl || !toCtrl) return {};

    if (fromCtrl.value === toCtrl.value) {
      return { roundTrip: true }
    }
    return {};

  }

  constructor() { }

}
