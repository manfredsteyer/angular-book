export class Person {
    id: number;
    firstName: string;
    lastName: string;

    fullName() {
        return this.firstName + " " + this.lastName;
    }
}

export class Passenger extends Person {
    passengerStatus: string;
}

export class Pilot extends Person {
    licenseNummber: string;
}

let person1: Person = new Passenger();
person1.firstName = "Max";
person1.lastName = "Muster";

let person2: Person = new Pilot();
person2.firstName = "Jens";
person2.lastName = "Wolkenmeyer";

let isPerson = person1 instanceof Person; // true
let isPassenger = person1 instanceof Passenger; // true
let isPilot = person1 instanceof Pilot; // false

console.debug('isPerson', isPerson);
console.debug('isPilot', isPilot);
console.debug('isPassenger', isPassenger);  

// 
// Type Assertions
//

let person1AsPassenger = person1 as Passenger; // Type Assertion
// let person1AsPassenger = <Pilot>person1; // Alternative Schreibweise
let status = person1AsPassenger.passengerStatus;
