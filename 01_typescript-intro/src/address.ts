export abstract class AbstractAddress {
    id: number;
    street: string;
    zipCode: string;
    city: string;

    constructor(id: number) {
        this.id = id;
    }

    fullAddress() {
        return this.street + ", " + this.zipCode + " " + this.city;
    }

    abstract toCSV(): string;
    
}

class CompanyAddress extends AbstractAddress {
    companyName: string;

    toCSV() {
        return `${this.id};${this.companyName};${this.street};${this.zipCode};${this.city}`;
    }
}

class PrivateAddress extends AbstractAddress {
    firstName: string;
    lastName: string;

    constructor() {
        super(0);
    }

    fullAddress() {
        return this.firstName + " " + this.lastName + ", " + super.fullAddress();
    }

    toCSV() {
        return `${this.id};${this.firstName};${this.lastName};${this.street};${this.zipCode};${this.city}`;
    }
}


let a1 = new CompanyAddress(1);
a1.id = 1;
a1.city = "Graz";
a1.street = "Hier";
a1.zipCode = "8010";
a1.companyName = "Steh & Schau GmbH";

console.debug('a1 as csv', a1.toCSV());
console.debug('a1 as full Address', a1.fullAddress());

