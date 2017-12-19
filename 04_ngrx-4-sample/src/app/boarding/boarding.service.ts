
import { Http, URLSearchParams, Headers } from '@angular/http';
import { Injectable} from '@angular/core';
import { Store} from '@ngrx/store';
import { BOOKINGS_LOADED } from './boarding.reducer';

@Injectable()
export class BoardingService {
    
    constructor(private http: Http, private store: Store<any> ) {
    }
    
    buchungen: Array<any> = [];
    error = "";
    
    public find(flugId) {
        
        var url = "http://www.angular.at/api/buchung";
        var search = new URLSearchParams();
        search.set('flugNummer', flugId);
        
        var headers = new Headers({
           'Accept': 'text/json' 
        });
        
        var that = this;
        
        return this.http
                    .get(url, { headers, search})
                    .map(r => r.json());
        
    }
    
}