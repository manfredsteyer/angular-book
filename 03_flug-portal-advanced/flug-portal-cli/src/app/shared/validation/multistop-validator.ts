import { FormArray } from '@angular/forms';

export class MultistopValidator {

    static validate(formArray: FormArray): any {

        if (formArray.length < 2) {
            return {};
        }

        for (let i = 1; i < formArray.length; i++) {
            const lastValue = formArray.at(i - 1).get('city').value;
            const thisValue = formArray.at(i).get('city').value;

            if (lastValue === thisValue) {
                return {
                    multistop: true
                };
            }
        }

        return {};

    }

}
