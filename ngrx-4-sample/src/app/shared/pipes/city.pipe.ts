import { Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'city',
    pure: true
})
export class CityPipe implements PipeTransform{

    transform(value: any, ...args: any[]): any {

        // Graz --> Flughafen Graz Thalerhof, GRZ

        let fmt = args[0];
        let long, short;

        switch(value) {
            case "Graz":
                long = "Flughafen Graz Thalerhof";
                short = "GRZ";
                break;
            case "Hamburg":
                long = "Airport Hamburg Helmut Schmidt";
                short = "HAM";
                break;
            default:
                long = short = "ROM";
        }

        if (fmt === 'short') return short;
        return long;

    }

}