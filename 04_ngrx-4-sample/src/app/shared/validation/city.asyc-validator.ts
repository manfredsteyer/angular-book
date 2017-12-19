import { Validator, NG_ASYNC_VALIDATORS, AbstractControl } from '@angular/forms'
import { Directive, forwardRef } from '@angular/core'

@Directive({
    selector: 'input[async-city]',
    providers: [{
        provide: NG_ASYNC_VALIDATORS,
        useExisting: forwardRef(() => CityAsyncValidator),
        multi: true
    }]
})
export class CityAsyncValidator {

    static staticValidate(c: AbstractControl): any {
        return new Promise((resolve) => {
            // ASYNC
            // - HTTP-Aufruf
            // - Timeout

            setTimeout(() => {

                if (c.value == 'Graz' || c.value == 'Hamburg') {
                    resolve({});
                }
                else {
                    resolve({'async-city': true});
                }

            },300);

        })

    }

    validate(c: AbstractControl): any {

        return CityAsyncValidator.staticValidate(c);

    }



}