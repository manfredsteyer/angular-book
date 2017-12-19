// invoice.ts
import { Flight, CharterFlight } from './flight';

class Invoice<T> {
    subject: T;
    price: number;

    // Zugriff auf id löst Kompilierungsfehler aus,
    // weil T alles Mögliche sein könnte.
    // Das nachfolgende Beispiel löst das Problem.
    toString() {
        let id = '';
        // id = this.subject.id; // Fehler
        return `${id}: ${this.price}`;
    }
    
}

class FlightInvoice<T extends Flight> {
    subject: T;
    amount: number;

    toString() {
        return `Flight ${this.subject.id }: ${this.amount}`;
    }
    
}

let charterFlightToCharge = new CharterFlight();
charterFlightToCharge.from = 'Graz';
charterFlightToCharge.to = 'Hamburg';
charterFlightToCharge.distance = 1000;

let charterInvoice = new FlightInvoice<CharterFlight>();
charterInvoice.subject = charterFlightToCharge;
charterInvoice.amount = charterFlightToCharge.calcPrice() * 1.50;

console.debug('charterInvoice', charterInvoice.toString());
