export interface Flight {
    id: number;
    from: string;
    to: string;
    date: string; 

    distance?: number;    
    calcPrice?(): number;
}

export class ScheduledFlight implements Flight {
    id: number;
    from: string;
    to: string;
    date: string; 

    distance: number;  

    calcPrice() {
        return this.distance / 3;
    }

    get unixDate() {
        return new Date(this.date).getTime();
    }
    
    set unixDate(time: number) {
        let date = new Date(time);
        this.date = date.toISOString();
    }

}

export class CharterFlight implements Flight {
    
    id: number;
    from: string;
    to: string;
    date: string; 

    distance: number;  

    calcPrice() {
        return this.distance / 2;
    }
}


