import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'city',
  pure: true
})
export class CityPipe implements PipeTransform {

  transform(value: string, fmt: string): string {

    console.debug('city-pipe');

    let short, long;

    switch(value) {
      case 'Graz':
        short = 'GRZ';
        long = 'Flughafen Graz-Thalerhof';
        break;
      case 'Hamburg':
        short = 'HAM';
        long = 'Airport Hamburg Fulsbüttel Helmut Schmidt';
        break;
      case 'Nürnberg':
        short = 'NUE';
        long = 'Airport Nürnberg Albrecht Dürrer';
        break;
      default:
        short = long = value;
    }

    if (fmt === 'short') return short;
    return long;

  }

}
