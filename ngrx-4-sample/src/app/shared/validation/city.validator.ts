import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms'
import { Directive, forwardRef } from '@angular/core'

@Directive({
    selector: 'input[city]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => CityValidator),
        multi: true
    }]
})
export class CityValidator implements Validator {

    static validateStatic(c: AbstractControl): any {
        if (c.value == 'Graz'
            || c.value == 'Hamburg'
            || c.value == 'Zürich') {
            return { };
        }

        return {
            city: {
                actual: c.value,
                allowed: "Graz,Hamburg,Zürich"
            }
        };
    }

    validate(c: AbstractControl): {} {
        return CityValidator.validateStatic(c);

    }



}