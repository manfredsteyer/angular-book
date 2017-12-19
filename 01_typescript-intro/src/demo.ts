import { CharterFlight, Flight, ScheduledFlight } from './flight';
import { FlightManager } from './flight-manager';

// Uncomment this to execute further examples:
// import './address';
// import './exceptions';
// import './invoice';
// import './person';

function showFlight(f: Flight): void {
    console.debug('---- Flight ----');
    console.debug('id', f.id);
    console.debug('from', f.from);
    console.debug('to', f.to);
    console.debug('date', f.date);
}

let flights: Array<Flight> = [
  { 
    id: 17,
    from: 'Graz',
    to: 'Hamburg',
    date: '2017-02-27'
  },
  { 
    id: 18,
    from: 'Graz',
    to: 'Hamburg',
    date: '2017-02-27'
  },
  { 
    id: 19,
    from: 'Graz',
    to: 'Mallorca',
    date: '2017-02-27'
  },
  { 
    id: 20,
    from: 'Graz',
    to: 'Hamburg',
    date: '2017-02-27'
  }
];

let fm = new FlightManager(flights);
let result1 = fm.search('Graz', 'Hamburg');

for(let f of result1) {
  console.debug('flight', f);
}

//
// Interfaces und Vererbung
//

let f: Flight = new ScheduledFlight();
f.distance = 1000;
// if (f.calcPrice) // if notwendig bei 'strict null checks'
  console.debug('Preis', f.calcPrice());


f = new CharterFlight(); // Ersetzen; dieselbe Variable zeigt nun auf einen CharterFlight
f.distance = 1000;
// if (f.calcPrice) // if notwendig bei 'strict null checks'
    console.debug('Preis', f.calcPrice()); // Neuer Preis


//
//  Getter und Setter
//

let nextFlight = new ScheduledFlight();
nextFlight.date = "2018-12-24";
console.debug('unix-date', nextFlight.unixDate);
nextFlight.unixDate = 1000;
console.debug('unix-date', nextFlight.date);

//
//  Http-Zugriff
//

console.debug('callback-based sample');

fm.searchFromWeb(
    'Hamburg', 
    'Graz', 
    (flights) => { 
        console.debug('flights', flights); 
    },
    (err) => { 
        console.error('error', err); 
    }
);

console.debug('promise based sample');

fm
  .searchFromWebWithPromises('Hamburg', 'Graz')
  .then((flights: Flight[]) => {
    console.debug('Flights', flights);
    return fm.searchFromWebWithPromises('Graz', 'Hamburg')
  })
  .then((flights: Flight[]) => {
    console.debug('Return Flights', flights);
  })
  .catch((err) => {
    console.error('Flights', err);
  })
